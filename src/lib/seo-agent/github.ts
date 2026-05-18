const REPO = 'TomIdoVR/k1-website-'
const BRANCH = 'nextjs'
const BASE = `https://api.github.com/repos/${REPO}`

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  }
}

interface FileEntry {
  path: string
  content: string
}

export async function patchFile(
  filePath: string,
  newContent: string,
  commitMessage: string
): Promise<string> {
  let sha: string | undefined
  const getRes = await fetch(`${BASE}/contents/${filePath}?ref=${BRANCH}`, {
    headers: headers(),
  })
  if (getRes.ok) {
    const current = (await getRes.json()) as { sha: string }
    sha = current.sha
  }

  const body: Record<string, unknown> = {
    message: commitMessage,
    content: Buffer.from(newContent).toString('base64'),
    branch: BRANCH,
  }
  if (sha) body.sha = sha

  const putRes = await fetch(`${BASE}/contents/${filePath}`, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify(body),
  })

  if (!putRes.ok) {
    const err = await putRes.text()
    throw new Error(`GitHub patchFile failed for ${filePath}: ${err}`)
  }

  const result = (await putRes.json()) as { commit: { sha: string } }
  return result.commit.sha
}

export async function commitFiles(
  files: FileEntry[],
  commitMessage: string
): Promise<string> {
  const refRes = await fetch(`${BASE}/git/refs/heads/${BRANCH}`, {
    headers: headers(),
  })
  if (!refRes.ok) throw new Error(`Failed to get branch ref: ${await refRes.text()}`)
  const ref = (await refRes.json()) as { object: { sha: string } }
  const latestCommitSha = ref.object.sha

  const commitRes = await fetch(`${BASE}/git/commits/${latestCommitSha}`, {
    headers: headers(),
  })
  if (!commitRes.ok) throw new Error(`Failed to get commit: ${await commitRes.text()}`)
  const commit = (await commitRes.json()) as { tree: { sha: string } }
  const baseTreeSha = commit.tree.sha

  const treeRes = await fetch(`${BASE}/git/trees`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: files.map((f) => ({
        path: f.path,
        mode: '100644',
        type: 'blob',
        content: f.content,
      })),
    }),
  })
  if (!treeRes.ok) throw new Error(`Failed to create tree: ${await treeRes.text()}`)
  const tree = (await treeRes.json()) as { sha: string }

  const newCommitRes = await fetch(`${BASE}/git/commits`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      message: commitMessage,
      tree: tree.sha,
      parents: [latestCommitSha],
    }),
  })
  if (!newCommitRes.ok) throw new Error(`Failed to create commit: ${await newCommitRes.text()}`)
  const newCommit = (await newCommitRes.json()) as { sha: string }

  const updateRes = await fetch(`${BASE}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({ sha: newCommit.sha }),
  })
  if (!updateRes.ok) throw new Error(`Failed to update ref: ${await updateRes.text()}`)

  return newCommit.sha
}

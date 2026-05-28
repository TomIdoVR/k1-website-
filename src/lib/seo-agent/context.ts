import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { join } from 'path'
import type { AgentContext } from './types'

interface GithubCommit {
  sha: string
  commit: { message: string }
}

export async function assembleContext(): Promise<AgentContext> {
  const masterPlan = readFileSync(
    join(process.cwd(), 'SEO/kabatone-seo-master-plan.md'),
    'utf-8'
  )

  let gscData = 'GSC data unavailable this run.'
  try {
    gscData = execSync(
      [
        `GSC_CLIENT_ID=${process.env.GSC_CLIENT_ID}`,
        `GSC_CLIENT_SECRET=${process.env.GSC_CLIENT_SECRET}`,
        `GSC_REFRESH_TOKEN=${process.env.GSC_REFRESH_TOKEN}`,
        'python3 scripts/seo_weekly.py',
      ].join(' '),
      { encoding: 'utf-8', timeout: 30_000 }
    )
  } catch (err) {
    gscData = `GSC fetch error: ${String(err)}`
  }

  let recentCommits = 'Commit history unavailable.'
  try {
    const res = await fetch(
      'https://api.github.com/repos/TomIdoVR/k1-website-/commits?sha=nextjs&per_page=20',
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      }
    )
    const commits = (await res.json()) as GithubCommit[]
    recentCommits = commits
      .map((c) => `${c.sha.slice(0, 7)} ${c.commit.message.split('\n')[0]}`)
      .join('\n')
  } catch (err) {
    recentCommits = `GitHub error: ${String(err)}`
  }

  return { masterPlan, gscData, recentCommits }
}

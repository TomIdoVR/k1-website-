/* The one H1 for a scenario/simulator page.

   Visually hidden rather than displayed: these are full-screen immersive
   players (dark, min-h-screen, their own top bar) with no surface that can
   carry a visible page heading without breaking the demo. They previously had
   no heading of any kind — twelve URLs shipped with zero H1 in the server HTML.

   Hidden with clip-path, not display:none or visibility:hidden, so it stays in
   the accessibility tree and in the crawled document. It is rendered from the
   page (a server component), outside Suspense, so it is always present in the
   initial HTML rather than appearing only after hydration. */
export default function ScenarioHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        margin: -1,
        padding: 0,
        border: 0,
        overflow: 'hidden',
        clipPath: 'inset(50%)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </h1>
  )
}

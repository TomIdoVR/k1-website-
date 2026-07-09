/* Shared proof bar for hero-lab variants — reuses the site's existing,
   already-verified stats (40+ cities, 70M citizens, 99.9% SLA, 24/7) rather
   than inventing new unverified numbers. */

export default function ProofBar({ es }: { es: boolean }) {
  const stats = [
    { v: '40+', l: es ? 'Ciudades desplegadas' : 'Cities deployed' },
    { v: '70M+', l: es ? 'Ciudadanos protegidos' : 'Citizens protected' },
    { v: '99.9%', l: es ? 'Disponibilidad SLA' : 'Uptime SLA' },
    { v: '24/7', l: es ? 'Soporte operativo' : 'Operations support' },
  ]
  return (
    <div className="hl-proofbar">
      <div className="hl-proofbar-inner">
        {stats.map((s) => (
          <div className="hl-proofbar-item" key={s.l}>
            <span className="hl-proofbar-v">{s.v}</span>
            <span className="hl-proofbar-l">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

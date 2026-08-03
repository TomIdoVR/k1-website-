/* Real HTML/CSS admin-console mock — replaces the flat AI image
   (concept-4-admin.webp) that read as "too simplified". Renders an actual
   operations surface: module rail, live GIS map with incident pins, a KPI
   telemetry strip, a dispatch queue, a video wall, and an event ticker — so
   the hero says "one dense operational console, several modules" without
   shipping a fake product screenshot. Fully token-driven and bilingual. */

const UNITS = [
  { id: 'PD-14', kind: 'k-dispatch', enRole: 'Patrol', esRole: 'Patrulla', enState: 'En route', esState: 'En ruta', eta: '2m' },
  { id: 'EMS-07', kind: 'k-safety', enRole: 'Medic', esRole: 'Médico', enState: 'On scene', esState: 'En sitio', eta: '—' },
  { id: 'PD-22', kind: 'k-dispatch', enRole: 'Patrol', esRole: 'Patrulla', enState: 'Assigned', esState: 'Asignada', eta: '5m' },
  { id: 'TRF-03', kind: 'k-traffic', enRole: 'Traffic', esRole: 'Tránsito', enState: 'Available', esState: 'Disponible', eta: '—' },
]

const CAMERAS = [
  { id: 'CAM-118', enTag: 'Main & 5th', esTag: 'Central y 5ta', alert: true },
  { id: 'CAM-204', enTag: 'Transit Hub', esTag: 'Terminal', alert: false },
  { id: 'CAM-076', enTag: 'Port Gate', esTag: 'Puerto', alert: false },
  { id: 'CAM-051', enTag: 'City Plaza', esTag: 'Plaza', alert: false },
]

const EVENTS = [
  { code: '10-52', tone: 'crit', enText: 'Medical assist dispatched', esText: 'Asistencia médica despachada', t: '18:42:07' },
  { code: 'LPR', tone: 'warn', enText: 'Plate hit — watchlist match', esText: 'Placa — coincidencia en lista', t: '18:41:55' },
  { code: '10-38', tone: 'ok', enText: 'Traffic stop cleared', esText: 'Parada de tránsito liberada', t: '18:41:12' },
]

export default function HeroConsoleMock({ es }: { es: boolean }) {
  return (
    <div className="hcm" role="img" aria-label={es
      ? 'Consola de operaciones KabatOne con mapa en vivo, cola de despacho, muro de video y registro de eventos'
      : 'KabatOne operations console with live map, dispatch queue, video wall, and event log'}>

      {/* module rail */}
      <aside className="hcm-rail">
        {[
          { k: 'k-safety', l: 'S' },
          { k: 'k-dispatch', l: 'D' },
          { k: 'k-video', l: 'V' },
          { k: 'k-traffic', l: 'T' },
          { k: 'k-connect', l: 'C' },
        ].map((m, i) => (
          <span key={m.k} className={`hcm-mod hcm-mod-${m.k}${i === 1 ? ' is-active' : ''}`}>{m.l}</span>
        ))}
      </aside>

      <div className="hcm-main">
        {/* KPI telemetry strip */}
        <div className="hcm-kpis">
          <div className="hcm-kpi"><b>24</b><span>{es ? 'Incidentes activos' : 'Active incidents'}</span></div>
          <div className="hcm-kpi"><b>112</b><span>{es ? 'Unidades en línea' : 'Units online'}</span></div>
          <div className="hcm-kpi hcm-kpi-good"><b>1:47</b><span>{es ? 'Tiempo resp. prom.' : 'Avg. response'}</span></div>
          <div className="hcm-kpi"><b>3.4k</b><span>{es ? 'Cámaras' : 'Cameras'}</span></div>
        </div>

        <div className="hcm-grid">
          {/* live map */}
          <div className="hcm-panel hcm-map">
            <div className="hcm-panel-head">
              <span>{es ? 'MAPA EN VIVO · GIS' : 'LIVE MAP · GIS'}</span>
              <span className="hcm-live"><i />LIVE</span>
            </div>
            <div className="hcm-map-canvas">
              <span className="hcm-pin hcm-pin-crit" style={{ top: '32%', left: '38%' }} />
              <span className="hcm-pin hcm-pin-warn" style={{ top: '58%', left: '61%' }} />
              <span className="hcm-pin hcm-pin-ok" style={{ top: '46%', left: '22%' }} />
              <span className="hcm-pin hcm-pin-ok" style={{ top: '70%', left: '44%' }} />
              <span className="hcm-unit" style={{ top: '40%', left: '52%' }}>▲</span>
              <span className="hcm-unit" style={{ top: '64%', left: '30%' }}>▲</span>
            </div>
          </div>

          {/* dispatch queue */}
          <div className="hcm-panel hcm-queue">
            <div className="hcm-panel-head"><span>{es ? 'DESPACHO' : 'DISPATCH'}</span><span className="hcm-count">{UNITS.length}</span></div>
            <ul className="hcm-units">
              {UNITS.map((u) => (
                <li key={u.id} className="hcm-unit-row">
                  <span className={`hcm-dot hcm-dot-${u.kind}`} />
                  <b>{u.id}</b>
                  <span className="hcm-role">{es ? u.esRole : u.enRole}</span>
                  <span className="hcm-state">{es ? u.esState : u.enState}</span>
                  <span className="hcm-eta">{u.eta}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* video wall */}
          <div className="hcm-panel hcm-video">
            <div className="hcm-panel-head"><span>{es ? 'MURO DE VIDEO' : 'VIDEO WALL'}</span></div>
            <div className="hcm-cams">
              {CAMERAS.map((c) => (
                <div key={c.id} className={`hcm-cam${c.alert ? ' is-alert' : ''}`}>
                  <span className="hcm-cam-id">{c.id}</span>
                  <span className="hcm-cam-tag">{es ? c.esTag : c.enTag}</span>
                  {c.alert && <span className="hcm-cam-flag">●</span>}
                </div>
              ))}
            </div>
          </div>

          {/* event log */}
          <div className="hcm-panel hcm-log">
            <div className="hcm-panel-head"><span>{es ? 'REGISTRO DE EVENTOS' : 'EVENT LOG'}</span></div>
            <ul className="hcm-events">
              {EVENTS.map((e) => (
                <li key={e.t} className="hcm-event">
                  <span className={`hcm-code hcm-code-${e.tone}`}>{e.code}</span>
                  <span className="hcm-etext">{es ? e.esText : e.enText}</span>
                  <span className="hcm-etime">{e.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

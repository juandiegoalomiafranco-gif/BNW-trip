import { trip } from '../data/trip'
import { useCheckSet } from '../lib/storage'
import { Check } from '../components/Check'

export function Me({ name, onLogout }: { name: string; onLogout: () => void }) {
  const packed = useCheckSet('maleta')
  const visited = useCheckSet('comidas-visitadas')

  const groups = [...new Set(trip.packing.map((p) => p.group))]
  const done = packed.ids.filter((id) => trip.packing.some((p) => p.id === id)).length

  return (
    <>
      <div className="card">
        <h3>Hola, {name}</h3>
        <p className="muted" style={{ marginTop: 2 }}>
          {trip.subtitle} · 30 sep – 9 oct de 2026
        </p>
        <p style={{ marginTop: 8 }}>
          Todo lo que marques se guarda en este teléfono. Si entras desde otro dispositivo, las marcas
          empiezan de cero.
        </p>
      </div>

      <div className="card">
        <h3>Maleta</h3>
        <p className="muted" style={{ marginTop: 2 }}>
          {done} de {trip.packing.length} cosas listas · {visited.count} comidas marcadas
        </p>
        <div className="progress">
          <div style={{ width: `${(done / trip.packing.length) * 100}%` }} />
        </div>
      </div>

      {groups.map((g) => (
        <div key={g}>
          <div className="section-title">{g}</div>
          <div className="card">
            {trip.packing
              .filter((p) => p.group === g)
              .map((p) => (
                <div key={p.id} style={{ padding: '7px 0' }}>
                  <Check checked={packed.has(p.id)} onToggle={() => packed.toggle(p.id)}>
                    {p.text}
                  </Check>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="section-title">Contacto</div>
      <div className="card">
        <p>
          Encargado del viaje: <strong>Nelson Guzmán Victoria</strong> (C.C. 16.770.851). La autorización
          notariada de viaje tiene que estar a su nombre.
        </p>
      </div>

      <div className="section-title">Cuenta</div>
      <div className="card">
        <div className="row">
          <button className="btn" onClick={() => packed.clear()}>Reiniciar maleta</button>
          <button className="btn" onClick={() => visited.clear()}>Reiniciar comidas</button>
          <button className="btn" onClick={onLogout}>Salir</button>
        </div>
      </div>
    </>
  )
}

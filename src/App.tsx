import { useState, type ReactElement } from 'react'
import { trip } from './data/trip'
import { activeDate } from './lib/schedule'
import { useStored } from './lib/storage'
import { Clock } from './components/Clock'
import { Gate } from './components/Gate'
import { IconCalendar, IconCheck, IconFood, IconPlace, IconToday } from './components/Icons'
import { Today } from './screens/Today'
import { Itinerary } from './screens/Itinerary'
import { Food } from './screens/Food'
import { Places } from './screens/Places'
import { Me } from './screens/Me'

type Tab = 'hoy' | 'plan' | 'comida' | 'lugares' | 'yo'

const TABS: { id: Tab; label: string; Icon: (p: { className?: string }) => ReactElement }[] = [
  { id: 'hoy', label: 'Hoy', Icon: IconToday },
  { id: 'plan', label: 'Plan', Icon: IconCalendar },
  { id: 'comida', label: 'Comida', Icon: IconFood },
  { id: 'lugares', label: 'Lugares', Icon: IconPlace },
  { id: 'yo', label: 'Yo', Icon: IconCheck },
]

export default function App() {
  const [name, setName] = useStored<string>('nombre', '')
  const [unlocked, setUnlocked] = useStored<boolean>('unlocked', false)
  const [tab, setTab] = useState<Tab>('hoy')
  const today = activeDate()
  const [selected, setSelected] = useState(today)

  if (!unlocked) {
    return (
      <Gate
        onUnlock={(n) => {
          setName(n)
          setUnlocked(true)
        }}
      />
    )
  }

  function goToDay(date: string) {
    setSelected(date)
    setTab('plan')
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <h1>
            BNW <span>Trip</span>
          </h1>
          <div className="sub">{trip.subtitle}</div>
        </div>
        <Clock />
      </header>

      <main>
        {tab === 'hoy' && <Today date={today} onGoToDay={goToDay} />}
        {tab === 'plan' && <Itinerary selected={selected} today={today} onSelect={setSelected} />}
        {tab === 'comida' && <Food selected={selected} onSelect={setSelected} />}
        {tab === 'lugares' && <Places />}
        {tab === 'yo' && (
          <Me
            name={name || 'viajero'}
            onLogout={() => {
              setUnlocked(false)
            }}
          />
        )}
      </main>

      <nav className="tabs">
        {TABS.map(({ id, label, Icon }) => (
          <button key={id} className="tab" aria-selected={tab === id} onClick={() => setTab(id)} type="button">
            <Icon />
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}

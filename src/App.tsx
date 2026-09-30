import { useState, type ReactElement } from 'react'
import { trip } from './data/trip'
import { activeDate } from './lib/schedule'
import { useStored } from './lib/storage'
import { Clock } from './components/Clock'
import { Gate } from './components/Gate'
import { IconCalendar, IconFood, IconPlace, IconTask, IconToday } from './components/Icons'
import { Today } from './screens/Today'
import { Itinerary } from './screens/Itinerary'
import { Food } from './screens/Food'
import { Places } from './screens/Places'
import { Tasks } from './screens/Tasks'

type Tab = 'hoy' | 'plan' | 'comida' | 'lugares' | 'tareas'

const TABS: { id: Tab; label: string; Icon: (p: { className?: string }) => ReactElement }[] = [
  { id: 'hoy', label: 'Hoy', Icon: IconToday },
  { id: 'plan', label: 'Plan', Icon: IconCalendar },
  { id: 'comida', label: 'Comida', Icon: IconFood },
  { id: 'lugares', label: 'Lugares', Icon: IconPlace },
  { id: 'tareas', label: 'Tareas', Icon: IconTask },
]

export default function App() {
  const [unlocked, setUnlocked] = useStored<boolean>('unlocked', false)
  const [tab, setTab] = useState<Tab>('hoy')
  const [taskId, setTaskId] = useState<string | null>(null)
  const today = activeDate()
  const [selected, setSelected] = useState(today)

  if (!unlocked) {
    return <Gate onUnlock={() => setUnlocked(true)} />
  }

  function go(next: Tab) {
    setTab(next)
    if (next === 'tareas' && tab === 'tareas') setTaskId(null)
    window.scrollTo({ top: 0 })
  }

  function goToDay(date: string) {
    setSelected(date)
    go('plan')
  }

  function openTask(id: string) {
    setTaskId(id)
    go('tareas')
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
        {tab === 'hoy' && <Today date={today} onGoToDay={goToDay} onOpenTask={openTask} />}
        {tab === 'plan' && (
          <Itinerary selected={selected} today={today} onSelect={setSelected} onOpenTask={openTask} />
        )}
        {tab === 'comida' && <Food selected={selected} today={today} onSelect={setSelected} />}
        {tab === 'lugares' && <Places />}
        {tab === 'tareas' && <Tasks openId={taskId} onOpen={setTaskId} />}
      </main>

      <nav className="tabs">
        {TABS.map(({ id, label, Icon }) => (
          <button key={id} className="tab" aria-selected={tab === id} onClick={() => go(id)} type="button">
            <Icon />
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}

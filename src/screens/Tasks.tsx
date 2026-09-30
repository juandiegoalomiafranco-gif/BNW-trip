import { useEffect, useState } from 'react'
import { days } from '../data/days'
import { cityById } from '../data/trip'
import { me, taskById, tasks } from '../data/tasks'
import type { Task, TaskQuestion, TaskSection } from '../data/types'
import { timeEvent, type TimedEvent } from '../lib/schedule'
import { formatDayLabel, formatHHMM, relativeLabel, useNow } from '../lib/time'

/** Hora del primer evento de la tarea, para ordenarlas y contar cuánto falta. */
function taskTime(t: Task): TimedEvent | null {
  const day = days.find((d) => d.date === t.date)
  const ev = day?.events.find((e) => e.id === t.eventIds[0])
  return day && ev ? timeEvent(day, ev) : null
}

function Section({ s, open }: { s: TaskSection; open?: boolean }) {
  return (
    <details className="fold section" open={open}>
      <summary>{s.title}</summary>
      <div className="fold-body">
        {s.table && (
          <table className="facts">
            <thead>
              <tr>
                <th>{s.table.head[0]}</th>
                <th>{s.table.head[1]}</th>
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map(([a, b]) => (
                <tr key={a + b}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {s.body?.map((p) => <p key={p}>{p}</p>)}
        {s.bullets && (
          <ul>
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  )
}

function Question({ q }: { q: TaskQuestion }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(q.en)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // sin permiso de portapapeles: el texto igual se puede seleccionar a mano
    }
  }
  return (
    <div className="q">
      <div className="q-label">{q.label}</div>
      <p className="q-en" lang="en">
        {q.en}
      </p>
      <p className="q-es">{q.es}</p>
      {q.why && <p className="q-why">{q.why}</p>}
      {q.followUp && (
        <p className="q-follow">
          <span>Si queda vaga</span>
          <span lang="en">{q.followUp}</span>
        </p>
      )}
      <button type="button" className="btn small" onClick={copy}>
        {copied ? 'Copiada' : 'Copiar en inglés'}
      </button>
    </div>
  )
}

function TaskDetail({ task, onBack }: { task: Task; onBack: () => void }) {
  const at = taskTime(task)
  const now = useNow(30_000)
  const city = cityById.get(task.cityId)
  const l = formatDayLabel(task.date)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [task.id])

  return (
    <>
      <button type="button" className="back" onClick={onBack}>
        ← Mis tareas
      </button>

      <header className="day-head">
        <div className="day-kicker">
          {city?.name} · {l.weekday} {l.day} {l.month}
          {at && ` · ${formatHHMM(at.event.start)}`}
          {at && at.startAt > now && ` · ${relativeLabel(at.startAt, now)}`}
        </div>
        <h2>{task.title}</h2>
        <p>{task.intro}</p>
      </header>

      <div className="card facts-card">
        <div>
          <span>Tema en la tabla</span>
          {task.topic}
        </div>
        <div>
          <span>Con</span>
          {task.partner}
        </div>
        <div>
          <span>Dónde</span>
          {task.where}
        </div>
      </div>

      {task.heads && <div className="heads">{task.heads}</div>}

      {task.questions && (
        <>
          <h3 className="block-title">Tus preguntas</h3>
          {task.questions.map((q) => (
            <Question key={q.label} q={q} />
          ))}
        </>
      )}

      {task.tips && (
        <details className="fold card-fold" open={task.mode === 'preguntar'}>
          <summary>Cómo preguntar</summary>
          <div className="fold-body">
            <ul>
              {task.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </details>
      )}

      {task.backups && (
        <details className="fold card-fold">
          <summary>Preguntas de respaldo ({task.backups.length})</summary>
          <div className="fold-body">
            {task.backups.map((q) => (
              <Question key={q.label} q={q} />
            ))}
          </div>
        </details>
      )}

      <h3 className="block-title">{task.mode === 'preguntar' ? 'Contexto en 1 minuto' : 'Tu guion para leer en voz alta'}</h3>
      <ol className="script">
        {task.script.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>
      {task.closing && (
        <div className="closing">
          <span>Cierre</span>
          {task.closing}
        </div>
      )}

      <h3 className="block-title">Todo lo que tienes que saber</h3>
      <div className="sections">
        {task.sections.map((s) => (
          <Section key={s.title} s={s} />
        ))}
      </div>

      {task.caveats && (
        <div className="card">
          <h3>Advertencias honestas</h3>
          <ul className="plain">
            {task.caveats.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      <details className="fold card-fold">
        <summary>Fuentes ({task.sources.length})</summary>
        <div className="fold-body">
          <ul>
            {task.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </details>
    </>
  )
}

export function Tasks({ openId, onOpen }: { openId: string | null; onOpen: (id: string | null) => void }) {
  const now = useNow(30_000)
  const open = openId ? taskById.get(openId) : undefined
  if (open) return <TaskDetail task={open} onBack={() => onOpen(null)} />

  const withTime = tasks.map((t) => ({ t, at: taskTime(t) }))
  const next = withTime.find(({ at }) => at && (at.endAt ?? at.startAt) > now)

  return (
    <>
      <header className="day-head">
        <div className="day-kicker">Fieldwork BNYW26</div>
        <h2>Mis tareas</h2>
        <p>
          Una por ciudad. Cada tema lo compartes con otra persona, así que no vas solo. Te asignaron el Banco
          Mundial por tus materias.
        </p>
        <div className="chips">
          {me.subjects.map((s) => (
            <span key={s} className="chip static">
              {s}
            </span>
          ))}
        </div>
      </header>

      {withTime.map(({ t, at }) => {
        const city = cityById.get(t.cityId)
        const l = formatDayLabel(t.date)
        const done = at && (at.endAt ?? at.startAt) <= now
        const isNext = next?.t.id === t.id
        return (
          <button
            key={t.id}
            type="button"
            className={`task-card${isNext ? ' next' : ''}${done ? ' done' : ''}`}
            onClick={() => onOpen(t.id)}
          >
            <span className={`city-dot ${t.cityId}`} aria-hidden />
            <span className="task-card-body">
              <span className="task-card-kicker">
                {city?.name} · {l.weekday} {l.day} {l.month}
                {at && ` · ${formatHHMM(at.event.start)}`}
              </span>
              <strong>{t.title}</strong>
              <span className="task-card-meta">
                {t.mode === 'preguntar' ? 'Preguntar' : 'Exponer'} · con {t.partner}
              </span>
              {isNext && at && <span className="task-card-when">Próxima · {relativeLabel(at.startAt, now)}</span>}
              {done && <span className="task-card-when">Ya pasó</span>}
            </span>
            <span className="task-card-arrow" aria-hidden>
              →
            </span>
          </button>
        )
      })}
    </>
  )
}

import { useState, type FormEvent } from 'react'
import { PASSWORD_HINT, PASSWORD_SHA256 } from '../lib/config'

async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    setError('')
    try {
      const hash = await sha256Hex(pass.trim().toLowerCase())
      if (hash === PASSWORD_SHA256) {
        onUnlock()
      } else {
        setError('Esa no es. Intenta otra vez.')
        setPass('')
      }
    } catch {
      setError('El navegador bloqueo la verificacion. Abre la app por https.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="gate">
      <form className="gate-card" onSubmit={submit}>
        <img className="logo" src="./icon.svg" alt="" />
        <h1>BNW Trip</h1>
        <div className="sub">Boston · New York · Washington<br />30 de septiembre — 9 de octubre</div>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Contraseña del viaje"
          type="password"
          autoComplete="current-password"
          aria-label="Contraseña del viaje"
        />
        <button type="submit" disabled={busy}>{busy ? 'Verificando…' : 'Entrar'}</button>
        <div className="err">{error}</div>
        {PASSWORD_HINT && <div className="hint">{PASSWORD_HINT}</div>}
      </form>
    </div>
  )
}

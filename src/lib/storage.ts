import { useCallback, useEffect, useState } from 'react'
import { STORAGE_VERSION } from './config'

const prefix = `bnw:${STORAGE_VERSION}:`

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(prefix + key)
    return raw === null ? fallback : (JSON.parse(raw) as T)
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(prefix + key, JSON.stringify(value))
  } catch {
    // modo privado o almacenamiento lleno: la app sigue funcionando sin guardar
  }
}

/** Estado que sobrevive al cierre de la app, guardado en este teléfono. */
export function useStored<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => read(key, initial))
  useEffect(() => {
    write(key, value)
  }, [key, value])
  return [value, setValue] as const
}

/** Conjunto de ids marcados (restaurantes visitados, cosas empacadas, etc). */
export function useCheckSet(key: string) {
  const [ids, setIds] = useStored<string[]>(key, [])
  const has = useCallback((id: string) => ids.includes(id), [ids])
  const toggle = useCallback(
    (id: string) => setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [setIds],
  )
  const clear = useCallback(() => setIds([]), [setIds])
  return { ids, has, toggle, clear, count: ids.length }
}

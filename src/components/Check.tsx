export function Check({
  checked,
  onToggle,
  children,
}: {
  checked: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <button className="check" aria-pressed={checked} onClick={onToggle} type="button">
      <span className="box" aria-hidden>✓</span>
      <span className="check-text">{children}</span>
    </button>
  )
}

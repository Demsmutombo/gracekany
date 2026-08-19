export function easeInOutExpo(t) {
  if (t === 0) return 0
  if (t === 1) return 1
  if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2
  return (2 - Math.pow(2, -20 * t + 10)) / 2
}

export function scrollToY(targetY, duration = 1500) {
  const startY = window.pageYOffset
  const diff = targetY - startY
  const startTime = performance.now()

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + diff * easeInOutExpo(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function scrollToHash(hash, offset = 45) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset
  scrollToY(top, 1500)
}

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  let observer
  const selector = '.card > *, body > h1, body > h2, body > p, body > ul, body > ol, body > section'
  function showAll() {
    observer?.disconnect()
    document.documentElement.classList.remove('motion-ready')
    document.querySelectorAll('.motion-reveal').forEach((element) => element.classList.add('visible'))
  }
  function setup() {
    if (reduced.matches || !('IntersectionObserver' in window)) return showAll()
    document.documentElement.classList.add('motion-ready')
    observer?.disconnect()
    observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }), { rootMargin: '0px 0px -6%', threshold: 0.06 })
    document.querySelectorAll(selector).forEach((element) => {
      if (element.classList.contains('motion-reveal')) return
      const index = Array.from(element.parentElement?.children || []).indexOf(element)
      element.classList.add('motion-reveal')
      element.style.setProperty('--motion-delay', `${Math.min(Math.max(index, 0), 3) * 36}ms`)
      observer.observe(element)
    })
  }
  setup()
  reduced.addEventListener?.('change', setup)
  window.addEventListener('pagehide', () => observer?.disconnect(), { once: true })
})()

// Blog deep links reuse the embedded app's own scenario picker and tour components.
(() => {
  const params = new URLSearchParams(location.search)
  const language = params.get('lang')
  if (language === 'zh' || language === 'en') localStorage.setItem('i18nextLng', language)
  const tour = params.get('tour')
  const ids = ['research-cluster', 'wulanchabu', 'louisiana', 'model-company', 'ecommerce-support']
  if (!tour || !ids.includes(tour)) return
  let opened = false
  const observer = new MutationObserver(() => {
    if (!opened) {
      const entry = document.querySelector('[data-tour-entry] button')
      if (entry) { opened = true; entry.click() }
    }
    const selected = document.querySelector(`[data-story-id="${tour}"]`)
    if (selected) { observer.disconnect(); clearTimeout(timeout); selected.click() }
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
  const timeout = setTimeout(() => observer.disconnect(), 60000)
})()

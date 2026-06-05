export function detectFlexGap() {
  const run = () => {
    const flex = document.createElement('div')

    flex.style.display = 'flex'
    flex.style.flexDirection = 'column'
    flex.style.rowGap = '1px'
    flex.style.position = 'absolute'
    flex.style.top = '-9999px'

    flex.appendChild(document.createElement('div'))
    flex.appendChild(document.createElement('div'))

    document.body.appendChild(flex)

    const isSupported = flex.scrollHeight === 1

    flex.remove()

    document.documentElement.classList.toggle('no-flex-gap', !isSupported)
  }

  if (document.body) {
    run()
    return
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true })
    return
  }

  run()
}

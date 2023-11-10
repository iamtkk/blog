import { memo } from 'react'

const Utterances = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return
      }
      const scriptElem = document.createElement('script')
      scriptElem.src = 'https://utteranc.es/client.js'
      scriptElem.async = true
      scriptElem.setAttribute('repo', 'iamtkk/utterances-comments')
      scriptElem.setAttribute('issue-term', 'pathname')
      scriptElem.setAttribute('theme', 'github-dark-orange')
      scriptElem.crossOrigin = 'anonymous'
      elem.appendChild(scriptElem)
    }}
  />
)

export default memo(Utterances)

import { useEffect } from 'react'

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
    if (keywords) {
      let meta = document.querySelector('meta[name="keywords"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'keywords'
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', Array.isArray(keywords) ? keywords.join(', ') : keywords)
    }
  }, [title, description, keywords])
  return null
}

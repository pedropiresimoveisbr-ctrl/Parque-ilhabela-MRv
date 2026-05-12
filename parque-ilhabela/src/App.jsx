import { useState, useRef } from 'react'
import Page1Despertar    from './pages/Page1Despertar.jsx'
import Page2Revelacao    from './pages/Page2Revelacao.jsx'
import Page3Apresentacao from './pages/Page3Apresentacao.jsx'

export default function App() {
  const [page, setPage] = useState(1)
  const audioRef = useRef(null)

  const next = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setPage(p => p + 1)
  }

  if (page === 1) return <Page1Despertar onNext={next} />
  if (page === 2) return <Page2Revelacao onNext={next} audioRef={audioRef} />
  return <Page3Apresentacao audioRef={audioRef} />
}

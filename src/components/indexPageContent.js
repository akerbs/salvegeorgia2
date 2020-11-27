import React, { useContext, useEffect, useState } from "react"
import ComplexButtons from "./complexButtons"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"

export default function IndexPageContent() {
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)
  const [showAfterLoading, setShowAfterLoading] = useState(false)

  function startShowAfterLoading() {
    setShowAfterLoading(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startShowAfterLoading()
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ marginTop: headerHeight, padding: 0 }}>
      {showAfterLoading && <ComplexButtons />}
    </div>
  )
}

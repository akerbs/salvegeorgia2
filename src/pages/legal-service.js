import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import LegalServicePageContent from "../components/legalServicePageContent"

const window = require("global/window")

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [showAfterLoading3, setShowAfterLoading3] = useState(false)

  function startShowAfterLoading3() {
    setShowAfterLoading3(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startShowAfterLoading3()
    }, 250)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <SEO title="Legal service" />
      <Header />
      {showAfterLoading3 && <LegalServicePageContent />}
      {showAfterLoading3 && <Footer />}
    </div>
  )
}

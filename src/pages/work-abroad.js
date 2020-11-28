import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import WorkAbroadPageContent from "../components/workAbroadPageContent"

const window = require("global/window")

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [showAfterLoading4, setShowAfterLoading4] = useState(false)

  function startShowAfterLoading4() {
    setShowAfterLoading4(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startShowAfterLoading4()
    }, 250)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <SEO title="Legal service" />
      <Header />
      {showAfterLoading4 && <WorkAbroadPageContent />}
      {showAfterLoading4 && <Footer />}
    </div>
  )
}

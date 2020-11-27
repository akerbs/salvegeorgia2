import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import PatientServicePageContent from "../components/patientServicePageContent"

const window = require("global/window")

export default function () {
  const [showAfterLoading, setShowAfterLoading] = useState(false)

  function startShowAfterLoading() {
    setShowAfterLoading(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startShowAfterLoading()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <SEO title="About us" />
      <Header />
      {showAfterLoading && <PatientServicePageContent />}
      {showAfterLoading && <Footer />}
    </div>
  )
}

import React, { useEffect, useContext } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import PatientServicePageContent from "../components/patientServicePageContent"

const window = require("global/window")

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <SEO title="About us" />
      <Header />
      <PatientServicePageContent />
      <Footer />
    </div>
  )
}

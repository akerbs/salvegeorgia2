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

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <SEO title="Legal service" />
      <Header />
      <LegalServicePageContent />
      <Footer />
    </div>
  )
}

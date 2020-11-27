import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import IndexPageContent from "../components/indexPageContent"
const window = require("global/window")

export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: "100vh", padding: 0 }}>
      <SEO title="Home" />
      <Header />
      <IndexPageContent />
      <Footer />
    </div>
  )
}

import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import IndexPageContent from "../components/indexPageContent"
const window = require("global/window")

export default function IndexPage() {
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: "100vh", padding: 0 }}>
      <SEO title="Home" />
      <Header />
      {showAfterLoading && <IndexPageContent />}
      {showAfterLoading && <Footer />}
    </div>
  )
}

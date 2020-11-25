import React, { useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"

import PatientServicePageContent from "../components/patientServicePageContent"

const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
  },
}))

export default function () {
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="About us" />
        <Header />
        <PatientServicePageContent />
        <Footer />
      </div>
    </Layout>
  )
}

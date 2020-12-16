import React, { useContext, useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import PatientServiceImages from "./patientServiceImages" // !!!! change
import Grid from "@material-ui/core/Grid"

const window = require("global/window")

export default function AboutPageContent() {
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)
  const contentWrapperMarginTop =
    window.innerWidth <= 959 ? headerHeight * 1.6 : headerHeight * 2.5
  const contentWrapperMarginBottom =
    window.innerWidth <= 959 ? headerHeight * 1.5 : headerHeight * 1.7
  const [showAfterLoading, setShowAfterLoading] = useState(false)

  function startShowAfterLoading() {
    setShowAfterLoading(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startShowAfterLoading()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: contentWrapperMarginTop,
        minHeight: "100vh",
        marginBottom: contentWrapperMarginBottom,
      }}
    >
      <Typography
        variant="body1"
        align="center"
        color="primary"
        style={{
          // fontWeight: "bold",
          marginBottom: "5%",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis magnam
        harum repellat quasi et reprehenderit laborum! At fugiat, odio, eos nam
        placeat perspiciatis eum voluptatibus exercitationem soluta accusamus
        ex. Ad assumenda aliquid, esse distinctio sunt illo in praesentium non
        laborum dicta sequi libero tenetur laudantium voluptate veniam ea quos
        alias quaerat iure recusandae incidunt eius? Cumque quia dolores, natus
        quae, vel ipsa iste minus provident magni eos perspiciatis sequi rerum
        sunt consectetur exercitationem labore neque, at beatae unde veritatis?
        Dolor maxime voluptatem aliquid. Saepe unde voluptatum natus.
        Repellendus exercitationem, deleniti numquam provident aliquid
        veritatis, reiciendis aliquam, sunt quos est rem!
      </Typography>
    </Container>
  )
}

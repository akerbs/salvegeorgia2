import React, { useContext, useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import WorkAbroadImages from "./workAbroadImages"
import Grid from "@material-ui/core/Grid"
import FormWorkAbroad from "./FormWorkAbroad"
const window = require("global/window")

export default function WorkAbroadPageContent() {
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
        variant="h6"
        align="center"
        color="primary"
        style={{ fontWeight: "bold", marginBottom: "5%" }}
      >
        {actLanguage === "DEU"
          ? "Arbeit im Ausland"
          : actLanguage === "GEO"
          ? "საზღვარგარეთ დასაქმება"
          : actLanguage === "RUS"
          ? "Работа за границей"
          : actLanguage === "ENG"
          ? "Work abroad"
          : "Work abroad"}
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <Typography variant="body1" color="primary">
            <List>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Ärzte einstellen"
                  : actLanguage === "GEO"
                  ? "ექიმების დასაქმება "
                  : actLanguage === "RUS"
                  ? "Наем врачей"
                  : actLanguage === "ENG"
                  ? "Hiring doctors"
                  : "Hiring doctors"}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Krankenschwestern einstellen"
                  : actLanguage === "GEO"
                  ? "ექთნების დასაქმება"
                  : actLanguage === "RUS"
                  ? "Наем медсестер"
                  : actLanguage === "ENG"
                  ? "Hiring nurses"
                  : "Hiring nurses"}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Sommeraktivitäten"
                  : actLanguage === "GEO"
                  ? "საზაფხულო საქმიანობა"
                  : actLanguage === "RUS"
                  ? "Летние мероприятия"
                  : actLanguage === "ENG"
                  ? "Summer activities"
                  : "Summer activities"}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Für Studierende"
                  : actLanguage === "GEO"
                  ? "სტუდენტებისათვის"
                  : actLanguage === "RUS"
                  ? "Для студентов"
                  : actLanguage === "ENG"
                  ? "For students"
                  : "For students"}
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          {showAfterLoading && <WorkAbroadImages />}
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "8vh 0",
        }}
      >
        <FormWorkAbroad />
      </div>
    </Container>
  )
}

import React, { useContext, useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import LegalServiceImages from "./legalServiceImages"
import Grid from "@material-ui/core/Grid"
import FormLegalService from "./FormLegalService"
const window = require("global/window")

export default function LegalServicePageContent() {
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
          ? "Juristische Service"
          : actLanguage === "GEO"
          ? "იურიდიული სერვისები"
          : actLanguage === "RUS"
          ? "Юридические услуги"
          : actLanguage === "ENG"
          ? "Legal service"
          : "Legal service"}
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <Typography variant="body1" color="primary">
            <List>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Registrierung der juristischen Personen"
                  : actLanguage === "GEO"
                  ? "იურიდიუი პირებისრეგისტრაცია"
                  : actLanguage === "RUS"
                  ? "Регистрация юридических лиц"
                  : actLanguage === "ENG"
                  ? "Registration of legal entities"
                  : "Registration of legal entities"}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Schiedsgerichtsbarkeit"
                  : actLanguage === "GEO"
                  ? "არბიტრაჟი"
                  : actLanguage === "RUS"
                  ? "Арбитраж"
                  : actLanguage === "ENG"
                  ? "Arbitration"
                  : "Arbitration"}
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          {showAfterLoading && <LegalServiceImages />}
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "8vh 0",
        }}
      >
        <FormLegalService />
      </div>
    </Container>
  )
}

import React, { useContext, useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import ComplexButtons from "./complexButtons"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import PatientServiceImages from "./patientServiceImages"
import Grid from "@material-ui/core/Grid"
import SubmitForm from "./SubmitForm"

export default function PatientServicePageContent() {
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)
  const contentWrapperMarginTop = headerHeight * 1.8
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

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: contentWrapperMarginTop,
        minHeight: "100vh",
        marginBottom: "5%",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        color="primary"
        style={{ fontWeight: "bold", marginBottom: "5%" }}
      >
        {actLanguage === "DEU"
          ? "Patientenservice"
          : actLanguage === "GEO"
          ? "ჩვენ შესახებ"
          : actLanguage === "RUS"
          ? "Медицинские услуги"
          : actLanguage === "ENG"
          ? "Patient service"
          : "Patient service"}
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <Typography variant="body1" color="primary">
            <List>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Plastische Chirurgie"
                  : actLanguage === "GEO"
                  ? "პლასტიკური ქირურგია"
                  : actLanguage === "RUS"
                  ? " Пластическая хирургия"
                  : actLanguage === "ENG"
                  ? "Plastic surgery"
                  : null}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Kosmetologische Verfahren"
                  : actLanguage === "GEO"
                  ? "კოსმეტოლოგიური პროცედურები"
                  : actLanguage === "RUS"
                  ? "Косметологические процедуры"
                  : actLanguage === "ENG"
                  ? "Cosmetology procedures"
                  : null}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Zahnimplantate"
                  : actLanguage === "GEO"
                  ? "კბილის იმპლანტები"
                  : actLanguage === "RUS"
                  ? "Зубные имплантаты"
                  : actLanguage === "ENG"
                  ? "Dental implants"
                  : null}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Massage"
                  : actLanguage === "GEO"
                  ? "მასაჟი"
                  : actLanguage === "RUS"
                  ? "Массаж"
                  : actLanguage === "ENG"
                  ? "Massage"
                  : null}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "Balneologische Verfahren"
                  : actLanguage === "GEO"
                  ? "ბალნეოლოგიური პროცედურები"
                  : actLanguage === "RUS"
                  ? "Бальнеологические процедуры"
                  : actLanguage === "ENG"
                  ? "Balneological procedures"
                  : null}
              </ListItem>
              <ListItem>
                {actLanguage === "DEU"
                  ? "In-vitro-Fertilisation"
                  : actLanguage === "GEO"
                  ? "ინვიტრო განაყოფიერება"
                  : actLanguage === "RUS"
                  ? "Экстракорпоральное оплодотворение"
                  : actLanguage === "ENG"
                  ? "In Vitro Fertilization"
                  : null}
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <PatientServiceImages />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "8vh 0",
        }}
      >
        {showAfterLoading && <SubmitForm />}
      </div>
    </Container>
  )
}

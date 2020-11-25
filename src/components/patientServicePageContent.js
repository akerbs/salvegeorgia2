import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import ComplexButtons from "./complexButtons"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import PatientServiceImages from "./patientServiceImages"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    minHeight: "100vh",
    marginBottom: "5%",
    // marginTop: "12vh",
    [theme.breakpoints.down("lg")]: {
      // marginTop: "7vh",
    },
  },
}))

export default function PatientServicePageContent() {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)
  const contentWrapperMarginTop = headerHeight * 2

  return (
    <Container
      maxWidth="lg"
      className={classes.contentWrapper}
      style={{ marginTop: contentWrapperMarginTop }}
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
              <ListItem className={classes.listItem}>
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
              <ListItem className={classes.listItem}>
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
              <ListItem className={classes.listItem}>
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
              <ListItem className={classes.listItem}>
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
              <ListItem className={classes.listItem}>
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
              <ListItem className={classes.listItem}>
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
    </Container>
  )
}

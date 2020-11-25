import React, { useState, useEffect, useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Link } from "gatsby"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"
import { LanguageContext } from "./layout"
const window = require("global/window")

// const footerPaddingTop = window.innerWidth <= 599 ? "20%" : "5%"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // maxWidth: "100%",

    padding: "5% 2% 0% 7%",

    [theme.breakpoints.down("sm")]: {
      padding: "18% 5% 0% 5%",
    },
  },
  // content: {
  //   marginTop: footerMarginTop,
  //   color: "black",
  // },

  title: {
    marginBottom: 20,
  },

  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white",
    },
  },
  lastLine: {
    textAlign: "center",
    minHeight: "50px",
    marginTop: "5% ",
    [theme.breakpoints.down("sm")]: {
      marginTop: "15% ",
    },
  },
}))

export default function Footer() {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const { actLanguage } = useContext(LanguageContext)

  function startInView() {
    setShow(true)
  }
  function stopInView() {
    setShow(false)
  }

  useEffect(() => {
    inView("#selector").once("enter", startInView)
    inView.threshold(0.2)
  })

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div style={{ overflow: "hidden" }} id="selector">
        <Slide in={show} timeout={1000} direction="up">
          <div>
            <Grid container spacing={7}>
              <Grid item md={5}>
                <Typography variant="body2" className={classes.title}>
                  {actLanguage === "DEU"
                    ? "KONTAKTE"
                    : actLanguage === "GEO"
                    ? "კონტაქტები"
                    : actLanguage === "RUS"
                    ? "КОНТАКТЫ"
                    : actLanguage === "ENG"
                    ? "CONTACTS"
                    : "CONTACTS"}
                </Typography>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque incidunt dolorem aut explicabo aliquid. Quae officiis
                  voluptate nemo dolore cum animi inventore possimus, beatae
                  incidunt praesentium.
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="body2" className={classes.title}>
                  {actLanguage === "DEU"
                    ? "DIENSTLEISTUNGEN"
                    : actLanguage === "GEO"
                    ? "მომსახურება"
                    : actLanguage === "RUS"
                    ? "УСЛУГИ"
                    : actLanguage === "ENG"
                    ? "SERVICES"
                    : "SERVICES"}
                </Typography>
                <Typography variant="caption">
                  <Link to="#" className={classes.link} key={"Patient service"}>
                    {actLanguage === "DEU"
                      ? "Patientenservice"
                      : actLanguage === "GEO"
                      ? "ჩვენ შესახებ"
                      : actLanguage === "RUS"
                      ? "Медицинские услуги"
                      : actLanguage === "ENG"
                      ? "Patient service"
                      : "Patient service"}
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key={"Legal service"}>
                    {actLanguage === "DEU"
                      ? "Juristische Service"
                      : actLanguage === "GEO"
                      ? "იურიდიული სერვისები"
                      : actLanguage === "RUS"
                      ? "Юридические услуги"
                      : actLanguage === "ENG"
                      ? "Legal service"
                      : "Legal service"}
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key={"Work abroad"}>
                    {actLanguage === "DEU"
                      ? "Arbeit im Ausland"
                      : actLanguage === "GEO"
                      ? "საზღვარგარეთ დასაქმება"
                      : actLanguage === "RUS"
                      ? "Работа за границей"
                      : actLanguage === "ENG"
                      ? "Work abroad"
                      : "Work abroad"}
                  </Link>
                  <br />

                  <Link to="#" className={classes.link} key={"About us"}>
                    {actLanguage === "DEU"
                      ? "Über uns"
                      : actLanguage === "GEO"
                      ? "ჩვენ შესახებ"
                      : actLanguage === "RUS"
                      ? "О нас"
                      : actLanguage === "ENG"
                      ? "About us"
                      : "About us"}
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="body2" className={classes.title}>
                  {actLanguage === "DEU"
                    ? "FOLGEN SIE UNS"
                    : actLanguage === "GEO"
                    ? "გამოგვყევით"
                    : actLanguage === "RUS"
                    ? "ПРИСОЕДИНЯЙТЕСЬ "
                    : actLanguage === "ENG"
                    ? "FOLLOW US"
                    : "FOLLOW US"}
                </Typography>
                <Link to="#" className={classes.link}>
                  <FacebookIcon />
                </Link>
                <Link to="#" className={classes.link}>
                  <InstagramIcon />
                </Link>
              </Grid>
            </Grid>
            <div className={classes.lastLine}>
              © {new Date().getFullYear()}, salvegeorgia.com
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}

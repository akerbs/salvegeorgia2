import React, { useState, useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import CloseIcon from "@material-ui/icons/Close"

import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
// import { LanguageContext } from "../context/LanguageContext"
import { LanguageContext } from "../components/layout"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link, navigate } from "gatsby"

const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    // width: "100vw",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  cartTitle: {
    flexGrow: 1,
  },
}))

export default function (props) {
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <CssBaseline />
      <Drawer
        transitionDuration={{ enter: 500, exit: 300 }}
        onEscapeKeyDown={props.onClose}
        onBackdropClick={props.onClose}
        variant="temporary"
        anchor="right"
        open={props.open}
        classes={{
          paperAnchorRight: classes.drawerPaper,
          root: classes.drawer,
        }}
      >
        <div className={classes.drawerHeader}>
          <Slide in={props.open} timeout={800} direction="up">
            <div>
              <Fade in={props.open} timeout={1600}>
                <IconButton onClick={props.onClose}>
                  <CloseIcon style={{ color: theme.palette.primary.main }} />
                </IconButton>
              </Fade>
            </div>
          </Slide>
        </div>
        <Slide in={props.open} timeout={1000} direction="up">
          <div>
            <Fade in={props.open} timeout={2000}>
              <List>
                <Link
                  to="#"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  {/* <Slide in={props.open} timeout={1020} direction="up">
              <div>
                <Fade in={props.open} timeout={2020}> */}
                  <ListItem button key={"About us"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          {actLanguage === "DEU"
                            ? "Über uns"
                            : actLanguage === "GEO"
                            ? "ჩვენ შესახებ"
                            : actLanguage === "RUS"
                            ? "О нас"
                            : actLanguage === "ENG"
                            ? "About us"
                            : null}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>
                <Link
                  to="#"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  {/* <Slide in={props.open} timeout={1040} direction="up">
              <div>
                <Fade in={props.open} timeout={2040}> */}
                  <ListItem button key={"Patient service"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          {actLanguage === "DEU"
                            ? "Patientenservice"
                            : actLanguage === "GEO"
                            ? "ჩვენ შესახებ"
                            : actLanguage === "RUS"
                            ? "Медицинские услуги"
                            : actLanguage === "ENG"
                            ? "Patient service"
                            : null}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>
                <Link
                  to="#"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  {/* <Slide in={props.open} timeout={1060} direction="up">
              <div>
                <Fade in={props.open} timeout={2060}> */}
                  <ListItem button key={"Legal service"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          {actLanguage === "DEU"
                            ? "Juristische Service"
                            : actLanguage === "GEO"
                            ? "იურიდიული სერვისები"
                            : actLanguage === "RUS"
                            ? "Юридические услуги"
                            : actLanguage === "ENG"
                            ? "Legal service"
                            : null}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>

                <Link
                  to="#"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  {/* <Slide in={props.open} timeout={1080} direction="up">
              <div>
                <Fade in={props.open} timeout={2080}> */}
                  <ListItem button key={"Work abroad"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          {actLanguage === "DEU"
                            ? "Arbeit im Ausland"
                            : actLanguage === "GEO"
                            ? "საზღვარგარეთ დასაქმება"
                            : actLanguage === "RUS"
                            ? "Работа за границей"
                            : actLanguage === "ENG"
                            ? "Work abroad"
                            : null}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>
              </List>
            </Fade>
          </div>
        </Slide>
      </Drawer>
    </>
  )
}

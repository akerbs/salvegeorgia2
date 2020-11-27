import React, { useContext, useState, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { Link, navigate } from "gatsby"
import SelectLanguage from "./selectLanguage"
import Drawer from "./drawer"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import Popper from "@material-ui/core/Popper"
import Paper from "@material-ui/core/Paper"
import MenuList from "@material-ui/core/MenuList"
import Backdrop from "@material-ui/core/Backdrop"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import "./header.css"

const document = require("global/document")
const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450
const logoMarginTop = window.innerWidth <= 959 ? "1%" : 0

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  appBarShiftToLeft: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  hide: {
    display: "none",
  },
}))

function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  const { actLanguage } = useContext(LanguageContext)

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
    document.body.style.position = "fixed"
    // window.scrollTo(0, -5)
  }
  const handleDrawerClose = () => {
    setOpenDrawer(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
    window.scrollTo(0, -1)
  }

  const [state2, setState2] = useState({
    open2: false,
    anchorEl2: null,
  })
  const [state3, setState3] = useState({
    open3: false,
    anchorEl3: null,
  })
  const [state4, setState4] = useState({
    open4: false,
    anchorEl4: null,
  })

  const [openBackdrop, setOpenBackdrop] = useState(false)
  const handleCloseBackdrop = () => {
    setOpenBackdrop(false)
  }
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true)
  }

  useEffect(
    e => {
      if (
        state2.open2 === false &&
        state3.open3 === false &&
        state4.open4 === false
      ) {
        handleCloseBackdrop(e)
      }
    },
    [state2, state3, state4]
  )

  function handleMenuOpen2(event) {
    setState2({
      open2: true,
      anchorEl2: event.currentTarget,
    })
    handleOpenBackdrop()
  }
  function handleMenuClose2() {
    setState2({
      open2: false,
      anchorEl2: null,
    })
  }

  function handleMenuOpen3(event) {
    setState3({
      open3: true,
      anchorEl3: event.currentTarget,
    })
    handleOpenBackdrop()
  }
  function handleMenuClose3() {
    setState3({
      open3: false,
      anchorEl3: null,
    })
  }
  function handleMenuOpen4(event) {
    setState4({
      open4: true,
      anchorEl4: event.currentTarget,
    })
    handleOpenBackdrop()
  }
  function handleMenuClose4() {
    setState4({
      open4: false,
      anchorEl4: null,
    })
  }
  const { handleHeaderHeightChange } = useContext(HeaderHeightContext)
  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      handleHeaderHeightChange(node.getBoundingClientRect().height)
    }
  }, [])

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          ref={measuredRef}
          position="fixed"
          style={{
            backgroundColor: theme.palette.primary.main,
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
          className={clsx({
            [classes.appBarShiftToLeft]: openDrawer,
          })}
        >
          <Toolbar style={{ borderBottom: "0.5vh solid black" }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Fondamento",
                    marginTop: logoMarginTop,
                    color: "white",
                  }}
                >
                  <Link to="/" className="link" style={{ color: "white" }}>
                    <b> salvegeorgia.com</b>
                  </Link>
                </Typography>

                <div>
                  <SelectLanguage />

                  <Hidden mdUp>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="end"
                      style={{ paddingLeft: theme.spacing(1) }}
                      className={clsx(openDrawer && classes.hide)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                </div>
              </Grid>

              <Hidden smDown>
                {/* <Typography className={classes.menu} variant="h6"> */}
                <Grid
                  item
                  xs={12}
                  container
                  onMouseLeave={e => {
                    handleMenuClose2(e)
                    handleMenuClose3(e)
                    handleMenuClose4(e)
                  }}
                >
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Button
                      className="menuBtn"
                      // aria-owns={anchorEl1 ? "simple-menu-1" : undefined}
                      // aria-haspopup="true"
                      onClick={() => {
                        navigate("/about")
                      }}
                      onMouseOver={e => {
                        handleMenuClose2(e)
                        handleMenuClose3(e)
                        handleMenuClose4(e)
                      }}
                    >
                      {actLanguage === "DEU"
                        ? "Über uns"
                        : actLanguage === "GEO"
                        ? "ჩვენ შესახებ"
                        : actLanguage === "RUS"
                        ? "О нас"
                        : actLanguage === "ENG"
                        ? "About us"
                        : "About us"}
                    </Button>
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Button
                      className="menuBtn"
                      aria-owns={state2.open2 ? "simple-menu-2" : undefined}
                      aria-haspopup="true"
                      onClick={() => {
                        navigate("/patient-service")
                      }}
                      // onMouseOver={handleClick2}
                      onMouseOver={e => {
                        handleMenuOpen2(e)
                        handleMenuClose3(e)
                        handleMenuClose4(e)
                      }}
                      // onMouseLeave={leaveButton2}
                      endIcon={
                        state2.anchorEl2 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
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
                    </Button>
                    <Popper
                      style={{
                        minWidth: "25vw",
                        zIndex: theme.zIndex.drawer + 99,
                        marginTop: "0.5vh",
                      }}
                      open={state2.open2}
                      anchorEl={state2.anchorEl2}
                      id="menu-list-grow-2"
                    >
                      <Paper>
                        <MenuList
                          // transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          id="simple-menu-2"
                          anchorEl={state2.anchorEl2}
                          open={Boolean(state2.anchorEl2)}
                          onClose={handleMenuClose2}
                          MenuListProps={{ onMouseLeave: handleMenuClose2 }}
                        >
                          <MenuItem
                            className="menuItem"
                            onClick={() => {
                              navigate("/patient-service")
                              handleMenuClose2()
                            }}
                          >
                            {actLanguage === "DEU"
                              ? "Plastische Chirurgie"
                              : actLanguage === "GEO"
                              ? "პლასტიკური ქირურგია"
                              : actLanguage === "RUS"
                              ? " Пластическая хирургия"
                              : actLanguage === "ENG"
                              ? "Plastic surgery"
                              : "Plastic surgery"}
                          </MenuItem>
                          <MenuItem
                            className="menuItem"
                            onClick={() => {
                              navigate("/patient-service")
                              handleMenuClose2()
                            }}
                          >
                            {actLanguage === "DEU"
                              ? "Kosmetologische Verfahren"
                              : actLanguage === "GEO"
                              ? "კოსმეტოლოგიური პროცედურები"
                              : actLanguage === "RUS"
                              ? "Косметологические процедуры"
                              : actLanguage === "ENG"
                              ? "Cosmetology procedures"
                              : "Cosmetology procedures"}
                          </MenuItem>
                          <MenuItem
                            className="menuItem"
                            onClick={() => {
                              navigate("/patient-service")
                              handleMenuClose2()
                            }}
                          >
                            {actLanguage === "DEU"
                              ? "Zahnimplantate"
                              : actLanguage === "GEO"
                              ? "კბილის იმპლანტები"
                              : actLanguage === "RUS"
                              ? "Зубные имплантаты"
                              : actLanguage === "ENG"
                              ? "Dental implants"
                              : "Dental implants"}
                          </MenuItem>
                          <MenuItem
                            className="menuItem"
                            onClick={() => {
                              navigate("/patient-service")
                              handleMenuClose2()
                            }}
                          >
                            {actLanguage === "DEU"
                              ? "Massage"
                              : actLanguage === "GEO"
                              ? "მასაჟი"
                              : actLanguage === "RUS"
                              ? "Массаж"
                              : actLanguage === "ENG"
                              ? "Massage"
                              : "Massage"}
                          </MenuItem>
                          <MenuItem
                            className="menuItem"
                            onClick={() => {
                              navigate("/patient-service")
                              handleMenuClose2()
                            }}
                          >
                            {actLanguage === "DEU"
                              ? "Balneologische Verfahren"
                              : actLanguage === "GEO"
                              ? "ბალნეოლოგიური პროცედურები"
                              : actLanguage === "RUS"
                              ? "Бальнеологические процедуры"
                              : actLanguage === "ENG"
                              ? "Balneological procedures"
                              : "Balneological procedures"}
                          </MenuItem>
                          <MenuItem
                            className="menuItem"
                            onClick={() => {
                              navigate("/patient-service")
                              handleMenuClose2()
                            }}
                          >
                            {actLanguage === "DEU"
                              ? "In-vitro-Fertilisation"
                              : actLanguage === "GEO"
                              ? "ინვიტრო განაყოფიერება"
                              : actLanguage === "RUS"
                              ? "Экстракорпоральное оплодотворение"
                              : actLanguage === "ENG"
                              ? "In Vitro Fertilization"
                              : "In Vitro Fertilization"}
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Button
                      className="menuBtn"
                      aria-owns={state3.anchorEl3 ? "simple-menu-3" : undefined}
                      aria-haspopup="true"
                      onClick={() => {
                        navigate("/legal-service")
                      }}
                      onMouseOver={e => {
                        handleMenuOpen3(e)
                        handleMenuClose2(e)
                        handleMenuClose4(e)
                      }}
                      endIcon={
                        state3.anchorEl3 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
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
                    </Button>
                    <Popper
                      style={{
                        minWidth: "25vw",
                        zIndex: theme.zIndex.drawer + 99,
                        marginTop: "0.5vh",
                      }}
                      open={state3.open3}
                      anchorEl={state3.anchorEl3}
                      id="menu-list-grow-3"
                    >
                      <Paper>
                        <MenuList
                          // transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-3"
                          anchorEl={state3.anchorEl3}
                          open={Boolean(state3.anchorEl3)}
                          onClose={handleMenuClose3}
                          MenuListProps={{ onMouseLeave: handleMenuClose3 }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem
                            onClick={() => {
                              navigate("/legal-service")
                              handleMenuClose3()
                            }}
                            className="menuItem"
                          >
                            {actLanguage === "DEU"
                              ? "Registrierung der juristischen Personen"
                              : actLanguage === "GEO"
                              ? "იურიდიუი პირებისრეგისტრაცია"
                              : actLanguage === "RUS"
                              ? "Регистрация юридических лиц"
                              : actLanguage === "ENG"
                              ? "Registration of legal entities"
                              : "Registration of legal entities"}
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              navigate("/legal-service")
                              handleMenuClose3()
                            }}
                            className="menuItem"
                          >
                            {actLanguage === "DEU"
                              ? "Schiedsgerichtsbarkeit"
                              : actLanguage === "GEO"
                              ? "არბიტრაჟი"
                              : actLanguage === "RUS"
                              ? "Арбитраж"
                              : actLanguage === "ENG"
                              ? "Arbitration"
                              : "Arbitration"}
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>

                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Button
                      className="menuBtn"
                      aria-owns={
                        state4.anchorEl4 ? "simple-menu-4 " : undefined
                      }
                      aria-haspopup="true"
                      onClick={() => {
                        navigate("/work-abroad")
                      }}
                      onMouseOver={e => {
                        handleMenuOpen4(e)
                        handleMenuClose2(e)
                        handleMenuClose3(e)
                      }}
                      endIcon={
                        state4.anchorEl4 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
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
                    </Button>
                    <Popper
                      style={{
                        minWidth: "25vw",
                        zIndex: theme.zIndex.drawer + 99,
                        marginTop: "0.5vh",
                      }}
                      open={state4.open4}
                      anchorEl={state4.anchorEl4}
                      id="menu-list-grow-4"
                    >
                      <Paper>
                        <MenuList
                          // transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-4"
                          anchorEl={state4.anchorEl4}
                          open={Boolean(state4.anchorEl4)}
                          onClose={handleMenuClose4}
                          MenuListProps={{ onMouseLeave: handleMenuClose4 }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem
                            onClick={() => {
                              navigate("/work-abroad")
                              handleMenuClose4()
                            }}
                            className="menuItem"
                          >
                            {actLanguage === "DEU"
                              ? "Ärzte einstellen"
                              : actLanguage === "GEO"
                              ? "ექიმების დასაქმება "
                              : actLanguage === "RUS"
                              ? "Наем врачей"
                              : actLanguage === "ENG"
                              ? "Hiring doctors"
                              : "Hiring doctors"}
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              navigate("/work-abroad")
                              handleMenuClose4()
                            }}
                            className="menuItem"
                          >
                            {actLanguage === "DEU"
                              ? "Krankenschwestern einstellen"
                              : actLanguage === "GEO"
                              ? "ექთნების დასაქმება"
                              : actLanguage === "RUS"
                              ? "Наем медсестер"
                              : actLanguage === "ENG"
                              ? "Hiring nurses"
                              : "Hiring nurses"}
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              navigate("/work-abroad")
                              handleMenuClose4()
                            }}
                            className="menuItem"
                          >
                            {actLanguage === "DEU"
                              ? "Sommeraktivitäten"
                              : actLanguage === "GEO"
                              ? "საზაფხულო საქმიანობა"
                              : actLanguage === "RUS"
                              ? "Летние мероприятия"
                              : actLanguage === "ENG"
                              ? "Summer activities"
                              : "Summer activities"}
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              navigate("/work-abroad")
                              handleMenuClose4()
                            }}
                            className="menuItem"
                          >
                            {actLanguage === "DEU"
                              ? "Für Studierende"
                              : actLanguage === "GEO"
                              ? "სტუდენტებისათვის"
                              : actLanguage === "RUS"
                              ? "Для студентов"
                              : actLanguage === "ENG"
                              ? "For students"
                              : "For students"}
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>
                  {/* </Typography> */}
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Backdrop
        style={{ zIndex: 5, color: "#fff" }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      />

      <Drawer onClose={handleDrawerClose} open={openDrawer} />
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)

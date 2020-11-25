import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"

const images = [
  {
    url: `../../1.jpg`,
    titleRus: "Медицинское обслуживание",
    titleGeo: "სამედიცინო მომსახურება",
    titleDeu: "Medizinischer Dienst",
    titleEng: "Medical service",
    width: "50%",
  },
  {
    url: `../../2.jpg`,
    titleRus: "Эстетическая медицина",
    titleGeo: "ესთეტიკური მედიცინა",
    titleDeu: "Ästhetische Medizin",
    titleEng: "Aesthetic medicine",
    width: "50%",
  },
  {
    url: `../../3.jpg`,
    titleRus: "Юридические услуги",
    titleGeo: "იურიდიული სერვისები",
    titleDeu: "Juristische Dienstleistung",
    titleEng: "Legal service",
    width: "50%",
  },
  {
    url: `../../4.jpg`,
    titleRus: "Работа за границей",
    titleGeo: "საზღვარგარეთ დასაქმება",
    titleDeu: "Arbeit im Ausland",
    titleEng: "Work abroad",
    width: "50%",
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: "50vh", //330
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: "20vh", // 105
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    // height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}))

export default function ComplexButtons() {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.titleEng}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {actLanguage === "DEU"
                ? image.titleDeu
                : actLanguage === "GEO"
                ? image.titleGeo
                : actLanguage === "RUS"
                ? image.titleRus
                : actLanguage === "ENG"
                ? image.titleEng
                : null}

              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  )
}

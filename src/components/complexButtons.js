import React, { useContext, useEffect, useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"
import { navigate } from "gatsby"
import "./complexButtons.css"

const images = [
  {
    url: `../../1.jpg`,
    titleRus: "Медицинское обслуживание",
    titleGeo: "სამედიცინო მომსახურება",
    titleDeu: "Medizinischer Dienst",
    titleEng: "Medical service",
    width: "50%",
    path: `/patient-service`,
  },
  {
    url: `../../2.jpg`,
    titleRus: "Эстетическая медицина",
    titleGeo: "ესთეტიკური მედიცინა",
    titleDeu: "Ästhetische Medizin",
    titleEng: "Aesthetic medicine",
    width: "50%",
    path: `/patient-service`,
  },
  {
    url: `../../3.jpg`,
    titleRus: "Юридические услуги",
    titleGeo: "იურიდიული სერვისები",
    titleDeu: "Juristische Dienstleistung",
    titleEng: "Legal service",
    width: "50%",
    path: `/legal-service`,
  },
  {
    url: `../../4.jpg`,
    titleRus: "Работа за границей",
    titleGeo: "საზღვარგარეთ დასაქმება",
    titleDeu: "Arbeit im Ausland",
    titleEng: "Work abroad",
    width: "50%",
    path: `/work-abroad`,
  },
]

export default function ComplexButtons() {
  const theme = useTheme()

  const { actLanguage } = useContext(LanguageContext)

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map(image => (
        <ButtonBase
          onClick={() => {
            navigate(`${image.path}`)
          }}
          focusRipple
          key={image.titleEng}
          className="image"
          focusVisibleClassName="focusVisible"
          style={{
            width: image.width,
          }}
        >
          <span
            className="imageSrc"
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span
            className="imageBackdrop"
            style={{
              transition: theme.transitions.create("opacity"),
              backgroundColor: theme.palette.common.black,
            }}
          />
          <span
            className="imageButton"
            style={{ color: theme.palette.common.white }}
          >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className="imageTitle"
              style={{
                padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
                  theme.spacing(1) + 6
                }px`,
              }}
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

              <span
                className="imageMarked"
                style={{
                  transition: theme.transitions.create("opacity"),
                  backgroundColor: theme.palette.common.white,
                }}
              />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  )
}

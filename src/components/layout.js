import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import "./layout.css"

export const LanguageContext = createContext()
export const HeaderHeightContext = createContext()

const Layout = ({ children }) => {
  const [actLanguage, setActLanguage] = useState("")

  useEffect(() => {
    if (typeof window !== `undefined`) {
      // console.log("LANGUAGE: ", window.navigator.language.slice(0, 2))

      if (window.navigator.language.slice(0, 2) === "ru") {
        setActLanguage("RUS")
      } else if (window.navigator.language.slice(0, 2) === "de") {
        setActLanguage("DEU")
      } else if (window.navigator.language.slice(0, 2) === "en") {
        setActLanguage("ENG")
      } else if (window.navigator.language.slice(0, 2) === "ge") {
        setActLanguage("GEO")
      } else {
        setActLanguage("ENG")
      }
    }
  }, [])

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  const [headerHeight, setHeaderHeight] = useState(null)

  useEffect(() => {
    console.log(`headerHeight:   ${Math.round(headerHeight)}px`)
  }, [headerHeight])

  function handleHeaderHeightChange(value) {
    if (!!value) setHeaderHeight(value)
  }



  return (
    <div style={{ backgroundColor: "#fff" }}>
      <LanguageContext.Provider
        value={{
          actLanguage,
          setActLanguage,
          handleLanguageChange,
        }}
      >
        <HeaderHeightContext.Provider
          value={{
            headerHeight,
            handleHeaderHeightChange,
          }}
        >
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </HeaderHeightContext.Provider>
      </LanguageContext.Provider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useContext, useEffect } from "react"
import { useTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { LanguageContext } from "../components/layout"
import Typography from "@material-ui/core/Typography"

const window = require("global/window")

const languageSwitcherMarginTop = window.innerWidth <= 959 ? "9%" : "7%"

export default function SelectLanguage() {
  const theme = useTheme()

  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  return (
    <>
      <FormControl
        variant="standard"
        style={{
          margin: theme.spacing(1),
          margin: 0,
          marginTop: languageSwitcherMarginTop,
          left: "10%",
        }}
      >
        <Select
          style={{ paddingLeft: 1 }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            // transformOrigin: {
            //   vertical: "top",
            //   horizontal: "left",
            // },
            getContentAnchorEl: null,
          }}
          disableUnderline={true}
          autoWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={actLanguage}
          onChange={e => {
            handleLanguageChange(e)
          }}
          // onChange={handleCurrencyChange}
          style={{ color: "white" }}
        >
          <MenuItem value={"GEO"}>
            <Typography variant="caption">GEO</Typography>
          </MenuItem>
          <MenuItem value={"DEU"}>
            <Typography variant="caption">DEU</Typography>
          </MenuItem>
          <MenuItem value={"ENG"}>
            <Typography variant="caption">ENG</Typography>
          </MenuItem>
          <MenuItem value={"RUS"}>
            <Typography variant="caption">RUS</Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

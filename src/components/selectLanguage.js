import React, { useContext, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 80,

    margin: 0,
    marginTop: languageSwitcherMarginTop,

    left: "10%",
  },
  icon: {
    paddingLeft: 1,
  },
}))

export default function SelectLanguage() {
  const classes = useStyles()

  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  return (
    <>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          classes={{
            icon: classes.icon,
          }}
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
            <Typography variant="caption" className={classes.menuItem}>
              GEO
            </Typography>
          </MenuItem>
          <MenuItem value={"DEU"}>
            <Typography variant="caption" className={classes.menuItem}>
              DEU
            </Typography>
          </MenuItem>
          <MenuItem value={"ENG"}>
            <Typography variant="caption" className={classes.menuItem}>
              ENG
            </Typography>
          </MenuItem>
          <MenuItem value={"RUS"}>
            <Typography variant="caption" className={classes.menuItem}>
              RUS
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

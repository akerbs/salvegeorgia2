import React, { useState, useContext, useEffect, useRef } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, fade } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "./layout"

import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import clsx from "clsx"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import { navigate } from "gatsby"
import LockIcon from "@material-ui/icons/Lock"
import SendIcon from "@material-ui/icons/Send"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"

const window = require("global/window")

const foolWidth = window.innerWidth <= 599 ? 288 : 380
const halfFoolWidth = foolWidth / 2
const selectMenuWidth = window.innerWidth <= 599 ? 288 : 348
const lockIconMarginLeft = window.innerWidth <= 599 ? "350%" : "470%"
const paymentCardsMarginRight = window.innerWidth <= 599 ? "11%" : "8%"

const useStyles = makeStyles(theme => ({
  root: {
    width: foolWidth,
    margin: "0 auto ",
    // minHeight: "100vh",
  },

  textfield: {
    marginBottom: "1%",
    "& .MuiOutlinedInput-inputMarginDense": {
      // padding: "8px 12px",
      margin: 0,

      // maxHeight: 36,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: 1,
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 4px`,
      },
    },

    // padding: "8px 12px",
  },

  textfieldFullWidth: {
    width: foolWidth,
  },
  textfieldFullWidthPartTop: {
    // paddingBottom: "-0.25%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `4px 4px 0 0 `,
        // borderWidth: "1px 1px  0 1px ",
        borderBottomColor: "transparent",
      },
      "&:hover fieldset": {
        borderBottomColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: theme.palette.primary.main,
      },
    },
  },
  textfieldFullWidthBetween: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
        borderBottomColor: "transparent",
        // borderWidth: "0 1px 1px 1px",
      },
      "&:hover fieldset": {
        borderBottomColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: theme.palette.primary.main,
      },
    },
  },
  textfieldHalfLeft: {
    width: halfFoolWidth,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `0 0 0 4px`,
        // borderTopColor: "transparent",
        borderRightColor: "transparent",
        // borderWidth: "0 0 1px 1px",
      },
      "&:hover fieldset": {
        borderRightColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderRightColor: theme.palette.primary.main,
      },
    },
  },
  textfieldHalfRight: {
    width: halfFoolWidth,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `0 0 4px 0`,
        // borderTopColor: "transparent",
        // borderWidth: "0 1px 1px 1px",
      },
    },
  },

  textfieldError: {
    "& .MuiOutlinedInput-root": {
      color: "rgb(220,39,39)",

      "& fieldset": {
        borderWidth: 1,
        borderColor: "rgb(220,39,39)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(220,39,39)",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .Mui-focused": {
      color: "black",
    },
  },
  textFieldLeftError: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRightColor: "transparent",
      },
      "&:hover fieldset": {
        borderRightColor: "transparent",
      },
    },
  },
  textFieldLeftErrorReset: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRightColor: "rgb(220,39,39)",
      },
      "&:hover fieldset": {
        borderRightColor: "rgb(220,39,39)",
      },
    },
  },

  textFieldBetweenError: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderBottomColor: "transparent",
      },
      "&:hover fieldset": {
        borderBottomColor: "transparent",
      },
    },
  },
  textFieldBetweenErrorReset: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderBottomColor: "rgb(220,39,39)",
      },
      "&:hover fieldset": {
        borderBottomColor: "rgb(220,39,39)",
      },
    },
  },
  errorMsg: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgb(220,39,39)",
  },
  selectRoot: {},
  select: {},
  selectMenu: {
    width: selectMenuWidth,
    padding: "2.109% 0 2.109% 3%",
    margin: 0,
    fontSize: 16,
  },
  selectX: {
    "& li": {
      fontSize: 16,
    },
  },
}))

export default function (props) {
  const classes = useStyles()

  const { actLanguage } = useContext(LanguageContext)

  const [form, setForm] = useState({
    sex_grad_select: null,
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    service_select: null,
  })
  const [errorForm, setErrorForm] = useState({
    sex_grad_select: null,
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    service_select: null,
  })
  const [errorFormMsg, setErrorFormMsg] = useState({
    sex_grad_select: false,
    first_name: false,
    last_name: false,
    phone: false,
    email: false,
    service_select: false,
  })
  const [loading, setLoading] = useState(false)

  function handleLoadingOn() {
    setLoading(true)
  }
  function handleLoadingOff() {
    setLoading(false)
  }

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (form.sex_grad_select !== null) {
      setErrorForm({ sex_grad_select: false })
    }
  }, [form.sex_grad_select])

  useEffect(() => {
    if (
      form.first_name !== null &&
      form.first_name.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ first_name: false })
    }
  }, [form.first_name])

  useEffect(() => {
    if (
      form.last_name !== null &&
      form.last_name.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ last_name: false })
    }
  }, [form.last_name])

  useEffect(() => {
    if (
      form.phone !== null &&
      form.phone.match(
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
      )
    ) {
      setErrorForm({ phone: false })
    }
  }, [form.phone])

  useEffect(() => {
    if (
      form.email !== null &&
      form.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      setErrorForm({ email: false })
    }
  }, [form.email])

  useEffect(() => {
    if (form.service_select !== null) {
      setErrorForm({ service_select: false })
    }
  }, [form.service_select])

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onSubmit = async event => {
    event.preventDefault()

    if (
      !form.sex_grad_select ||
      form.sex_grad_select === null ||
      form.sex_grad_select === "undefined"
    ) {
      setErrorForm({ sex_grad_select: true })
      setErrorFormMsg({
        sex_grad_select:
          actLanguage === "DEU"
            ? "Bitte wählen Sie eine Anrede aus."
            : actLanguage === "RUS"
            ? "Пожалуйста, выберите приветствие."
            : actLanguage === "GEO"
            ? "გთხოვთ, აირჩიოთ მისალმება."
            : actLanguage === "ENG"
            ? "Please select a salutation."
            : "Please select a salutation.",
      })
    } else if (
      form.first_name === null ||
      !form.first_name.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ first_name: true })
      setErrorFormMsg({
        first_name:
          actLanguage === "DEU"
            ? "Der Vorname ist unvollständig"
            : actLanguage === "RUS"
            ? "Имя указано не полностью."
            : actLanguage === "GEO"
            ? "სახელის ველი არასრულია."
            : actLanguage === "ENG"
            ? "First name field is incomplete."
            : "First name field is incomplete.",
      })
    } else if (
      form.last_name === null ||
      !form.last_name.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ last_name: true })
      setErrorFormMsg({
        last_name:
          actLanguage === "DEU"
            ? "Der Nachname ist unvollständig"
            : actLanguage === "RUS"
            ? "Фамилия указана не полностью."
            : actLanguage === "GEO"
            ? "მეორე სახელის ველი არასრულია."
            : actLanguage === "ENG"
            ? "Last name field is incomplete."
            : "Last name field is incomplete.",
      })
    } else if (
      form.phone === null ||
      !form.phone.match(
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
      )
    ) {
      setErrorForm({ phone: true })
      setErrorFormMsg({
        phone:
          actLanguage === "DEU"
            ? "Das Telefon ist unvollständig"
            : actLanguage === "RUS"
            ? "Номер телефона введен не полностью."
            : actLanguage === "GEO"
            ? "ტელეფონის ველი არასრულია."
            : actLanguage === "ENG"
            ? "Phone field is incomplete."
            : "Phone field is incomplete.",
      })
    } else if (
      form.email === null ||
      !form.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      setErrorForm({ email: true })
      setErrorFormMsg({
        email:
          actLanguage === "DEU"
            ? "Die E-Mail-Adresse ist unvollständig"
            : actLanguage === "RUS"
            ? "Адрес эл. почты введен не полностью."
            : actLanguage === "GEO"
            ? "ელ.ფოსტის ველი არასრულია."
            : actLanguage === "ENG"
            ? "Email field is incomplete."
            : "Email field is incomplete.",
      })
    } else if (
      !form.service_select ||
      form.service_select === null ||
      form.service_select === "undefined"
    ) {
      setErrorForm({ service_select: true })
      setErrorFormMsg({
        service_select:
          actLanguage === "DEU"
            ? "Bitte wählen Sie den Service aus."
            : actLanguage === "RUS"
            ? "Пожалуйста, выберите услугу."
            : actLanguage === "GEO"
            ? "გთხოვთ, აირჩიოთ მომსახურება."
            : actLanguage === "ENG"
            ? "Please select the service."
            : "Please select the service.",
      })
    } else {
      try {
        handleLoadingOn()

        const data = form

        const response = await fetch(
          // "https://stripe-api-test-server.herokuapp.com/stripe/charge",
          // "http://localhost:8080/stripe/charge",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
        if (response.ok) {
          // alert(alertMessage)
          // await props.onClose()
          // navigate("/")
          // window.location.reload()
          let responseJson = await response.json()
          handleLoadingOff()
          return responseJson
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      {window.innerWidth > 600 && (
        <Typography
          variant="body1"
          style={{
            fontWeight: 600,
            color: "#303030",
            textAlign: "center",
            margin: "5% 0",
          }}
        >
          {actLanguage === "DEU"
            ? "Hinterlassen Sie eine Anfrage"
            : actLanguage === "RUS"
            ? "Оставить заявку"
            : actLanguage === "GEO"
            ? "დატოვეთ თხოვნა"
            : actLanguage === "ENG"
            ? "Leave a request"
            : "Leave a request"}
        </Typography>
      )}

      <form
        onSubmit={onSubmit}
        // onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormControl
          variant="outlined"
          className={clsx(
            classes.textfield,
            // classes.textfieldHalfRight,
            errorForm.sex_grad_select && classes.textfieldError
          )}
        >
          <InputLabel
            id="demo-simple-select-label"
            margin="dense"
            style={{ fontSize: 16, color: "#a1a1a1" }}
          >
            {actLanguage === "DEU"
              ? "Anrede auswählen"
              : actLanguage === "RUS"
              ? "Выберите приветствие"
              : actLanguage === "GEO"
              ? "აირჩიეთ მისალმება"
              : actLanguage === "ENG"
              ? "Select a salutation"
              : "Select a salutation"}
          </InputLabel>
          <Select
            classes={{
              root: classes.selectRoot,
              select: classes.select,
              selectMenu: classes.selectMenu,
            }}
            MenuProps={{ classes: { paper: classes.selectX } }}
            size="small"
            id="sex_grad_select"
            name="sex_grad_select"
            // defaultValue={form.sex_grad_select}
            value={form.sex_grad_select}
            onChange={changeHandler}
          >
            <MenuItem value={"AU"} key={"AU"}>
              Австралия
            </MenuItem>
            <MenuItem value={"AT"} key={"AT"}>
              Австрия
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.first_name && classes.textfieldError
          )}
        >
          <TextField
            type="text"
            id="first_name"
            variant="outlined"
            size="small"
            name="first_name"
            value={form.first_name}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
            placeholder={
              actLanguage === "DEU"
                ? "Vorname"
                : actLanguage === "RUS"
                ? "Имя"
                : actLanguage === "GEO"
                ? "სახელი"
                : actLanguage === "ENG"
                ? "First name"
                : "First name"
            }
          />
        </FormControl>

        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.last_name && classes.textfieldError
          )}
        >
          <TextField
            type="text"
            id="last_name"
            variant="outlined"
            size="small"
            name="last_name"
            value={form.last_name}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
            placeholder={
              actLanguage === "DEU"
                ? "Nachname"
                : actLanguage === "RUS"
                ? "Фамилия"
                : actLanguage === "GEO"
                ? "გვარი"
                : actLanguage === "ENG"
                ? "Last name"
                : "Last name"
            }
          />
        </FormControl>

        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.phone && classes.textfieldError
          )}
        >
          <TextField
            type="phone"
            variant="outlined"
            size="small"
            name="phone"
            value={form.phone}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
            placeholder={
              actLanguage === "DEU"
                ? "Telefon"
                : actLanguage === "RUS"
                ? "Телефон"
                : actLanguage === "GEO"
                ? "ტელეფონი"
                : actLanguage === "ENG"
                ? "Phone"
                : "Phone"
            }
          />
        </FormControl>

        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.email && classes.textfieldError
          )}
        >
          <TextField
            type="email"
            variant="outlined"
            size="small"
            name="email"
            value={form.email}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
            placeholder={
              actLanguage === "DEU"
                ? "E-mail"
                : actLanguage === "RUS"
                ? "Эл. почта"
                : actLanguage === "GEO"
                ? "ელ.წერილი"
                : actLanguage === "ENG"
                ? "Email"
                : "Email"
            }
          />
        </FormControl>

        <FormControl
          variant="outlined"
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.service_select && classes.textfieldError
          )}
        >
          <InputLabel
            id="demo-simple-select-label"
            margin="dense"
            style={{ fontSize: 16, color: "#a1a1a1" }}
          >
            {actLanguage === "DEU"
              ? "Service auswählen"
              : actLanguage === "RUS"
              ? "Выберите услугу"
              : actLanguage === "GEO"
              ? "აირჩიეთ მომსახურება"
              : actLanguage === "ENG"
              ? "Select a service"
              : "Select a service"}
          </InputLabel>
          <Select
            classes={{
              root: classes.selectRoot,
              select: classes.select,
              selectMenu: classes.selectMenu,
            }}
            MenuProps={{ classes: { paper: classes.selectX } }}
            size="small"
            id="service_select"
            name="service_select"
            // defaultValue={form.sex_grad_select}
            value={form.service_select}
            onChange={changeHandler}
          >
            <MenuItem value={"BY"} key={"BY"}>
              Беларусь
            </MenuItem>
            <MenuItem value={"BZ"} key={"BZ"}>
              Белиз
            </MenuItem>
          </Select>
        </FormControl>

        <span className={classes.errorMsg}>
          {(errorForm.sex_grad_select && errorFormMsg.sex_grad_select) ||
            (errorForm.first_name && errorFormMsg.first_name) ||
            (errorForm.last_name && errorFormMsg.last_name) ||
            (errorForm.phone && errorFormMsg.phone) ||
            (errorForm.email && errorFormMsg.email) ||
            (errorForm.service_select && errorFormMsg.service_select)}
        </span>
        <br />
        <br />

        <Button
          fullWidth
          color="primary"
          id="submit"
          name="submit"
          type="submit"
          variant="contained"
          disabled={loading}
          style={{ textTransform: "none" }}
          endIcon={
            <SendIcon
              style={{
                // marginLeft: lockIconMarginLeft
                right: "10%",
              }}
            />
          }
        >
          {loading ? (
            actLanguage === "DEU" ? (
              "Verarbeitung..."
            ) : actLanguage === "RUS" ? (
              "Обработка ..."
            ) : actLanguage === "ENG" ? (
              "Processing..."
            ) : (
              "Processing..."
            )
          ) : (
            <span style={{ marginLeft: "10%" }}>
              {actLanguage === "DEU"
                ? "Senden"
                : actLanguage === "RUS"
                ? "Отправить"
                : actLanguage === "GEO"
                ? "გაგზავნა"
                : actLanguage === "ENG"
                ? "Send"
                : "Send"}{" "}
            </span>
          )}
        </Button>
      </form>
    </div>
  )
}

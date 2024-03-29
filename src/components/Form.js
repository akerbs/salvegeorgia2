import React, { useState, useContext, useEffect, useRef } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { fade, useTheme, makeStyles } from "@material-ui/core/styles"
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
// import "./form.css"
const window = require("global/window")

const foolWidth = window.innerWidth <= 599 ? 288 : 380

const useStyles = makeStyles(theme => ({
  root: {
    width: foolWidth,
    margin: "0 auto ",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  btn: {
    textTransform: "none",
    width: 360,
    [theme.breakpoints.down("xs")]: {
      width: 268,
    },
  },

  textfield: {
    width: 360,
    [theme.breakpoints.down("xs")]: {
      width: 268,
    },
    // marginBottom: "1%",
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

  errorMsg: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgb(220,39,39)",
  },

  selectMenu: {
    // width: selectMenuWidth,
    // padding: "10.5px 14px",
    margin: 0,
    fontSize: 16,
  },
  menuItem: {
    "& li": {
      fontSize: "0.8rem",
    },
  },
}))

export default function (props) {
  const classes = useStyles()
  const theme = useTheme()

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

      <form
        onSubmit={onSubmit}
        // onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormControl
          variant="outlined"
          className={clsx(
            classes.textfield,
            errorForm.sex_grad_select && classes.textfieldError
          )}
        >
          <TextField
            select
            label={
              form.sex_grad_select === false ||
              form.sex_grad_select === "undefined" ||
              !form.sex_grad_select
                ? actLanguage === "DEU"
                  ? "Anrede auswählen"
                  : actLanguage === "RUS"
                  ? "Выберите приветствие"
                  : actLanguage === "GEO"
                  ? "აირჩიეთ მისალმება"
                  : actLanguage === "ENG"
                  ? "Select a salutation"
                  : "Select a salutation"
                : ""
            }
            variant="outlined"
            InputLabelProps={{
              shrink: false,
              style: { fontSize: 16, color: "#a1a1a1" },
            }}
            SelectProps={{
              MenuProps: {
                // style: {
                //   "& li": {
                //     fontSize: "0.8rem",
                //   },
                // },
                className: classes.menuItem,
              },
            }}
            InputProps={{
              style: { margin: 0, fontSize: 16, textAlign: "start" },
            }}
            size="small"
            id="sex_grad_select"
            name="sex_grad_select"
            // defaultValue={form.sex_grad_select}
            value={form.sex_grad_select}
            onChange={changeHandler}
          >
            <MenuItem value={"Mr."} key={"Mr."} className={classes.menuItem}>
              {actLanguage === "DEU"
                ? "Herr"
                : actLanguage === "RUS"
                ? "Г-н."
                : actLanguage === "GEO"
                ? "ბატონი"
                : actLanguage === "ENG"
                ? "Mr."
                : "Mr."}
            </MenuItem>
            <MenuItem value={"Mrs."} key={"Mrs."} className={classes.menuItem}>
              {actLanguage === "DEU"
                ? "Frau"
                : actLanguage === "RUS"
                ? "Г-жа."
                : actLanguage === "GEO"
                ? "ქალბატონი"
                : actLanguage === "ENG"
                ? "Mrs."
                : "Mrs."}
            </MenuItem>
            {actLanguage === "ENG" && (
              <MenuItem value={"Ms."} key={"Ms."} className={classes.menuItem}>
                Ms.
              </MenuItem>
            )}
          </TextField>
        </FormControl>

        <FormControl
          className={clsx(
            classes.textfield,
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
            errorForm.service_select && classes.textfieldError
          )}
        >
          <TextField
            select
            label={
              form.service_select === false ||
              form.service_select === "undefined" ||
              !form.service_select
                ? actLanguage === "DEU"
                  ? "Service auswählen"
                  : actLanguage === "RUS"
                  ? "Выберите услугу"
                  : actLanguage === "GEO"
                  ? "აირჩიეთ მომსახურება"
                  : actLanguage === "ENG"
                  ? "Select a service"
                  : "Select a service"
                : ""
            }
            variant="outlined"
            InputLabelProps={{
              shrink: false,
              style: { fontSize: 16, color: "#a1a1a1" },
            }}
            SelectProps={{
              MenuProps: {
                // style: {
                //   "& li": {
                //     fontSize: "0.8rem",
                //   },
                // },
                className: classes.menuItem,
              },
            }}
            InputProps={{
              style: { margin: 0, fontSize: 16, textAlign: "start" },
            }}
            size="small"
            id="service_select"
            name="service_select"
            // defaultValue={form.sex_grad_select}
            value={form.service_select}
            onChange={changeHandler}
          >
            {props.page === "legalService" ? (
              <>
                <MenuItem
                  value={"Registration of legal entities"}
                  key={"Registration of legal entities"}
                  className={classes.menuItem}
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
                  value={"Arbitration"}
                  key={"Arbitration"}
                  className={classes.menuItem}
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
              </>
            ) : props.page === "patientService" ? (
              <>
                <MenuItem
                  value={"Plastic surgery"}
                  key={"Plastic surgery"}
                  className={classes.menuItem}
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
                  value={"Cosmetology procedures"}
                  key={"Cosmetology procedures"}
                  className={classes.menuItem}
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
                  value={"Dental implants"}
                  key={"Dental implants"}
                  className={classes.menuItem}
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
                  value={"Massage"}
                  key={"Massage"}
                  className={classes.menuItem}
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
                  value={"Balneological procedures"}
                  key={"Balneological procedures"}
                  className={classes.menuItem}
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
                  value={"In Vitro Fertilization"}
                  key={"In Vitro Fertilization"}
                  className={classes.menuItem}
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
              </>
            ) : props.page === "workAbroad" ? (
              <>
                <MenuItem
                  value={"Hiring doctors"}
                  key={"Hiring doctors"}
                  className={classes.menuItem}
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
                  value={"Hiring nurses"}
                  key={"Hiring nurses"}
                  className={classes.menuItem}
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
                  value={"Summer activities"}
                  key={"Summer activities"}
                  className={classes.menuItem}
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
                  value={"For students"}
                  key={"For students"}
                  className={classes.menuItem}
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
              </>
            ) : null}
          </TextField>
        </FormControl>

        <span
          style={{ fontSize: 13, fontWeight: "500", color: "rgb(220,39,39)" }}
        >
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
          // fullWidth
          color="primary"
          id="submit"
          name="submit"
          type="submit"
          variant="contained"
          disabled={loading}
          className={classes.btn}
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

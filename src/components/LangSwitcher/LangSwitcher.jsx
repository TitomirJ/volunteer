import { FormControl, Select, MenuItem, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import AppContext from "./../../context/AppContext";

import UkrainianFlagIcon from "./../../assests/icons/UkrainianFlagIcon";
import RussianFlagIcon from "./../../assests/icons/RussianFlagIcon";
import UsFlagIcon from "./../../assests/icons/UsFlagIcon";

import styles from "./LangSwitcher.module.scss";

const dropdownStyles = makeStyles({
  underline: {
    borderBottom: "0px solid red !important",
    "&:hover": {
      borderBottom: "0px solid rgba(0,0,0,0)",
    },
    "&:after": {
      borderBottomColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&.Mui-selected": { color: "#ffffff" },
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  },
});

const LangSwitcher = () => {
  const ddnSt = dropdownStyles();
  const { lang, switchLang } = useContext(AppContext);

  const handleChange = (event) => {
    switchLang(event.target.value);
  };

  const flagIcon = () => {
    if (lang === "ru") {
      return <RussianFlagIcon width="33" height="25" />;
    }
    if (lang === "en") {
      return <UsFlagIcon width="33" height="25" />;
    }
    if (lang === "uk") {
      return <UkrainianFlagIcon width="33" height="25" />;
    }
  };

  return (
    <div className={styles.wrapper}>
      {flagIcon()}
      <FormControl
        style={{
          width: "60px",
          boxShadow: "none",
        }}
      >
        <Select
          id="locationSelect"
          className={ddnSt.underline}
          value={lang}
          onChange={handleChange}
          disableUnderline
        >
          <MenuItem value="uk">UA</MenuItem>
          <MenuItem value="en">ENG</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LangSwitcher;

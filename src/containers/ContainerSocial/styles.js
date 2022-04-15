import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  social: {
    display: "flex",
    justifyContent: "space-between",

    "& svg": {
      cursor: "pointer",
    },

    "@media (max-width: 769px)": {
      display: "grid",
      justifyContent: "space-between",
      gridTemplateColumns: "repeat(5, auto)",
      gridTemplateRows: "repeat(1, auto)",
    },
  },
  socialIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#2E4E6C",
    textDecoration: "none",
  },
  line: {
    width: "2px",
    height: "40px",
    background: "#C9ECFF",
  },
});

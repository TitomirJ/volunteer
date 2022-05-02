import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    minHeight: "100vh",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundAttachment: "fixed",
    flexDirection: "column",

    "@media (max-width: 769px)": {
      backgroundAttachment: "unset",
    },
  },
  title: {
    fontWeight: 900,
    fontSize: "70px",
    lineHeight: "85px",
    textTransform: "uppercase",
    color: "#FFF8D1",
    marginTop: "200px",
    textShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
    textAlign: "center",

    "& span": {
      color: "#B3E3FF",
    },

    "@media (max-width: 769px)": {
      fontSize: "35px",
      lineHeight: "55px",
    },
  },
  blocksWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "940px",

    "@media (max-width: 1025px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  block: {
    width: "450px",
    backdropFilter: "blur(10px) brightness(80%)",
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "27px 0 40px",

    "@media (max-width: 1025px)": {
      width: "290px",
      marginBottom: "20px",
    },

    "& h2": {
      fontWeight: 700,
      fontSize: "48px",
      margin: 0,

      "@media (max-width: 1025px)": {
        fontSize: "30px",
      },
    },

    "& ul": {
      width: "117px",
      padding: 0,
      textAlign: "left",

      "@media (max-width: 1025px)": {
        fontSize: "14px",
      },
    },
  },
  blockButton: {
    width: "270px",

    "@media (max-width: 1025px)": {
      width: "200px",
      height: "55px",
    },
  },
}));

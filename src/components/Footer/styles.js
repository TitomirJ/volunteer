import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  footer: {
    background: "#193151",
    color: "white",
    padding: "74px 0",
  },
  linksToContact: {
    fontWeight: "bold",
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
  },
  socialIconsBlock: {
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "28px",

    "& svg": {
      cursor: "pointer",

      "&:hover": {
        "& path": {
          fill: "#fff856",
        },
      },
    },
  },
  logo: {
    "& img": {
      width: "100px",

      "@media (min-width: 1025px)": {
        width: "150px",
      },
    },
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    padding: "0 25px",
    fontWeight: 700,

    "& a, & p": {
      cursor: "pointer",
      color: "white",
      textDecoration: "none",

      "&::after": {
        content: '"|"',
        padding: "35px",
      },
      "&:last-child": {
        "&::after": {
          content: '""',
          padding: "0",
        },
      },
    },
  },
});

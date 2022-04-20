import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  select: {
    "&:after": {
      borderBottomColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    borderBottom: `1px solid white`,
    accentColor: "white",
  },
}));

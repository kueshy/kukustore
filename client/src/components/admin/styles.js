import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1.5),
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appBar: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    margin: "0",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  },
  heading: {
    color: "blue",
  },
  title: {
    // flexGrow: 1,
    textAlign: "center",
    color: "blue",
  },
  loginPar: {
    marginBottom: "10px",
    marginTop: "10px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "10px",
    color: "#fff",
  },
}));

export default useStyles;

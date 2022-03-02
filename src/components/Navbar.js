import { makeStyles } from "@mui/styles";
import { AppBar, Avatar, InputBase, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    color: "inherit",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButon: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAMA
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search ..." className={classes.input} />
        </div>
        <div className={classes.icons}>
          <SearchIcon className={classes.searchButon} />
          <Badge badgeContent={4} color="error" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

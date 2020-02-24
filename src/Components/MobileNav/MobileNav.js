import React from "react";
import "./MobileNav.css";
import P from "../Styles/P.style";
import A from "../Styles/A.style";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ContactsIcon from "@material-ui/icons/Contacts";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles({
  root: {
    position: "fixed"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
});
const MobileNav = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <A href="#home">
          <ListItem>
            <ListItemIcon style={{ color: "#000000" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000" }}>Home</ListItemText>
          </ListItem>
        </A>
      </List>
      <Divider />
      <List>
        <A href="#about">
          <ListItem>
            <ListItemIcon style={{ color: "#000000" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000" }}>About</ListItemText>
          </ListItem>
        </A>
      </List>
      <Divider />
      <List>
        <A href="#projects">
          <ListItem>
            <ListItemIcon style={{ color: "#000000" }}>
              <FolderOpenIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000" }}>Projects</ListItemText>
          </ListItem>
        </A>
      </List>
      <Divider />
      <List>
        <A href="#contact">
          <ListItem>
            <ListItemIcon style={{ color: "#000000" }}>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000" }}>Contact Me</ListItemText>
          </ListItem>
        </A>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <Button onClick={toggleDrawer("left", true)} style={{ color: "#FFFFFF" }}>
        <MenuIcon />
        <P>Menu</P>
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
};

export default MobileNav;

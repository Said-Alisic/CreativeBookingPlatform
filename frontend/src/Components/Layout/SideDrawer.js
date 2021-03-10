import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, BrowserRouter } from "react-router-dom";
import RouteSwitch  from './RouteSwitch';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
      
    }
  },
  appBar: {
    
    [theme.breakpoints.up("sm")]: {
      position: 'flex',
      width: '100%',
      zIndex: theme.zIndex.drawer + 1,
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    //padding: theme.spacing(7), // This 'kinda' solves the problem of appbar covering drawer but...not quite...yeah...
    paddingTop: 64  // equal to AppBar height (on desktop)
  },
  content: {
    flexGrow: 10,
    padding: theme.spacing(3)
  }
}));

// Our side drawer that holds the links to our routes and includes a navbar (navbar may be transferred elsewhere later)
function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerOptions = [
    'Classes', 
    'Teachers', 
    'Students', 
    'Bookings', 
    'Transactions',
    'My Profile', 
    'My Classes', 
    'My Bookings', 
    'Tickets'];

  const drawer = (
    <div>
      <List>
        {drawerOptions.map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text.toLowerCase()}>
            <ListItemText key={text} primary={text} />       
          </ListItem>     
        ))}
        <Divider/>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Creative Bookings
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
          <main className={classes.content}>
            <div className={classes.toolbar}/>
            <RouteSwitch/>
          </main>
      </BrowserRouter>
    </div>
  );
}


export default SideDrawer;
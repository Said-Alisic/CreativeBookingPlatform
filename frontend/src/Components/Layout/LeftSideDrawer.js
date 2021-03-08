import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter, Link } from 'react-router-dom';
import  RouteSwitch  from './RouteSwitch';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export function LeftSideDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Classes', 'Teachers', 'Students', 'Bookings'].map((text) => (
          <ListItem  key={text} component={Link} to={"/" + text.toLowerCase()}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {['My Profile', 'My Classes', 'My Bookings', 'Tickets'].map((text, index) => (     
          <ListItem  key={text} component={Link} to={"/" + text.toLowerCase()}> 
          
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      
      
    </div>
  );

  return (
    <div>
        <BrowserRouter>
          <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
          </React.Fragment>
          <RouteSwitch/>
        </BrowserRouter>
    </div>
  );
}

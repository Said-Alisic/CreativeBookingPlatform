import React from 'react';
import { Container as MyContainer} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Have to check how to use makeStyles

 const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),


  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Container = (props) => {

  const { container, flexCenter } = useStyles();

  return (
      <MyContainer 
          className={`${container} ${props.flexCenter && flexCenter}`}
          maxWidth={false}>  
          {props.children}    
      </MyContainer>
  );
}

export default Container;
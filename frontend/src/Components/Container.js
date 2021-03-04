import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Container as MyContainer } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(10),
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));


export function Container(props) {

    const { container, flexCenter } = useStyles(); 

  return (
        <MyContainer className={`${container} ${props.flexCenter && flexCenter}`}>
            <CssBaseline></CssBaseline>
            <Typography
            component="div"
            style={{ backgroundColor: "blue"}}
            />
            {props.children}
        </MyContainer>
  );
}
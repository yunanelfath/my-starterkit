import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withRouter } from "react-router";
import {
  routerPath
} from 'router/Routerlist'

const LabelBottomNavigation = (props) => {
  const [value, setValue] = React.useState(props.active);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if(newValue === 'profile'){
          props.history.push(routerPath.purchase.history)
        }
      }}
      showLabels
    >
      <BottomNavigationAction value="home" label="Home"/>
      <BottomNavigationAction value="feed"  label="Feed"/>
      <BottomNavigationAction value="cart"  label="Cart"/>
      <BottomNavigationAction value="profile"  label="Profile"/>
    </BottomNavigation>
  );
}
export default withRouter(LabelBottomNavigation)

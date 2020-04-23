import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home"/>
      <BottomNavigationAction label="Feed"/>
      <BottomNavigationAction label="Cart"/>
      <BottomNavigationAction label="Profile"/>
    </BottomNavigation>
  );
}

import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

const ThemeSwitch = () => {
    const [theme, setTheme] = React.useState('light');


    const changeTheme = (value: any) => {
        setTheme(value ? 'dark' : 'light');
      };

    return (
      <div>
        <Switch onChange={changeTheme} /> Change Style
      </div>
    )
  
}

export default ThemeSwitch;
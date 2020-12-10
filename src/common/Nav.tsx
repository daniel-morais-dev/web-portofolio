import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import LanguageSelect from './LanguageSelect'
import ThemeSwitch from './ThemeSwitch'
import { withTranslation, WithTranslation  } from 'react-i18next';


const rightStyle : React.CSSProperties = {
  float: 'right',
}




class Nav extends React.Component<WithTranslation> {

  render ()
  {
    const { t } = this.props;

    return(
      <nav>          
        <Menu mode="horizontal">

          <Menu.Item key="about">
            {t("navigation.about")}
          </Menu.Item>
          <Menu.Item key="projects">
            {t("navigation.projects")}
          </Menu.Item>
          <Menu.Item key="theme" style={rightStyle}>
            <ThemeSwitch/>
          </Menu.Item>
          <Menu.Item key="language" style={rightStyle}>
            <LanguageSelect/>
          </Menu.Item>
        </Menu>
      </nav>
    )
  }
  
}

export default withTranslation()(Nav);


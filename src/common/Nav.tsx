import React from 'react';
import 'antd/dist/antd.css';
import {Menu, Divider } from 'antd';
import LanguageSelect from './LanguageSelect'
import ThemeSwitch from './ThemeSwitch'
import { withTranslation, WithTranslation  } from 'react-i18next';


const rightStyle : React.CSSProperties = {
  display: 'inline-block',
  margin: 10
}

const rightStyleDiv : React.CSSProperties = {
  float: 'right',
  display: 'inline-block'
}



class Nav extends React.Component<WithTranslation> {

  render ()
  {
    const { t } = this.props;

    return(
      <nav>          
        <Divider type="vertical" />
        {/* <Menu mode="horizontal" theme={this.state.theme}> */}
        <Menu mode="horizontal">

          <Menu.Item key="about">
            {t("about")}
          </Menu.Item>
          <Menu.Item key="projects">
            {t("projects")}
          </Menu.Item>
          <div style={rightStyleDiv} >
            <Menu.Item key="theme" style={rightStyle}>
              <ThemeSwitch/>
            </Menu.Item>
            <Menu.Item key="language" style={rightStyle}>
              <LanguageSelect/>
            </Menu.Item>
          </div>
        </Menu>
      </nav>
    )
  }
  
}

export default withTranslation()(Nav);


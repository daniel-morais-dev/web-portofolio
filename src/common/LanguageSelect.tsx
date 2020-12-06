import React from 'react';
// import languages from '../../public/locales/supportedLanguages.json'
import i18n from '../i18n';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;


const SetLanguage = (lng: string) =>{
  i18n.changeLanguage(lng);
  console.log("Change to "+lng);
  console.log("current language to "+i18n.language);
  console.log("LAanguages"+i18n.languages);

}


const onChange = (value: any) => {
  console.log(`selected ${value}`);
  SetLanguage(value as string);
}

const onBlur = () => {
  console.log('blur');
}

const onFocus = () => {
  console.log('focus');
}

const onSearch = (value: any) => {
  console.log('search:', value);
}

class LanguageSelect extends React.Component {

  render() {
    return (
      <div>
          <Select
            showSearch
            style={{ width: 200 }}
            defaultValue={i18n.language}
            placeholder="Select a language"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          > 
            <Option value="en">English</Option>
            <Option value="jpn">Japanese</Option>
            <Option value="pt">Portuguese</Option>
          </Select>
      </div>
    )
  }
}


export default LanguageSelect;


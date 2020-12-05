import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import languages from '../../public/locales/supportedLanguages.json'
import i18n from '../i18n';
import { debug } from 'console';

const styles = (theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

interface Props extends WithStyles<typeof styles> {
    supportedLanguages?: {};
}

const SetLanguage = (lng: string) =>{
  i18n.changeLanguage(lng);
  console.log("Change to "+lng);
  console.log("current language to "+i18n.language);
  console.log("LAanguages"+i18n.languages);

}


const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
   SetLanguage(event.target.value as string);
};


class LanguageSelect extends React.Component<Props> {
  // const [language, SetLanguage] = React.useState('');

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="language-select-label">Age</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={i18n.language}
            onChange={handleChange}
          >        
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"jpn"}>Japanese</MenuItem>
            <MenuItem value={"pt"}>Portuguese</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}


export default withStyles(styles)(LanguageSelect);
// @flow
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { red, green } from 'material-ui/colors';

const AppTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  },
  overrides: {
    AppBar: {}
  }
});

export default AppTheme;

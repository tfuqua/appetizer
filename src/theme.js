// @flow
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { red, green } from 'material-ui/colors';

const AppTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  },
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: green[500]
      }
    },
    MuiButton: {
      raisedPrimary: {
        color: '#fff'
      }
    },
    MuiTabs: {
      root: {
        background: '#f5f5f5'
      }
    },
    MuiTableCell: {
      paddingDefault: {
        padding: '8px 4px'
      }
    }
  }
});

export default AppTheme;

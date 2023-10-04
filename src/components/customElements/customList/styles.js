import { makeStyles,createMuiTheme  } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles(() => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: green[500],
    },
    avatarExpense: {
        color: theme,
        backgroundColor: red[500],
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    }
}));

const theme = createMuiTheme({
    palette: {
        main: red[500],
    },
});
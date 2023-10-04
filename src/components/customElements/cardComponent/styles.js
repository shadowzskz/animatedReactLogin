import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    card: {
        margin: '0px',
        padding: '0px',
        overflow: 'hidden',
        boxShadow: '0px 0px 15px -5px',
        transition: '0.3s',
        borderRadius: '33px',
        alignItems: 'center',
        animation: 'ease-in',

    }
    ,
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
    expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    },
}));
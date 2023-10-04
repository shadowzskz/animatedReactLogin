import React from 'react';
import { List as MUIList } from '@material-ui/core';

import { useStateValue } from '../../../context/StateProvider';

import useStyles from './styles';
import Values from './Values';

const List = () => {

    const [ { transactions }, dispatch] = useStateValue();
    const classes = useStyles();


    return (
        <MUIList dense={false} className={classes.list}>
            {transactions?.map((transaction) => (
                <Values 
                    amount = {transaction.amount}
                    category = {transaction.category} 
                    date = {transaction.date}
                    id =  {transaction.id}
                    type = {transaction.type}
                    />     
            ))}            
        </MUIList>
    );
};

export default List;
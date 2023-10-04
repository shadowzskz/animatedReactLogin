import React from 'react';
import {  ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { useStateValue } from '../../../context/StateProvider';
import useStyles from './styles';

const Values = ({ id, type,category,amount,date}) => {

    const [{transactions}, dispatch] = useStateValue();
    const classes = useStyles();
    const deleteTransaction = () => {
        dispatch({
            type: "DELETE_TRANSACTION",
            id: id
        })
        console.log(id);
        
    }


    return (
        <div>
            <Slide direction="down" in mountOnEnter unmountOnExit>
            <ListItem>
                <ListItemAvatar>
                <Avatar className={type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                    <MoneyOff />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={category} secondary={`$${amount} - ${date}`} />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={deleteTransaction}>
                    <Delete/>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            </Slide>
        
        </div>
    )
}

export default Values

import React, { useState } from 'react';
import { v4 } from 'uuid';
import { 
        Card, 
        CardHeader, 
        CardContent, 
        Typography, 
        Grid, 
        Divider,
        TextField,
        FormControl, 
        InputLabel, 
        Select, 
        MenuItem
    } from '@material-ui/core';
import "./CardDetailed.scss"
import CustomButton from '../customButton/CustomButton';
import List from '../customList/List'
import { incomeCategories, expenseCategories } from '../../../assets/cateogories/Catergories';
import useStyles from './styles';

import { useStateValue } from '../../../context/StateProvider';


const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date:new Date(),
}

function CardDetailed() {

    const [data, setData] = useState(initialState);
    const [{}, dispatch] = useStateValue();
    const classes = useStyles();

    const selectCategories = data.type === 'Income' ? incomeCategories: expenseCategories; 
    console.log(initialState.type)

    const create = () => {
        dispatch(
            {
                type: 'ADD_TRANSACTION', 
                item: { 
                    id: v4(),
                    ...data, amount: Number(data.amount)
                }
            }
        )
        setData(initialState);
    }



    return (
        <div className="cardDetailed">
            <Card className={classes.card}>
                <CardHeader title="Expense Tracker" subheader="Sanjog Supplier" />
                <CardContent>
                    <Typography align="center" variant="h5">Total Balance $50</Typography>
                    <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    
                    </Typography>
                    <Divider/>
                    {/** FOrms */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <Typography align="center" variant="subtitle2" gutterBottom>
                            ....
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={data.type} onChange={e => setData({...data, type: e.target.value})}>
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={data.category} onChange={e => setData({...data, category: e.target.value})}>
                        {selectCategories.map((data) => 
                                <MenuItem key={data.type} value={data.type}>{data.type}</MenuItem>
                            )}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField type="number" label="Amount" fullWidth value={data.amount} onChange={e => setData({ ...data, amount: e.target.value })}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField  type="date" label="Date" hiddenLabel fullWidth value={data.date} onChange={e => setData({ ...data, date: e.target.value })}/>
                    </Grid>
                        <div className="button">
                            <CustomButton onClick={create}>Click</CustomButton>
                        </div>
                    </Grid>     
                </CardContent>
                <CardContent >
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardDetailed
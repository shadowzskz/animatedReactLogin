import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useTransactions from '../../../utils/useTransactions';
import { Doughnut } from 'react-chartjs-2';
import './Card.scss';

import useStyles from './styles';

const Card_item = ({ title }) => {

    const classes = useStyles();
    const { total, chartData } = useTransactions(title);
    console.log(chartData)

    return (
        <div className="card">
            <div className={classes.card}>
            <Card className={title === 'Income' ? classes.income : classes.expense}>
                <CardHeader title={title} />
                <CardContent>
                    <Typography variant="h5">{total}</Typography>
                    <Doughnut data={chartData} />
                </CardContent>
            </Card>
        </div>
        </div>
    );
};

export default Card_item;
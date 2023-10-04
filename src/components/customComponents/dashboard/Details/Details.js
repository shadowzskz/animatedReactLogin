import React from 'react';
import Card_item from '../../../customElements/cardComponent/Card_item'
import CardDetailed from '../../../customElements/cardComponent/CardDetailed'


import './Details.scss';

const Details = () => {
    
    return (
        <div className="details">
            <div className="details__grid">
                <div className="details__gird__inner">
                    <Card_item title="Income"/>
                </div>
                <div className="details__gird__inner">
                    <CardDetailed title="Main" />
                </div>
                <div className="details__gird__inner">
                    <Card_item title="Expense" />
                </div>
            </div>
        </div>
    )
}

export default Details;

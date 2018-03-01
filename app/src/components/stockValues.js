import React, {Component} from 'react';
import _ from 'lodash';
import {Line} from 'react-chartjs-2';
import './stockValue.css';

export default class StockValue extends Component {

    getSortedData(json){
        const dailyData = json["Time Series (Daily)"]
        return _.keys(dailyData)
        .sort()
        .map(day => {
            const data = dailyData[day];
            return{
                open: Number(data["1. open"]),
                high: Number(data["2. high"]),
                low: Number(data["3. low"]),
                close: Number(data["4. close"]),
                volume: Number(data[ "5. volume"]),
                date: day
            }
        });
        
    }
    
    parseStockDataForChart(data){
        return {
            labels: data.map(d=>d.date),
            datasets: [{
                label: "Stock Price",
                data: data.map(d=>d.close),
                fill: false,
                pointRadius: 1,
                pointRadiusHover: 2,
                borderColor: "#fff"
            }]
        }
    }

    lastStockValue(data){
        const last = data[data.length-1].close;
        return last;
    }
    differenceLastDay(data){
        const values = data[data.length-1].close - data[data.length-1].open;
        return values.toFixed(2);
    }
    percentageValues(data, difference){
        const change = (difference * 100) / data[data.length-1].open
        return change.toFixed(2);
    }
    sharesTraderValue(data){
        const total =data.reduce((ag,current)=>ag+current.volume, 0);
        if((total / 1000000000 > 1)){
            console.log("si")
            return{
                value: ((total / (1000000000)).toFixed(2)),
                letter: "B"
            }
        }
        else if((total / 1000000 > 1)){
            return{
                value: ((total / (1000000)).toFixed(2)),
                letter: "M"
            }
        }
        console.log( (total / 1000000).toFixed(2))
    }
    highValueMonth(data){
        const max = data.reduce((ag, current)=> ag > current.high ? ag :current.high)
        return max;
    }
    monthlyChangeValue(data){
        const difference = data[data.length-1].close- data[0].close;
        return difference.toFixed(2);
    }


    chartOptions(){
        return{
            scales: {
                yAxes:[{
                    ticks: {
                        display:false
                    },
                    gridLines: {
                        display:false,
                        drawBorder:false
                    },
                }],
                xAxes:[{
                    ticks: {
                        display:false
                    },
                    gridLines: {
                        display:false,
                        drawBorder:false
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    }


    render(){
        const sortedData = this.getSortedData(this.props.data);
        const data = this.parseStockDataForChart(sortedData);
        const lastValue = this.lastStockValue(sortedData);
        const difference = this.differenceLastDay(sortedData);
        const percentage = this.percentageValues(sortedData, difference);
        const sharesTraded = this.sharesTraderValue(sortedData);
        const highValue = this.highValueMonth(sortedData);
        const monthlyChange = this.monthlyChangeValue(sortedData);
        const changeClass = (monthlyChange > 0) ?
         "stockValue__info__details__box__description" : "stockValue__info__details__box__description--red";

        const positiveIconClass = (monthlyChange>1) ? 
        "stockValue__info__details__box__icon" : "stockValue__info__details__box__icon--hidden";
        const negativeIconClass = (monthlyChange<1) ? 
        "stockValue__info__details__box__icon" : "stockValue__info__details__box__icon--hidden";

        const options = this.chartOptions();
        return(
        <div className="stockValue">
            <div className="stockValue__graph">
                <div className="stockValue__graph__value">
                    <p className="stockValue__graph__value__top">{lastValue}</p>
                    <p className="stockValue__graph__value__bottom">{difference}({percentage}%)</p>
                </div>
                <div className="stockValue__graph__line">
                    <Line data={data} options={options} />
                </div>
            </div>
            <div className="stockValue__info">
                <div className="stockValue__info__wrapper">
                    <p className="stockValue__info__date">fecha</p>
                    <p className="stockValue__info__city">ciudad</p>
                    <div className="stockValue__info__trader">
                        <div className="stockValue__info__trader__box">
                            <p className="stockValue__info__trader__box__value">{sharesTraded.value} {sharesTraded.letter}</p>
                            <p className="stockValue__info__trader__box__description">{this.props.i18n("shares.traded")}</p>
                        </div>
                        <div className="stockValue__info__trader__box">
                            <p className="stockValue__info__trader__box__value">{highValue}</p>
                            <p className="stockValue__info__trader__box__description">{this.props.i18n("high.value")}</p>
                        </div>
                    </div>
                    
                    <div className="stockValue__info__details">
                        <div className="stockValue__info__details__box">
                            <p className="stockValue__info__details__box__value">AMZN</p>
                            <div className={positiveIconClass}><i className="fa fa-arrow-up"></i></div>
                            <div className={negativeIconClass}><i className="fa fa-arrow-down"></i></div>
                        </div>
                        <div className="stockValue__info__details__box">
                            <p className="stockValue__info__details__box__value">{this.props.i18n("monthly.change")}</p>
                            <p className={changeClass}>{monthlyChange}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        )
    }
}


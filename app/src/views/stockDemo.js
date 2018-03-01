import React, {Component} from 'react';
import {Menu, MenuItem} from '../components/menu';
import StockValue from '../components/stockValues';
import axios from 'axios';
import './stockDemo.css';

export default class StockDemo extends Component{
    constructor(props){
        super(props);
        this.state= {
            stockLoaded: false,
            stockData: {}
        }
        this.pullStockData = this.pullStockData.bind(this);
    }
    pullStockData(stockName){
        return ()=>{
            const url = `${StockDemo.BASEURL}/${stockName}.json`;
            axios.get(url)
                .then((res)=>{
                    this.setState({
                        stockData: res.data,
                        stockLoaded: true
                    })
                })
        }
    }
    render(){
        const stockComponent = this.state.stockLoaded ?
            <StockValue data= {this.state.stockData} i18n={this.props.i18n}/> : 
            <div>{this.props.i18n("no.stock.selected")}</div>
        return(
            <div className="stockDemo">
                <Menu>
                    <MenuItem icon="heart" text="Amazon" 
                        action={this.pullStockData("amzn")} />
                    <MenuItem icon="user" text="Ecopetrol" 
                        action={this.pullStockData("ec")} />
                    <MenuItem icon="cog" text="Publicis" 
                        action={this.pullStockData("pub")} />
                </Menu>
                <div>
                    {stockComponent}
                </div>
            </div>
        );
    }
}

StockDemo.BASEURL = "http://localhost:3000/stockPrices";
import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import './storageInfo.css'

export default class StorageInfo extends Component {
    parseStorageDataForChart(data){
        const labels = ["video","audio","images"];
        const remaining = labels.reduce(
            (ag, current)=> ag-data.storageTaken[current], data.availableStorage)
        return {
            labels: labels.concat(["remaining"]),
            datasets: [{
                data: labels.map(label=>data.storageTaken[label]).concat([remaining]),
                backgroundColor:[
                    StorageInfo.videoColor,
                    StorageInfo.audioColor,
                    StorageInfo.imagesColor,
                    StorageInfo.otherColor
                ]
            }]
        }
    }
    chartOptions(){
        return{
            legend: {
                display: false
            }
            
        }
    }

    storageValue(data){
        if((data / 1000000000 > 1)){
            console.log("si")
            return{
                value: ((data / (1000000000))),
                letter: "TB"
            }
        }
        else if((data / 1000000 > 1)){
            return{
                value: ((data / (1000000))),
                letter: "GB"
            }
        }
    }

    createLegend(data){
        const items = ["video","audio","images"];
        return items.map((i)=>({value: data.storageTaken[i],label:i}))
            .map((ob)=>({...ob, value: (ob.value/data.availableStorage)*100}))
            .map(({label, value})=>{
                const listItemClass = `storageInfo__percentage__item storageInfo__percentage__item--${label}`
                return <li className={listItemClass}>
                    <div className="storageInfo__percentage__item__container">
                        <h3 className="storageInfo__percentage__item__text">{this.props.i18n(label)}</h3>
                        <div className="storageInfo__percentage__item__value">{value.toFixed(2)}%</div>
                    </div>
                </li>
            })
    }

    render(){
        const data = this.parseStorageDataForChart(this.props.data);
        const options = this.chartOptions();
        const storage = this.storageValue(this.props.data.availableStorage);
        const legendItems = this.createLegend(this.props.data); 
        return(
            <div className="storageInfo">
                
                <div className="storageInfo__doughnut">
                <h2 className="storageInfo__doughnut__title">{this.props.i18n("storage.info")}</h2>
                    <div className="storageInfo__doughnut__container">  
                        <Doughnut data={data} options={options}/>
                        <p className="storageInfo__doughnut__container__storage">{storage.value} {storage.letter}</p>
                    </div>
                </div>
                <div >
                    <ul className="storageInfo__percentage">{legendItems}</ul>
                </div>
                <div >
                    <ul className="storageInfo__links">
                        <li className="storageInfo__links__container">
                            <i className="storageInfo__links__icon fas fa-upload"></i>
                            <h3 className="storageInfo__links__text">{this.props.i18n("upload.files")}</h3>
                        </li>
                        <li className="storageInfo__links__container">
                            <i className="storageInfo__links__icon fas fa-share-alt"></i>
                            <h3 className="storageInfo__links__text">{this.props.i18n("share.links")}</h3>
                        </li>
                        <li className="storageInfo__links__container">
                            <i className="storageInfo__links__icon fas fa-undo-alt"></i>
                            <h3 className="storageInfo__links__text">{this.props.i18n("backup.files")}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

StorageInfo.audioColor = "#E6C86F";
StorageInfo.videoColor = "#CF573A";
StorageInfo.imagesColor = "#67AC7F";
StorageInfo.otherColor = "#F3EDE8";




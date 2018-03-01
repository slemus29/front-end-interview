import React, {Component} from 'react';
import axios from 'axios';
import './storageDemo.css';
import StorageInfo from '../components/storageInfo';
import {Menu, MenuItem} from '../components/menu';

export default class StorageDemo extends Component{
    constructor(props){
        super(props);
        this.state= {
            driveLoaded: false,
            driveData: {}
        }
        this.pullDriveData = this.pullDriveData.bind(this);
    }
    pullDriveData(driveId){
        return ()=>{
            const url = `${StorageDemo.BASEURL}/drive${driveId}.json`;
            axios.get(url)
                .then((res)=>{
                    this.setState({
                        driveData: res.data,
                        driveLoaded: true
                    })
                })
        }
    }
    render(){
        const storageComponent = this.state.driveLoaded ?
            <StorageInfo data= {this.state.driveData} i18n={this.props.i18n}/> : 
            <div>{this.props.i18n("no.drive.selected")}</div>
        return(
            <div className="storageDemo">
               <Menu className="storageDemo__menu">
                    <MenuItem icon="hdd" text={this.props.i18n("drive.1")}
                        action={this.pullDriveData(1)} />
                    <MenuItem icon="hdd" text={this.props.i18n("drive.2")}
                        action={this.pullDriveData(2)} />
                </Menu>
                {storageComponent}
            </div>
        );
    }
}

StorageDemo.BASEURL = "http://localhost:3000/storageInfo";
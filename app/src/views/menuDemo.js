import React, {Component} from 'react';
import {Menu, MenuItem} from '../components/menu';

export default class MenuDemo extends Component{
    constructor(props){
        super(props);
        this.state= {
            currentPage: "No page selected"
        }
    }
    render(){
        return(
            <div>
                <Menu>
                    <MenuItem icon="map-marker" text="Check in" 
                        action={()=>this.setState({currentPage: "Check In"})} />
                    <MenuItem icon="heart" text="Events" 
                        action={()=>this.setState({currentPage: "Event"})} />
                    <MenuItem icon="user" text="Account" 
                        action={()=>this.setState({currentPage: "Account"})} />
                    <MenuItem icon="cog" text="Settings" 
                        action={()=>this.setState({currentPage: "Settings"})} />
                </Menu>
                <div>
                    {this.state.currentPage}
                </div>
            </div>
        );
    }
}
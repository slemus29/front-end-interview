import React, {Component} from 'react';
import {Menu, MenuItem} from '../components/menu';

export default class MenuDemo extends Component{
    constructor(props){
        super(props);
        this.state= {
            currentPage: props.i18n("no.page.selected")
        }
    }
    render(){
        return(
            <div>
                <Menu>
                    <MenuItem icon="map-marker" text={this.props.i18n("check.in")} 
                        action={()=>this.setState({currentPage: this.props.i18n("check.in")})} />
                    <MenuItem icon="heart" text={this.props.i18n("event")}
                        action={()=>this.setState({currentPage: this.props.i18n("event")})} />
                    <MenuItem icon="user" text={this.props.i18n("account")} 
                        action={()=>this.setState({currentPage: this.props.i18n("account")})} />
                    <MenuItem icon="cog" text={this.props.i18n("settings")} 
                        action={()=>this.setState({currentPage: this.props.i18n("settings")})} />
                </Menu>
                <div>
                    {this.state.currentPage}
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react';
import './langToggle.css';

export default class LangToggle extends Component{
    constructor(props){
        super(props);
        this.state={
            currentVal: 0,
        }
        this.executeCorrespondingFunction = this.executeCorrespondingFunction.bind(this);
    }

    executeCorrespondingFunction(){
        if(this.state.currentVal==0){
            this.props.funVal1();
        }
        else{
            this.props.funVal2();
        }
        this.setState({currentVal: (this.state.currentVal+1)%2});
    }
    render(){
        const label = this.state.currentVal == 0 ? this.props.labelVal1 : this.props.labelVal2;
        return <div className="langToggle" onClick={this.executeCorrespondingFunction}>
            {label}
            <i className="fas fa-language"></i>
        </div>
    }

}
import React, {Component} from 'react';
import './menu.css'

export class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            currentlyActive: -1
        }
    }
    render(){
        const richChildren = this.props.children.map((c, i)=>
            React.cloneElement(c, {
                isActive: i===this.state.currentlyActive,
                action: ()=>{
                    this.setState({currentlyActive: i});
                    c.props.action();
                }
            })
        );
        return(
            <ul className="menu">
                {richChildren}
            </ul>
        )
    }
}


export const MenuItem = ({isActive, icon, text, action}) => {
    const classModifier = isActive ? "menu__item menu__item--active" : "menu__item";
    const iconClass = `menu__item__icon fas fa-${icon}`;
    return(
        <li className={classModifier} onClick= {action}>
            <div className="menu__item__container" >  
                <i className={iconClass}></i>
                <div className="menu__item__text">{text}</div>
            </div>
        </li>
    )
}


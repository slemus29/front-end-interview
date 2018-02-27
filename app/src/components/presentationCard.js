import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './presentationCard.css';

const WidgetMenuItem = ({text, icon, destination}) => {
    const iconClass = `presentationCard__menu__icon fas fa-${icon}`
    return <li className="presentationCard__menu__item">
        <Link to={destination} className="presentationCard__menu__item__container">
                <div className="presentationCard__menu__text">{text}</div>
                <i className={iconClass}></i>
        </Link>
    </li>
}

const PresentationCard = ()=> <div className="presentationCard">
    <div className="presentationCard__header">
        <div className="presentationCard__wrapper">
            <div className="presentationCard__avatar">
                <img src="https://www.gravatar.com/avatar/67f84366d6c8426cd705b1256d95ca6a" className="presentationCard__avatar-img" />
            </div>
            <div className="presentationCard__info">
                <h1 className="presentationCard__info__title">Santiago Lemus</h1>
                <p className="presentationCard__info__text">Software Developer</p>
            </div>
        </div>
    </div>
    <ul className="presentationCard__menu">
        <WidgetMenuItem text="Stock Values" icon="chart-line" destination="/stock"/>
        <WidgetMenuItem text="Storage Information" icon="database" destination="/storage" />
        <WidgetMenuItem text="Navigation Bar" icon="bars" destination="/navigation"/>
        <WidgetMenuItem text="Contact Form" icon="envelope" destination="/contact"/>
    </ul>
</div>


export default PresentationCard;
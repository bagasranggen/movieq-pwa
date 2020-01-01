import React, { Component } from 'react';
import classes from './Header.module.scss';

import MenuBurger from './components/MenuBurger';
import Logo from '../UI/Logo';
import Search from './components/Search';


class Header extends Component {
    state = {
        searhExpanded: false
    }

    seacrhExpandedHandler = () => {
        this.setState({ searhExpanded: true });

        console.log('yay')
    };
    seacrhExpandedHandlerss = () => {
        setTimeout(() => {
            this.setState({ searhExpanded: false })
        }, 300);
        console.log('yayo')
    };


    render() {
        let logo;
        let style;

        if (this.state.searhExpanded) {
            logo = null;
                style = {width: '100%'};
            // setTimeout(() => {
            //     style = {width: '100%'};
            // }, 300)
        } else {
            logo = [<MenuBurger />, <Logo type="logoFront__wrapperCenter" typeLogo="logoNav">MovieQ</Logo>];
            // setTimeout(() => {
            //     style = null;
            // }, 300)
            style = null;
        }

        return (
            <div className={classes.HeaderWrapper}>
                <div className={classes.circleGradient}></div>
                <div className={classes.Header}>
                    {logo}
                    <Search clicked={this.seacrhExpandedHandler}
                        blurred={this.seacrhExpandedHandlerss} style={style}/>
                </div>
            </div>
        );
    }
}

export default Header;
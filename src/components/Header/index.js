import React, { Component } from 'react';
import classes from './Header.module.scss';

import MenuBurger from './components/MenuBurger';
import Logo from '../UI/Logo';
import Search from './components/Search';


class Header extends Component {
    state = {
        searhExpanded: false
    }

    searchExpandedHandler = () => {
        this.setState({ searhExpanded: true });
    };
    searchReturn = () => {
        setTimeout(() => {
            this.setState({ searhExpanded: false })
        }, 300);
    };


    render() {
        let logo;
        let style;

        if (this.state.searhExpanded) {
            logo = null;
            style = { width: '100%' };
        } else {
            logo = [<MenuBurger />, <Logo type="logoFront__wrapperCenter" typeLogo="logoNav">MovieQ</Logo>];
            style = null;
        }

        return (
            <div className={classes.HeaderWrapper}>
                <div className={classes[this.props.type]}></div>
                <div className={classes.Header}>
                    {logo}
                    <Search 
                        onSubmit={this.props.onSubmit}
                        onChange={this.props.onChange}
                        value={this.props.value}
                        clicked={this.searchExpandedHandler}
                        blurred={this.searchReturn}
                        style={style} />
                </div>
            </div>
        );
    }
}

export default Header;
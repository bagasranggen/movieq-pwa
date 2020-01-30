import React, { Component } from "react";
import classes from "./Header.module.scss";

import MenuBurger from "./components/MenuBurger";
import Logo from "../UI/Logo";
import Search from "./components/Search";
import MenuPop from "./components/MenuPop";

class Header extends Component {
  state = {
    searhExpanded: false,
    menuPopExpanded: false
  };

  searchExpandedHandler = () => {
    this.setState({ searhExpanded: true });
  };

  searchReturn = () => {
    setTimeout(() => {
      this.setState({ searhExpanded: false });
    }, 300);
  };

  menuPopCloseHandler = () => {
    this.setState({ menuPopExpanded: false });
  };

  menuPopExpandHandler = () => {
    this.setState({ menuPopExpanded: true });
  };

  render() {
    let logo, style, stylePop;

    if (this.state.searhExpanded) {
      logo = null;
      style = { width: "100%" };
    } else {
      logo = [
        <MenuBurger onClick={this.menuPopExpandHandler} />,
        <Logo type="logoFront__wrapperCenter" typeLogo="logoNav">
          MovieQ
        </Logo>
      ];
      style = null;
    }

    if (this.state.menuPopExpanded) {
      stylePop = { left: "0", opacity: "1" };
    }

    return (
      <div className={classes.HeaderWrapper}>
        <MenuPop
          style={stylePop}
          menuPopClicked={this.menuPopCloseHandler}
          onKeyDown={this.menuPopKeydownHandler}
        />
        <div className={classes[this.props.type]}></div>
        <div className={classes.Header}>
          {logo}
          <Search
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            value={this.props.value}
            clicked={this.searchExpandedHandler}
            blurred={this.searchReturn}
            style={style}
          />
        </div>
      </div>
    );
  }
}

export default Header;

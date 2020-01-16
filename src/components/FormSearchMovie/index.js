import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import Button from '../UI/Button';
import classes from './FormSearchMovie.module.scss';

class FormSearchMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.formSearchHandler = this.formSearchHandler.bind(this);
    }
    changeHandler = (event) => {
        this.setState({search: event.target.value});
    }

    formSearchHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/home?=' + this.state.search);
    }
    
    render() {
        return (
            <div className={classes.FormWrapper}>
            <form className={classes.Form} onSubmit={this.formSearchHandler}>
                <input className={classes.Form__input} 
                type="text" 
                placeholder={this.props.placeholder} 
                value={this.state.search} 
                onChange={this.changeHandler}/>
                <Button type="MainBtnForm">SEARCH</Button>
            </form >
        </div>
        )
    }
}

export default withRouter(FormSearchMovie);
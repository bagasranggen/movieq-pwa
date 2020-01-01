import React from 'react';
import classes from './Front.module.scss';

import Logo from '../../components/UI/Logo';
import FormSearchMovie from '../../components/FormSearchMovie';

const front = () => {
    return (
        <section className={classes.frontWrapper}>
            <div className={classes.front}>
                <Logo type="logoFront__wrapper" typeLogo="logoFront" textBelow="MovieQ" />
                <FormSearchMovie placeholder="Search Movie Title" />
            </div>
        </section>
    );
}

export default front;
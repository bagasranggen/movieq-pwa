import React from 'react';

const section = (props) => {
    return (
        <section className={props.section}>
            <div className="container py-3">
                {props.children}
            </div>
        </section>
    );
}

export default section;
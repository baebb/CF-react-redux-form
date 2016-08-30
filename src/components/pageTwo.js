import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let MarketingFormPageTwo = (props) => {
    // console.log(props);
    return (
        <div>{props.testValue}</div>
    )
}

MarketingFormPageTwo = reduxForm({
    form: 'marketingForm',
    destroyOnUnmount: false
})(MarketingFormPageTwo);

const selector = formValueSelector('marketingForm');
MarketingFormPageTwo = connect(state => ({
        testValue: selector(state, 'test')
    })
)(MarketingFormPageTwo);


export default MarketingFormPageTwo;
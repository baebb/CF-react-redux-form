import React from 'react';
import { Field,reduxForm } from 'redux-form';

//render input element
const renderField = field => (
    <div>
        <label htmlFor={field.name}>{field.label}</label>
        <input className="form-control" {...field.input} type={field.type}/>
        <div className="text-xs-center error-block">
            {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
        </div>
    </div>
);

//validator
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }
    return errors
};

const MarketingFormPageTwo = (props) => {
    const {handleSubmit} = props;
    return (
        <div className="page-two col-md-4 offset-md-4">
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Field name="email" type="text" component={renderField} label="Email"/>
                    </div>
                    <div className="text-xs-center">
                        <button type="submit" className="btn btn-primary btn-fw">Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

//push data to existing form 'marketingForm' and validate it
export default reduxForm({
    form: 'marketingForm',
    destroyOnUnmount: false,
    validate
})(MarketingFormPageTwo);
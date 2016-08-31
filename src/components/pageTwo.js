import React from 'react';
import { Field,reduxForm } from 'redux-form';

//render input element
const renderField = field => (
    <div>
        <label htmlFor={field.name}>{field.label}</label>
        <input className="form-control" {...field.input} type={field.type}/>
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
    </div>
);

//validator
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    }
    return errors
};

const MarketingFormPageTwo = (props) => {
    const {handleSubmit} = props;
    return (
        <div className="col-md-4 offset-md-4">
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

export default reduxForm({
    form: 'marketingForm',
    destroyOnUnmount: false,
    validate
})(MarketingFormPageTwo);
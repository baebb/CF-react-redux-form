import React from 'react';
import {Field, reduxForm} from 'redux-form';

const renderField = field => (
    <div>
        <input {...field.input} type={field.type} placeholder={field.name} />
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
    </div>
)

const validate = values => {
    const errors = {};
    if (!values.test) {
        errors.test = 'Required';
    }
    return errors
}

const MarketingFormPageOne = (props) => {
    const { handleSubmit }  = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="test" type="text" component={renderField} label="First Name"/>
            <div>
                <button type="submit" className="btn btn-primary">Next</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'marketingForm',
    destroyOnUnmount: false,
    validate
})(MarketingFormPageOne);
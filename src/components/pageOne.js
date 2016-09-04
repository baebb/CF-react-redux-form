import React from 'react';
import {Field, reduxForm} from 'redux-form';

//option objects
const optionsList = [
    {name:'Option 1', id:'optionOne'},
    {name:'Option 2', id:'optionTwo'},
    {name:'Option 3', id:'optionThree'}
    ];

//validator
const validate = values => {
    const errors = {};
    if (!values.selectionOption) {
        errors.selectionOption = 'Please make a selection';
    }
    return errors
};

//render error msg on touched + error
const renderError = ({ meta: { touched, error }}) => touched && error ? <span>{error}</span> : null;

class MarketingFormPageOne extends React.Component {
    //custom radio button elements
    radioBtns(option,index) {
        return (
            <div className={`option ${option.id} col-md-4`} key={option.id}>
                <label>
                    <Field name="selectionOption" component="input" type="radio" value={option.id}/>
                    <span>
                        <img src="http://placekitten.com/60/60" className="img-rounded m-x-auto d-block"/>
                        <p>{option.name}</p>
                    </span>
                </label>
            </div>
        )
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="page-one col-md-8 offset-md-2">
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group customRadio row">
                            {optionsList.map((option,index) => this.radioBtns(option,index))}
                        </div>
                        <div className="text-xs-center">
                            <Field name="selectionOption" component={renderError} />
                        </div>
                        <div className="text-xs-center">
                            <button type="submit" className="btn btn-primary btn-fw">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

//put data in 'marketingForm' and don't destroy it if this component is no longer active
export default reduxForm({
    form: 'marketingForm',
    destroyOnUnmount: false,
    validate
})(MarketingFormPageOne);
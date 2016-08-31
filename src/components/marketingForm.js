import React from 'react';
import { connect } from 'react-redux';

import { submitForm } from '../actions/index';

import MarketingFormPageOne from './pageOne';
import MarketingFormPageTwo from './pageTwo';

class MarketingForm extends React.Component {
    constructor(props) {
        super(props);

        //bind methods to parent
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.submitForm = this.submitForm.bind(this);

        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    prevPage() {
        this.setState({ page: this.state.page - 1 });
    }

    submitForm(form) {
        this.props.submitForm(form);
    }

    //button to debug current form values
    // what(e) {
    //     e.preventDefault();
    //
    //     console.log(this.props.form);
    // }

    //render sequence of form pages according to this.state.page
    render() {
        return (
            <div className="content-wrapper row">
                {this.state.page === 1 && <MarketingFormPageOne onSubmit={this.nextPage} />}
                {this.state.page === 2 && <MarketingFormPageTwo onSubmit={this.submitForm} />}
            </div>
        )
    }
}

//getting current form values for debugging
// const mapStateToProps = (state) => {
//    return {form: state.form};
// }

//connect submitForm action to component
export default connect(null, { submitForm })(MarketingForm);
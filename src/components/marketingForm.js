import React from 'react';
import { connect } from 'react-redux';

import MarketingFormPageOne from './pageOne';
import MarketingFormPageTwo from './pageTwo';

class MarketingForm extends React.Component {
    constructor(props) {
        super(props);

        //bind next/prev page methods to parent
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);

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

    what(e) {
        e.preventDefault();

        console.log(this.props.form);
    }

    render() {
        // const { onSubmit } = this.props;
        return (
            <div className="content-wrapper row">
                {this.state.page === 1 && <MarketingFormPageOne onSubmit={this.nextPage} />}
                {this.state.page === 2 && <MarketingFormPageTwo onSubmit={this.nextPage} />}
                <button className="btn btn-warning" onClick={this.what.bind(this)}>What</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
   return {form: state.form};
}


export default connect(mapStateToProps)(MarketingForm);
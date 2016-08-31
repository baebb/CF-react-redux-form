import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import MarketingForm from './components/marketingForm';
import ThankYou from './components/thankyou';

//set up parent app and set indexRoute to marketing form
export default (
    <Route path="/" component={App}>
        <IndexRoute component={MarketingForm} />
        <Route path="thankyou" component={ThankYou} />
    </Route>
);

import {renderComponent, expect} from '../test_helper';
import MarketingForm from '../../src/components/marketingForm';

describe('MarketingForm', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(MarketingForm, { submitForm: null });
    });

    it('shows a marketing form', () => {
        expect(component).to.have.class('content-wrapper');
    });

    it('shows page 1 at the start', () => {
        expect(component.find('.page-one')).to.exist;
    });

});

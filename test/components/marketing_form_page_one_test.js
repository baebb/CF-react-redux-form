import { renderComponent, expect } from '../test_helper';
import MarketingFormPageOne from '../../src/components/pageOne';

describe('MarketingFormPageOne', () => {
    console.log(validate);
    let component;

    beforeEach(() => {
        component = renderComponent(MarketingFormPageOne, null, { form: { marketingForm: { values: null } } });
    });

    it('has 3 options to select', () => {
       expect(component.find('.option input[type=radio]').length).to.equal(3);
    });

    it('has a button', () => {
       expect(component.find('.btn')).to.exist;
    });

    describe('Selecting options', () => {
       beforeEach (() => {
          component.find('.optionTwo input[type=radio]').simulate('change');
       });

        it('checks the radio input', () => {
           expect(component.find('.optionTwo input[type=radio]')).to.be.checked;
        });

        it('changes when new option is selected', () => {
            component.find('.optionThree input[type=radio]').simulate('change');
            expect(component.find('.optionThree input[type=radio]')).to.be.checked;
            expect(component.find('.optionTwo input[type=radio]')).to.not.be.checked;
        });
    });

    describe('Validation', () => {
       it('prevents form submission with no option selected', () => {
           // component.find('form').simulate('submit');
           // console.log(component.find('form'));
           expect(component.find('.error')).to.exist;
       });
    });

});
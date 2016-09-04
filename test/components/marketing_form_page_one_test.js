import { renderComponent, expect } from '../test_helper';
import MarketingFormPageOne from '../../src/components/pageOne';

describe('MarketingFormPageOne', () => {
   let component;

    beforeEach(() => {
        component = renderComponent(MarketingFormPageOne);
    });

    it('has 3 options to select', () => {
       expect(component.find('.option').length).to.equal(3);
    });

    it('has a button', () => {
       expect(component.find('.btn')).to.exist;
    });

    describe('selecting options', () => {
       beforeEach (() => {
          component.find('.optionTwo span').simulate('click');
       });

        it('checks the radio input', () => {
           expect(component.find('.optionTwo input[type=radio]')).to.be.checked;
        });
    });

});
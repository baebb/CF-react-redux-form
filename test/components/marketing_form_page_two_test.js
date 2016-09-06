import { renderComponent, expect } from '../test_helper';
import MarketingFormPageTwo from '../../src/components/pageTwo';

describe('MarketingFormPageTwo', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(MarketingFormPageTwo, { handleSubmit: null });
    });

    it('has an email input', () => {
        expect(component.find('input[name=email]')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button[type=submit]')).to.exist;
    });

    describe('Entering text', () => {
        beforeEach (() => {
            component.find('input[name=email]').simulate('change', 'dog@cat.com');
        });

        it('shows text that is entered', () => {
            expect(component.find('input[name=email]')).to.have.value('dog@cat.com');
        });
    });

    describe('Validation', () => {
        it('displays error if input is left blank', () => {
            component.find('input[name=email]').simulate('blur');
            expect(component.find('.error-block .error')).to.exist;
        });

        it('displays error if email is invalid', () => {
            component.find('input[name=email]').simulate('change', 'cat');
            component.find('input[name=email]').simulate('blur');
            expect(component.find('.error-block .error')).to.exist;
            component.find('input[name=email]').simulate('change', 'dog@cat');
            component.find('input[name=email]').simulate('blur');
            expect(component.find('.error-block .error')).to.exist;
        });

        it('hides error after valid email is entered', () => {
            component.find('input[name=email]').simulate('change', 'dog@cat');
            component.find('input[name=email]').simulate('blur');
            component.find('input[name=email]').simulate('change', 'dog@cat.com');
            expect(component.find('.error-block .error')).to.not.exist;
        });

        it('prevents form progression with no valid email entered', () => {
            const submit = component.find('form').simulate('submit');
            expect(submit).to.be.an.error;
        });

        it('does not prevent form progression when a valid email is entered', () => {
            component.find('input[name=email]').simulate('change', 'dog@cat.com');
            const submit = component.find('form').simulate('submit');
            expect(submit).to.not.be.an.error;
        });
    });

});
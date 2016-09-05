import { renderComponent, expect } from '../test_helper';
import MarketingFormPageTwo from '../../src/components/pageTwo';

describe('MarketingFormPageTwo', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(MarketingFormPageTwo);
    })

    it('has an email input', () => {
        expect(component.find('input[name=email]')).to.exist;
    })

    it('has a button', () => {
        expect(component.find('button[type=submit]')).to.exist;
    })

    describe('entering text', () => {
        beforeEach (() => {
            component.find('input[name=email]').simulate('change', 'dog@cat.com');
        });

        it('shows text that is entered', () => {
            expect(component.find('input[name=email]')).to.have.value('dog@cat.com');
        })
    })



});
import {expect} from '../test_helper';
//types
import {CREATE_POST} from '../../src/actions/index';
//actions
import {submitForm} from '../../src/actions/index';

describe('Actions', () => {
    it('has the correct type', () => {
        const action = submitForm();
        expect(action.type).to.equal(CREATE_POST);
    });

    it('creates a promise request to server', () => {
        const action = submitForm({ iAmAFormObject: null });
        expect(action.payload).to.be.a('promise');
    });

    it('promise returns a response', (done) => {
        const action = submitForm({ iAmAFormObject: null });
        action.payload.then((responseData) => {
            expect(responseData).to.have.property('status');
            done();
        });
    });
});
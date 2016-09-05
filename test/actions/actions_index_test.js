import { expect } from '../test_helper';
//types
import { CREATE_POST } from '../../src/actions/index';
//actions
import { submitForm } from '../../src/actions/index';

describe('actions', () => {
    it('has the correct type', () => {
        const action = submitForm();
        expect(action.type).to.equal( CREATE_POST );
    });

    it('has the correct payload', () => {
        const action = submitForm({ iAmAFormObject: null });
        expect(action.payload).to.equal(Promise.pending());
        console.log(action.payload);
        action.payload.then((responseData) => {
            // console.log(responseData);
        })
    });

});
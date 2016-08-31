import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//set up redux-form to handle state.form
const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;

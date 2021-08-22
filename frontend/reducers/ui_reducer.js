import { combineReducers } from 'redux';

import modal from './modal_reducer';
import playbarReducer from './playbar_reducer';
export default combineReducers({
    modal: modal,
    playbar: playbarReducer

});
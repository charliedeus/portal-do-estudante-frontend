import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import solicitation from './solicitation/reducer';

export default combineReducers({
  auth,
  user,
  solicitation,
});

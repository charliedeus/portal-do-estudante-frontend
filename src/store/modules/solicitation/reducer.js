import produce from 'immer';

const INITIAL_STATE = {
  solicitation: null,
  loading: false,
};

export default function solicitation(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@solicitation/SOLICITATION_REQUEST': {
        draft.loading = true;
        draft.solicitation = action.payload;
        break;
      }
      default:
    }
  });
}

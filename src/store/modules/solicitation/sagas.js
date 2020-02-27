import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { solicitationRequest, solicitationFailure } from './actions';

export function* solicitationCreate({ payload }) {
  try {
    const { approved, documents } = payload;

    // const solicitation = {
    //   approved,
    //   documents,
    // };

    // yield call(api.post, '/solicitations', {
    //   approved,
    //   documents,
    // });

    // console.tron.log(solicitation);

    yield put(solicitationRequest(approved, documents));

    toast.success('Sua solicitação foi enviada!');

    history.push('/');
  } catch (error) {
    toast.error('Falha ao registrar a solicitação, verifique seus dados');
    yield put(solicitationFailure());
  }
}

export default all([
  takeLatest('@solicitation/SOLICITATION_REQUEST', solicitationRequest),
]);

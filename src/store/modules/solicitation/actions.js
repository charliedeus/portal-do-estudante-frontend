export function solicitationRequest({ approved, documents }) {
  return {
    type: '@solicitation/SOLICITATION_REQUEST',
    payload: { approved, documents },
  };
}

export function solicitationFailure() {
  return {
    type: '@solicitation/SOLICITATION_FAILURE',
  };
}

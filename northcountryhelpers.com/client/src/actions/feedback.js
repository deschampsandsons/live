import axios from 'axios';
import { setAlert } from './alert';

import { FEEDBACK_ERROR } from './types';

export const sendFeedback = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    await axios.post('/api/feedback', formData, config);

    dispatch(setAlert('Thank you for your feedback!', 'success'));
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

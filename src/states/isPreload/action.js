import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

export const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

export const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

export const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const user = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(user));
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    // Dispatch(setAuthUserActionCreator(null));
    dispatch(setAuthUserActionCreator(null));
  } finally {
    // Dispatch(setAuthUserActionCreator(false));
    dispatch(setIsPreloadActionCreator(false));
  }

  dispatch(hideLoading());
};

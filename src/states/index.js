import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authUser/reducer';
import { threadsReducer } from './threads/reducer';
import { isPreloadReducer } from './isPreload/reducer';
import { usersReducer } from './user/reducer';
import { threadDetailReducer } from './threadDetail/reducer';
import { leaderboardReducer } from './leaderboard/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
const store = configureStore({
  reducer: {
    authUser: authReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    users: usersReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;

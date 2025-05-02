import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncPopulateUsersandThread } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveUsersActionCreator } from '../user/action';
import { receiveThreadActionCreator } from '../threads/action';

// action skenario => unit test thunkFunction
// - mengembalikan data thread dan user jika berhasil
// - mengembalikan alert jika gagal
const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];
const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];
const fakeErrorResponse = new Error('Ups, something went wrong');
describe('asyncPopulateUsersandThread thunk', () => {
  beforeEach(() => {
    globalThis.alert = vi.fn();
    globalThis.localStorage = {
      getItem: vi.fn(() => 'fake-access-token'),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    };
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });
  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api._getAllUsers;
    delete api._getAllThreads;
    delete globalThis.alert;
  });
  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () =>Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    const dispatch = vi.fn();
    await asyncPopulateUsersandThread()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();

    await asyncPopulateUsersandThread()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(globalThis.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

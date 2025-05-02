import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncSetAuthUser } from './action';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from './action';

const fakeUserAuth = {
  email: 'emailFake',
  password: 'passwordFake'
};

const fakeTokenResponse = 'fake-access-token';

const fakeProfileResponse = {
  'id': 'john_doe',
  'name': 'John Doe',
  'email': 'john@example.com',
  'avatar': 'https://generated-image-url.jpg'
};

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    globalThis.alert = vi.fn();
    api._getOwnProfile = api.getOwnProfile;
    api._login = api.login;
    api._putAccessToken = api.putAccessToken;

    api.putAccessToken = vi.fn();
  });
  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    api.login = api._login;
    api.putAccessToken = api._putAccessToken;

    delete api._getOwnProfile;
    delete api._login;
    delete api._putAccessToken;
    delete globalThis.alert;
  });
  it('should login return get token', async () => {
    api.login = () => Promise.resolve(fakeTokenResponse);
    api.getOwnProfile = () => Promise.resolve(fakeProfileResponse);

    const dispatch = vi.fn();

    await asyncSetAuthUser(fakeUserAuth)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.putAccessToken).toHaveBeenCalledWith(fakeTokenResponse);
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeProfileResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

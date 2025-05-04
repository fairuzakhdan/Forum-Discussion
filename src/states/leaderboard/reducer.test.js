import { describe, it, expect } from 'vitest';
import { leaderboardReducer } from './reducer';

describe('leaderboard reducer', () => {
  it('should return ', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARD',
      payload: {
        leaderboards: [
          {
            'user': {
              'id': 'users-1',
              'name': 'John Doe',
              'email': 'john@example.com',
              'avatar': 'https://generated-image-url.jpg'
            },
            'score': 10
          },
          {
            'user': {
              'id': 'users-2',
              'name': 'Jane Doe',
              'email': 'jane@example.com',
              'avatar': 'https://generated-image-url.jpg'
            },
            'score': 5
          }
        ]
      }

    };
    const nextState = leaderboardReducer(initialState, action);
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
import { describe, expect, it } from 'vitest';
import { threadsReducer } from './reducer';

// talk reducer skenario
// - mengembalikan state kosong jika action unknown
// - mengembalikan state data threads jika actionnya RECEIVE_THREADS

describe('threads reducer', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
  it('should return the talks when given by RECEIVE_TALKS action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
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
          {
            'id': 'thread-2',
            'title': 'Thread Kedua',
            'body': 'Ini adalah thread kedua',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-2',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          }

        ],
      },
    };
    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(action.payload.threads);
  });
});

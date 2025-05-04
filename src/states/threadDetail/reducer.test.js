import { expect, it, describe } from 'vitest';
import { threadDetailReducer } from './reducer';

describe('thread detail reducer', () => {
  it('should return receive initial state by RECEIVE_THREAD_DETAIL action', () => {
    const initialState = {
    };
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          'id': 'thread-1',
          'title': 'Thread Pertama',
          'body': 'Ini adalah thread pertama',
          'category': 'General',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'owner': {
            'id': 'users-1',
            'name': 'John Doe',
            'avatar': 'https://generated-image-url.jpg'
          },
          'upVotesBy': [],
          'downVotesBy': [],
          'comments': [
            {
              'id': 'comment-1',
              'content': 'Ini adalah komentar pertama',
              'createdAt': '2021-06-21T07:00:00.000Z',
              'owner': {
                'id': 'users-1',
                'name': 'John Doe',
                'avatar': 'https://generated-image-url.jpg'
              },
              'upVotesBy': [],
              'downVotesBy': []
            }
          ]
        }
      }
    };
    const nextState = threadDetailReducer(initialState, action);
    expect(nextState).toEqual(action.payload.threadDetail);
  });
  it('should return add comment in state threadDetail by ADDCOMENT_THREAD_DETAIL action', () => {
    const initialState = {
      'id': 'thread-1',
      'title': 'Thread Pertama',
      'body': 'Ini adalah thread pertama',
      'category': 'General',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'owner': {
        'id': 'users-1',
        'name': 'John Doe',
        'avatar': 'https://generated-image-url.jpg'
      },
      'upVotesBy': [],
      'downVotesBy': [],
      'comments': [
        {
          'id': 'comment-1',
          'content': 'Ini adalah komentar pertama',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'owner': {
            'id': 'users-1',
            'name': 'John Doe',
            'avatar': 'https://generated-image-url.jpg'
          },
          'upVotesBy': [],
          'downVotesBy': []
        }
      ]
    };
    const action = {
      type: 'ADDCOMENT_THREAD_DETAIL',
      payload: {
        comment: {
          'id': 'comment-2',
          'content': 'Ini adalah komentar kedua',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'upVotesBy': [],
          'downVotesBy': [],
          'owner': {
            'id': 'users-2',
            'name': 'John Doe',
            'email': 'john@example.com'
          }
        }
      }
    };
    const nextState = threadDetailReducer(initialState, action);
    const expectComment = {
      ...initialState,
      comments: [
        ...initialState.comments,
        action.payload.comment
      ]
    };
    expect(nextState).toEqual(expectComment);
  });
});
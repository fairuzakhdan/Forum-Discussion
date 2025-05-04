import { render, screen } from '@testing-library/react';
import Card from './CardThreads';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('should render card content', () => {
  it('should render Card with Header and Body', () => {
    const thread = {
      id: '1',
      title: 'title-test',
      category: 'category-test',
      body: 'body-test',
    };

    render(
      <MemoryRouter>
        <Card key={thread.id}>
          <Card.Header {...thread} />
          <Card.Body {...thread} />
        </Card>
      </MemoryRouter>
    );

    const category = screen.getByTestId('card-category');
    const title = screen.getByTestId('card-title');
    const body = screen.getByTestId('card-body');

    expect(category).toHaveTextContent('category-test');
    expect(title).toHaveTextContent('title-test');
    expect(body).toHaveTextContent('body-test');
  });
});

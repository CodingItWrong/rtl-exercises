import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieList from './MovieList';
import api from './api';

jest.mock('./api');

describe('MovieList', () => {
  it('loads movies upon first render', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, title: 'Movie 1'},
        {id: 2, title: 'Movie 2'},
      ],
    });

    render(<MovieList />);

    expect(api.get).toHaveBeenCalledWith('/movies');

    expect(await screen.findByText('Movie 1')).toBeVisible();
    expect(screen.getByText('Movie 2')).toBeVisible();
  });

  describe('bonus deep-integration test', () => {
    it('can add a movie to the list', async () => {
      const user = userEvent.setup();
      const newMovieTitle = 'New Movie';

      api.get.mockResolvedValue({data: []});
      api.post.mockResolvedValue({
        data: {id: 27, title: newMovieTitle},
      });

      render(<MovieList />);

      await user.type(
        screen.getByPlaceholderText('New movie title'),
        newMovieTitle,
      );
      await user.click(screen.getByText('Save'));

      expect(api.post).toHaveBeenCalledWith('/movies', {title: newMovieTitle});

      await screen.findByText(newMovieTitle);
    });
  });
});

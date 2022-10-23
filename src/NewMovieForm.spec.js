import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMovieForm from './NewMovieForm';

describe('NewMovieForm', () => {
  describe('pressing send', () => {
    const movieTitle = 'Space Movie';

    let user;
    let createHandler;

    beforeEach(() => {
      user = userEvent.setup();
    });

    async function renderAndSave() {
      createHandler = jest.fn().mockName('createHandler');
      render(<NewMovieForm onCreate={createHandler} />);

      await user.type(screen.getByLabelText('New movie title'), movieTitle);
      await user.click(screen.getByRole('button', {name: 'Save'}));
    }

    it('clears the title field', async () => {
      await renderAndSave();
      expect(screen.getByLabelText('New movie title')).toHaveValue('');
    });

    it('calls the create handler', async () => {
      await renderAndSave();
      expect(createHandler).toHaveBeenCalledWith(movieTitle);
    });
  });
});

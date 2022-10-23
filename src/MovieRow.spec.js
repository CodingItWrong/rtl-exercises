import {render, screen} from '@testing-library/react';
import MovieRow from './MovieRow';

describe('MovieRow', () => {
  it('displays the name', () => {
    const movie = {title: 'Spider-Man: No Way Home'};
    render(<MovieRow movie={movie} />);

    expect(screen.getByText(movie.title)).toBeVisible();
  });

  it('renders a new icon when the movie was added today', () => {
    const movie = {addedToday: true};
    render(<MovieRow movie={movie} />);

    expect(screen.getByTitle('Added Today')).toBeVisible();
  });

  it('does not render a new icon when the movie was not added today', () => {
    const movie = {addedToday: false};
    render(<MovieRow movie={movie} />);

    expect(screen.queryByTitle('Added Today')).not.toBeInTheDocument();
  });
});

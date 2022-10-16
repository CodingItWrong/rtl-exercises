import {useEffect, useState} from 'react';
import MovieRow from './MovieRow';
import NewMovieForm from './NewMovieForm';
import api from './api';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies').then(response => {
      setMovies(response.data);
    });
  }, []);

  function handleCreate(title) {
    api.post('/movies', {title}).then(response => {
      setMovies([...movies, response.data]);
    });
  }

  return (
    <div>
      <NewMovieForm onCreate={handleCreate} />
      <ul>
        {movies.map(movie => (
          <MovieRow key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

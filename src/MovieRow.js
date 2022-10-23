import {ReactComponent as New} from './assets/new.svg';

export default function MovieRow({movie}) {
  return (
    <li>
      <span>{movie.title}</span>
      {movie.addedToday && (
        <New fill="orange" width="30" height="30" title="Added Today" />
      )}
    </li>
  );
}

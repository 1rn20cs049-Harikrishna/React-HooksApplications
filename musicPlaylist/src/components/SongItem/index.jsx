import './index.css'
import {MdDelete} from 'react-icons/md'

const SongItem = ({song, onDelete}) => {
  const {id, imageUrl, name, genre, duration} = song

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li className="song-item-container">
      <div className="start-container">
        <img height="100px" width="120px" src={imageUrl} alt="track" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="start-container">
        <p>{duration}</p>
        <button
          type="submit"
          onClick={handleDelete}
          aria-label="Delete"
          data-testid="delete"
          className="delete-btn"
        >
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem

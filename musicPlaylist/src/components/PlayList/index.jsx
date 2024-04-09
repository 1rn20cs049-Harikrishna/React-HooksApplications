import './index.css'
import {useState, useEffect} from 'react'
import SongItem from '../SongItem'

const PlayList = ({initialTracksList}) => {
  const [searchField, setSearchField] = useState('')
  const [filterData, setFilterData] = useState(initialTracksList)

  useEffect(() => {
    const filteredTracks = initialTracksList.filter(item =>
      item.name?.toLowerCase().includes(searchField.toLowerCase()),
    )
    // Update state with filtered array
    setFilterData(filteredTracks)
  }, [initialTracksList, searchField])

  const handleDelete = id => {
    const updatedTracks = filterData.filter(track => track.id !== id)
    setFilterData(updatedTracks)
  }

  return (
    <div className="playlist-page">
      <div className="playlist-page-header">
        <h1>Ed Sheeran</h1>
        <p>Singer</p>
      </div>
      <div className="playlist-container">
        <div>
          <h1>Songs Playlist</h1>
          <input
            type="search"
            className="input-box"
            value={searchField}
            onChange={e => setSearchField(e.target.value)}
            placeholder="Search"
          />
        </div>

        <ul className="playlist-songs-container">
          {filterData.length >= 1 ? (
            filterData.map(song => (
              <SongItem key={song.name} song={song} onDelete={handleDelete} />
            ))
          ) : (
            <div className="songs-not-found">
              <p>No Songs Found</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PlayList

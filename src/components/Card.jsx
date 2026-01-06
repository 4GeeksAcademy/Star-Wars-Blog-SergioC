import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Card = ({ item, imageType }) => {

  const successImg = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${imageType}/${item.uid}.jpg?raw=true`
  const errorImg = 'https://cdn.dribbble.com/userupload/18895954/file/original-0fe06021838e39d4251955733c52ebab.png?resize=400x0'

  const [loadError, setLoadError] = useState(false)
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate()

  const handleDetails = (element) => {
    dispatch({
      type: `${imageType}_details`,
      payload: element
    })
    navigate(`/${imageType}-details`)
  }

  const toggleFavorite = (favorite) => {
    if (store.favorites.includes(favorite)) {
      dispatch({ type: 'remove_favorite', payload: favorite })
    } else {
      dispatch({ type: 'add_favorite', payload: favorite })
    }
  }

  const isFavorite = store.favorites.includes(item.name)

  return (
    <div className='col' key={item.uid}>
      <div className='card border-dark rounded my-3 mx-2 text-bg-dark card-shadow'>
        <img atl='' onError={() => setLoadError(true)} src={loadError ? errorImg : successImg}
        style={{ width: '100%', height: '200px', objectFit: 'contain'}}/>
        <div className='card-body'>
          <h5 className='card-title text-warning text-truncate'>{item.name}</h5>
          <div className='d-flex justify-content-between'>
            <span className='btn btn-secondary btn-details' onClick={() => handleDetails(item)}>Details</span>
            <button onClick={() => toggleFavorite(item.name)} className='btn btn-outline-warning'>
              <i className={`${isFavorite ? 'fas' : 'far'} far fa-heart fa-lg`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
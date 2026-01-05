import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Card = ({item, imageType}) => {

  const successImg = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${imageType}/${item.uid}.jpg?raw=true`
  const errorImg = 'https://cdn.dribbble.com/userupload/18895954/file/original-0fe06021838e39d4251955733c52ebab.png?resize=400x0'

  const [loadError, setLoadError] = useState(false)
  const {dispatch} = useGlobalReducer()
  const navigate = useNavigate()

  const handleDetails = (element) => {
    dispatch({
      type: `${imageType}_details`,
      payload: element
    })
    navigate(`/${imageType}-details`)
  }

  const addFavorite = (newFavorite) => {
    dispatch({type: 'add_favorite', payload: newFavorite})
  }

  return (
    <div className='col' key={item.uid}>
      <div className='card border-dark rounded my-3 mx-2 text-bg-dark card-shadow'>
        <img atl='' onError={() => setLoadError(true)} src={loadError ? errorImg : successImg} />
        <div className='card-body'>
          <h5 className='card-title text-warning'>{item.name}</h5>
          <div className='d-flex justify-content-between'>
            <span className='btn btn-secondary btn-details' onClick={() => handleDetails(item)}>Details</span>
            <button onClick={()=> addFavorite(item.name)} className='btn btn-outline-warning' to='#'>
              {/* Buscar la forma de que sea un corazon u otro con ternarios */}
              <i className='far fa-heart fa-lg'></i> 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
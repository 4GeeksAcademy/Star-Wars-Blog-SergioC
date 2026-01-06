import { Link } from "react-router-dom";
import inicioStarWars from '../assets/img/inicioStarWars.jpg';
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer()

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-black" style={{ fontFamily: 'Orbitron, sans-serif' }} >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img alt='' src={inicioStarWars} height={45} className='me-2' />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starships">Starships</Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to='/planets'>Planets</Link>
            </li>
            
            <li className="nav-item dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className='badge bg-dark text-warning ml-1'>{store.favorites.length}</span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                {store.favorites.length === 0 && (
                  <li>
                    <span className='dropdown-item text-muted'>
                      Not favorites yet
                    </span>
                  </li>
                )}

                {store.favorites.map((favorite, index) => {
                  return (
                    <li key={index} className='dropdown-item d-flex justify-content-between align-items-center'>

                      <span>{favorite}</span>

                      <button className='btn btn-sm text-danger ms-2' onClick={(e) => {
                        e.stopPropagation();
                        dispatch({
                          type: 'remove_favorite',
                          payload: favorite
                        })
                      }}
                      >
                        <i className='fa-solid fa-trash'></i>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
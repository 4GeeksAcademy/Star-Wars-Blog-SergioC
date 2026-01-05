import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Swal from "sweetalert2";


export const Characters = () => {
  const swapiHost = 'https://www.swapi.tech/api'
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();
  const [characters, setCharacters] = useState([])

  // Función para guardar el pesonaje y navegar por el detalle
  const handleDetails = (personaje) => {
    dispatch({
      type: 'character_details',
      payload: personaje
    })
    navigate('/character-details')
  }

  // Función para traer personaes de la API
  const getCharacters = async () => {
    const personajes = JSON.parse(localStorage.getItem('characters'))
    if (!personajes) {
      const uri = `${swapiHost}/people`
      const response = await fetch(uri)
      if (!response.ok) {
        console.log('Error:', response.status, response.statusText)
        return
      }
      const data = await response.json()
      localStorage.setItem('characters', JSON.stringify(data.results))
      personajes = data.results
    }
    setCharacters(personajes)
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    Swal.fire({
      title: "Conoce a nuestros personajes 🧑‍🎤 🧑‍🚀",
      text: "Explora el universo de Star Wars",
      icon: "success",
      confirmButtonText: "¡Vamos!",
      background: "rgba(0, 0, 0, 0.35)",
      color: "#fff",
      confirmButtonColor: "#f5c518",
      customClass: {
        title: "swal2-title",
        content: "swal2-content",
        confirmButton: "swal2-confirm"
      }
    });
  }, []);

  return (
    <div className='characters-wrapper'>
      <div className='characters-content container'>
        <h1 className='text-center text-warning characters-title'>Characters</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
          {characters.map((item) =>
            <div className='col' key={item.uid}>
              <div className='card border-dark rounded my-3 mx-2 text-bg-dark card-shadow'>
                <img atl='' src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${item.uid}.jpg?raw=true`} />
                <div className='card-body'>
                  <h5 className='card-title text-warning'>{item.name}</h5>
                  <div className='d-flex justify-content-between'>
                    <span className='btn btn-secondary btn-details' onClick={() => handleDetails(item)}>Details</span>
                    <Link className='btn btn-outline-warning' to='#'>
                      <i className='far fa-heart fa-lg'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
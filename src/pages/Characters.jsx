import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { Card } from "../components/Card.jsx";

export const Characters = () => {
  const swapiHost = 'https://www.swapi.tech/api'
  const [characters, setCharacters] = useState([]);

   const getCharacters = async () => {
    const personajes = JSON.parse(localStorage.getItem('characters'))
    if (!personajes) {
      const uri = `${swapiHost}/people`
      const response = await fetch(uri)
      if (!response.ok) {
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
      title: "Meet our Characters 🧑‍🎤 🧑‍🚀",
      text: "Explore the Star Wars universe",
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
            <Card key={item.uid} imageType='characters' item={item} />
          )}
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { Card } from "../components/Card.jsx";

export const Starships = () => {
  const swapiHost = 'https://www.swapi.tech/api'
  const [starships, setStarShips] = useState([]);

  let getStarShips = async () => {
    const naves = JSON.parse(localStorage.getItem('starships'))
    if (!naves) {
      const uri = `${swapiHost}/starships`;
      const response = await fetch(uri)
      if (!response.ok) return;

      const data = await response.json()
      localStorage.setItem('starships', JSON.stringify(data.results))
      naves = data.results
    }
    setStarShips(naves)
  };

  useEffect(() => {
    getStarShips();
  }, []);

  useEffect(() => {
    Swal.fire({
      title: "Meet the Legendary Starships 🚀✨",
      text: "Explore the Star Wars starships",
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
    <div className='section-wrapper bg-planets'>
      <div className="section-content container">
        <h1 className='text-center text-warning universal-title'>Starships</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
          {starships.map((item) =>
            <Card key={item.uid} imageType='starships' item={item} />
          )}
        </div>
      </div>
    </div>
  );
}
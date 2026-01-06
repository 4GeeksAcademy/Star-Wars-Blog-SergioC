import { DetailCard } from "../components/DetailCard";
import Swal from "sweetalert2";
import fondoStarships from '../assets/img/logoStarships.jpg'
import { useEffect } from "react";

export const StarshipsDetails = () => {

  useEffect(() => {
    Swal.fire({
      text: "Choose your starship wisely 🚀",
      background: "rgba(0,0,0,0.7)",
      color: "#fff",
      showConfirmButton: false,
      timer: 1500
    });
  }, []);

  return (
    <div className='planet-details-wrapper'
      style={{
        backgroundImage: `url(${fondoStarships})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '50px'
      }}
    >
      <DetailCard type="starship" />
    </div>
  )
}
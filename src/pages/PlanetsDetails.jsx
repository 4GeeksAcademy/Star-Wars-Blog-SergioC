import { DetailCard } from "../components/DetailCard";
import Swal from "sweetalert2";
import fondoPlanets from '../assets/img/logoPlanets.jpg'
import { useEffect } from "react";

export const PlanetsDetails = () => {

  useEffect(() => {
    Swal.fire({
      text: "Every planet has a story",
      background: "rgba(0,0,0,0.7)",
      color: "#fff",
      showConfirmButton: false,
      timer: 1500
    });
  }, []);

  return (
    <div className='planets-details-wrapper'
      style={{
        backgroundImage: `url(${fondoPlanets})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center,',
        minHeight: '100vh',
        paddingTop: '50px'
      }}
    >
      <DetailCard type="planet" />
    </div>
  )
}
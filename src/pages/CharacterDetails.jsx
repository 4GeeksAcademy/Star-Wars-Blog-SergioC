import { DetailCard } from "../components/DetailCard";
import Swal from "sweetalert2";
import fondoCharacters from '../assets/img/logoCharacters.jpg'
import { useEffect } from "react";

export const CharacterDetails = () => {

  useEffect(() => {
    Swal.fire({
      text: "May the Force be with you",
      background: "rgba(0,0,0,0.7)",
      color: "#fff",
      showConfirmButton: false,
      timer: 1500
    });
  }, []);


  return (
    <div className='character-details-wrapper'
      style={{
        backgroundImage: `url(${fondoCharacters})`,
        bacgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '50px'
      }}
    >
      <DetailCard type="character" />
    </div>
  )
}
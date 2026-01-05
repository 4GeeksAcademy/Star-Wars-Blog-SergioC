import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import fondoStarWars from "../assets/img/logoStarWars.jpg";
import Swal from "sweetalert2";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    Swal.fire({
      title: "Bienvenido al blog de Star Wars. ✨",
      text: "Que la fuerza te acompañe",
      icon: "success",
      confirmButtonText: "Entrar",
      background: "rgba(0, 0, 0, 0.35)",
      color: "#fff",
      confirmButtonColor: "#f5c518",   
    })
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
      <img
        src={fondoStarWars}
        alt="Star Wars"
        className="img-fluid"
        style={{
          maxHeight: "80vh",
          marginTop: '-180px'
        }}
      />
    </div>
  );
};
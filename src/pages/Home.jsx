import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import fondoStarWars from "../assets/img/logoStarWars.jpg";
import Swal from "sweetalert2";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    Swal.fire({
      title: "Welcome to the Star Wars blog. ✨",
      text: "May the force be with you",
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
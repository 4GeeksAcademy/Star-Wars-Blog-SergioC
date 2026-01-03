import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();



  return (
    <div className='text-center mt-5'>
      <h1 className='display-4'>Star Wars</h1>
    </div>
  );
}; 
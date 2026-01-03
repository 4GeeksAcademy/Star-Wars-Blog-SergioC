import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

export const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Home */}
        <Route path= "/" element={<Home />} />

        {/* Details*/}
        <Route path='details/:type/:id' element={ <Single />} />  
        
      </Route>
    )
);
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Characters } from "./pages/Characters.jsx";
import { Starships } from "./pages/Starships.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Contacts } from "./pages/Contacts.jsx";
import { CharacterDetails } from "./pages/CharacterDetails.jsx";
import { StarshipsDetails } from "./pages/StarshipsDetails.jsx";
import { PlanetsDetails } from "./pages/PlanetsDetails.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Home */}
        <Route path= "/" element={<Home />} />

        <Route path='details/:type/:id' element={ <Single />} />  
        <Route path='/characters' element={< Characters />} />
        <Route path='/starships' element={< Starships />} />
        <Route path='/planets' element={< Planets />} />
        <Route path='/contacts' element={< Contacts />} />
        <Route path='/character-details' element={< CharacterDetails />} />
        <Route path='/starships-details' element={< StarshipsDetails />} />
        <Route path='/planets-details' element={< PlanetsDetails />} />
        
      </Route>
    )
);
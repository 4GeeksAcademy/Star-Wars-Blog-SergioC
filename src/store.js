export const initialStore=()=>{
  return{
    message: null,
    currentCharacter:{},
    currentStarship:{},
    currentPlanet:{},
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'characters_details':
      return {...store, currentCharacter: action.payload};

    case 'starships_details':
      return {...store, currentStarship: action.payload};  

    case 'planets_details': 
      return {...store, currentPlanet: action.payload};

    case 'add_favorite':
      if (store.favorites.includes(action.payload)) {
        return store;
      }
      return {...store, favorites : [...store.favorites, action.payload] };  

    case 'remove_favorite':
      return {...store, favorites : store.favorites.filter(
        item => item !== action.payload
      )}

    default: 
      throw Error('Unknown action.');
  }    
}

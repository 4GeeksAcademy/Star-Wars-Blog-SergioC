import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className='container mt-4'>

			{/* Character */}
			<h2 className='text-danger mb-3'>Characters</h2>
			<div className='d-flex overflow-auto mb-5'>
				<p className='text-muted'>Aquí irán los personajes</p>
			</div>

			{/* Planets */}
			<h2 className='text-danger mb-3'>Planets</h2>
			<div className='d-flex overflow-auto mb-5'>
				<p className='text-muted'>Aquí irán los planetas</p>
			</div>

			{/* Vehicles */}
			<h2 className='text-danger mb-3'>Vehicles</h2>
			<div className='d-flex overflow-auto mb-5'>
				<p className='text-muted'>Aquí irán los vehículos</p>
			</div>
			
		</div>
	);
}; 
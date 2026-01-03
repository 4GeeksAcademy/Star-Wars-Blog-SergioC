import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className='navbar navbar-dark bg-dark'>
			<div className='container'>

				{/* Logo / Title */}
				<Link to='/' className='navbar-brand'>
					Star Wars Blog
				</Link>

				{/* Favorites (placeholder)*/}
				<div className='dropdown'>
					<button
						className='btn btn-warning dropdown'>
							
						Favorites

					</button>
				</div>

			</div>

		</nav>
	);
};
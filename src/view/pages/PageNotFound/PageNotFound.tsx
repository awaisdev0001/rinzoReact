import { NavLink } from 'react-router-dom';

import './PageNotFound.scss';
import NotFoundSVG from "src/assets/images/errors/notFound";

export const PageNotFound = () => {
	return (
		<div className="not-found">
			<div className="not-found__image">
				<NotFoundSVG />
			</div>
			<div className="not-found__text">
				<h1 className="not-found__text_title">404</h1>
				<h2 className="not-found__text_subtitle">Oops, Page not found</h2>
				<p className="not-found__text_addition">
					The page you are looking for does not exist; it may have been moved, or removed
					altogether.
				</p>
				<NavLink to={'/'} className="not-found__text_go-home">
					Go to Home Page
				</NavLink>
			</div>
		</div>
	);
};

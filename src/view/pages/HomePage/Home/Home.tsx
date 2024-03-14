import { Banner } from '../components';
import { Outlet } from 'react-router-dom';

export const Home = () => {
	return (
		<>
			<Banner />
			<Outlet />
		</>
	);
};


import { Container } from '@mui/material';
import { ProfileGraph } from './ProfileGraph';
import { WalletHistoryTable } from './WalletHistoryTable';
import { StatsSummary } from './StatsSummary';
import './WalletStatistics.scss';

export const WalletStatistics = () => {
	return (
		<Container maxWidth="xl" sx={{ padding: 0 }}>
			<div className="profile-stats">
				<div className="profile-stats__info">
					<StatsSummary />
				</div>
				<div className="container">
					<div className="profile-stats__history">
						<ProfileGraph />
					</div>
				</div>
				<div className="container container-tablet-padding-empty">
					<WalletHistoryTable />
				</div>
			</div>
		</Container>
	);
};

import { FC, ReactNode, useState } from 'react';
import { Modal, Box, Typography, Tabs, Tab, tabScrollButtonClasses } from '@mui/material';
import './ToSAndPPModal.scss';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

interface IProps {
	open: boolean;
	handleClose: () => any | void;
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export const ToSAndPPModal: FC<IProps> = ({ open, handleClose }) => {
	const [tab, setTab] = useState(0);

	const handleChangeTab = (tabValue: number) => {
		setTab(tabValue);
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: 800,
				bgcolor: 'var(--base-background--08)',
				color: 'var(--text-primary)',
				boxShadow: 24,
				borderRadius: '16px',
				p: 4,
			}} className="tos-pp-modal-container">
				<Box>
					<div className="tabs">
						<div className={`tab ${tab === 0 ? 'tab--active' : ''}`} onClick={() => handleChangeTab(0)}>Terms of Service</div>
						<div className={`tab ${tab === 1 ? 'tab--active' : ''}`} onClick={() => handleChangeTab(1)}>Privacy Policy</div>
					</div>
				</Box>
				<TabPanel value={tab} index={0}>
					<Typography id="modal-modal-title" variant="h4" component="h2">
						Terms of Service
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</TabPanel>
				<TabPanel value={tab} index={1}>
					<Typography id="modal-modal-title" variant="h4" component="h2">
						Privacy Policy
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</TabPanel>
			</Box>
		</Modal>
	);
};

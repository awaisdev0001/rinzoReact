import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box, Button } from '@mui/material';

import { useAppSelector } from 'src/hooks';

import './ConfirmModal.scss';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	marginTop: '12px',
};
interface IProps {
	open: boolean;
	handleClose: () => any | void;
	handleConfirm: () => any | void;
	title: string;
}

export const ConfirmModal: FC<IProps> = ({ open, handleClose, handleConfirm, title }) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);

	return (
		<Modal
			className={`mui-modal mui-modal--${themeMode}`}
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<Box sx={style} className="modal-content">
					<div className="modal-content__header">
						<h2>{title}</h2>
					</div>
					<div className="modal-content__actions">
						<Button
							className="mui-button mui-button--xs mui-button--outline mui-button--outline-secondary"
							onClick={() => {
								handleConfirm();
							}}
							sx={{ marginRight: '12px' }}
						>
							Yes
						</Button>
						<Button
							className="mui-button mui-button--xs mui-button--outline mui-button--outline-warning"
							onClick={() => {
								handleClose();
							}}
						>
							No
						</Button>
					</div>
				</Box>
			</Fade>
		</Modal>
	);
};

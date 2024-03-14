import { FC, ReactNode } from 'react';
import { Box, Fade, Backdrop } from '@mui/material';
import { CloseButton } from '../../../components';

import Modal from '@mui/material/Modal';
import './LargeModal.scss';

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
	title: string;
	children: ReactNode;
}

export const LargeModal: FC<IProps> = ({ open, handleClose, title, children }) => {
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
				style: {
					backgroundColor: 'rgba(34,34,34, 0.25)',
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style} className="large__modal-content">
					<div className="large__modal-content__header">
						<h2>{title}</h2>
						<CloseButton
							onClick={() => {
								handleClose();
							}}
						/>
					</div>
					<div className="large__modal-content__body">{children}</div>
				</Box>
			</Fade>
		</Modal>
	);
};

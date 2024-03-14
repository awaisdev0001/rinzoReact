import { FC, ReactNode } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';
import { CloseButton } from 'src/view/components';

import { useAppSelector } from 'src/hooks';

import './Modal.scss';

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

export const ModalOveray: FC<IProps> = ({ open, handleClose, title, children }) => {
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
						<CloseButton
							onClick={() => {
								handleClose();
							}}
						/>
					</div>
					<div className="modal-content__body">{children}</div>
				</Box>
			</Fade>
		</Modal>
	);
};

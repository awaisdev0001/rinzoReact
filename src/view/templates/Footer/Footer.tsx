import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Box, Typography } from '@mui/material';

import { IconDiscord, IconTwitter } from 'src/assets/icons';
import './Footer.scss';
import { ToSAndPPModal } from 'src/view/components/ToSAndPPModal';

export const Footer = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// get the current year
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__left">
				<ul className="footer__list_main">
					<li className="footer__list_main_item">
						<a href="#" className="footer__list_main_item-link">
							Support
						</a>
					</li>
					<li className="footer__list_item">
						<a href="#" className="footer__list_main_item-link">
							Status
						</a>
					</li>
					<li className="footer__list_item">
						<NavLink className="footer__list_main_item-link" to={'/marketing'} >
							Marketing
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="footer__right">
				<div className="footer__right-part">
					<p className="footer__copy">© {currentYear} Rinzo. All rights reserved.</p>
					<ul className="footer__list">
						<li className="footer__list_item">
							<div className="footer__list_item-link" onClick={() => handleOpen()}>
								Legal
							</div>
						</li>
						{/* <li className="footer__list_item">
                            <a href="#" className="footer__list_item-link">
                                Privacy Policy
                            </a>
                        </li> */}
					</ul>
				</div>
				<ul className="footer__list">
					<li className="footer__list_item">
						<a
							href="#"
							className="footer__list_item-icon footer__list_item-icon--violet"
						>
							<IconDiscord />
						</a>
					</li>
					<li className="footer__list_item">
						<a href="#" className="footer__list_item-icon footer__list_item-icon--blue">
							<IconTwitter />
						</a>
					</li>
				</ul>
			</div>
			<ToSAndPPModal open={open} handleClose={handleClose} />
		</footer>
	);
};

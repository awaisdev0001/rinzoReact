import { Component, createRef, RefObject } from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import { IconArrowRight } from 'src/assets/icons';
import { menuItems } from './data';
import './MarketingMenu.scss';

interface IProps {
	isMobile: boolean;
}

export class MarketingMenu extends Component<IProps> {
	private readonly isMobile: boolean;
	// private _to: any;
	constructor(props: any | IProps) {
		super(props);
		this.isMobile = props.isMobile;
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	scrollToTop() {
		scroll.scrollToTop();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render() {
		return (
			<div className={this.isMobile ? 'marketing__menu__mobile' : 'marketing__menu'}>
				{menuItems.map((item, index) => (
					<Link
						key={item.to + index}
						activeClass="marketing__menu__option--active"
						className="marketing__menu__option"
						to={item.to}
						spy={true}
						smooth={true}
						duration={500}
						offset={this.isMobile ? -50 : 0}
					>
						{item.title}
						<IconArrowRight />
					</Link>
				))}
			</div>
		);
	}
}

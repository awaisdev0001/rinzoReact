
import '../AdditionInfo.scss';
import LoadingSVG from "src/assets/images/errors/loading";

export const Loading = () => {
	return (
		<div className="additon-info">
			<div className="additon-info__image">
				<LoadingSVG />
			</div>
			<h2 className="additon-info__title">Wait for Uploading Data...</h2>
			<p className="additon-info__description" />
		</div>
	);
};

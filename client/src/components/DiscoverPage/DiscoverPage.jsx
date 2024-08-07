import "../DiscoverPage/DiscoverPage.css";
import { Header } from "./structure/Header/Header";
import { LiveWallperSection } from "./structure/LiveWallperSection/LiveWallperSection";
import { Overview } from "./structure/Overview/Overview";
import { Footer } from "./structure/Footer/Footer";

export const DiscoverPage = ({
	removeLogStatus,
	logStatus,
}) => {

	return (
		<>
			<Header removeLogStatus={removeLogStatus} logStatus={logStatus} />
			<LiveWallperSection />
			<Overview />
		</>
	);
};

import React from "react";
import Counter from "./counter.jsx";

const Home = ({ one, two, three, four, five }) => {
	return (
		<Counter one={one} two={two} three={three} four={four} five={five} />
	);
};

export default Home;

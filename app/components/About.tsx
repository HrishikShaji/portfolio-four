import { data } from "../data";

export const About = () => {
	return (
		<div className="p-10 h-full w-full bg-about  bg-fixed bg-cover">
			<h1 className="text-3xl text-white bg-black/30">
				{data.about.description}
			</h1>
		</div>
	);
};

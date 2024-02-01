"use client";

import { data } from "../data";
import { Skill } from "./Skill";

export const Skills = () => {
	return (
		<div className="w-full py-10">
			<div className="grid grid-cols-4 gap-0">
				{data.skills.data.map((item, i) => (
					<Skill item={item} key={i} />
				))}
			</div>
		</div>
	);
};

"use client";
import { data } from "../data";
import { useState } from "react";
import { Testimonial } from "./Testimonial";
import { QuotesStart } from "./QuotesStart";
import { QuotesEnd } from "./QuotesEnd";

export const Testimonials = () => {
	const [item, setItem] = useState<Record<string, any>>(data.testimonials[0]);
	return (
		<div className="flex h-[70vh] w-full">
			<div className="w-[35%] h-full border-2 border-black overflow-y-scroll">
				{data.testimonials.map((item, i) => (
					<Testimonial item={item} key={i} setItem={setItem} />
				))}
			</div>
			<div className="w-[65%] justify-center items-center px-10  border-2 flex border-black">
				<div className="flex w-full ">
					<div className="h-[200px] w-[200px]">
						<QuotesStart />
					</div>

					<p className="text-3xl text-center w-[95%] p-5">{item.desc}</p>
					<div className="h-[200px] w-[200px]">
						<QuotesEnd />
					</div>
				</div>
			</div>
		</div>
	);
};

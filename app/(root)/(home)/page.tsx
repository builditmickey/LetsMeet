"use client";

import { useEffect, useState } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");

	useEffect(() => {
		const updateDateTime = () => {
			const now = new Date();
			const timeString = now.toLocaleTimeString("en-US", {
				hour: "2-digit",
				minute: "2-digit",
			});
			const dateString = new Intl.DateTimeFormat("en-US", {
				dateStyle: "full",
			}).format(now);

			setTime(timeString);
			setDate(dateString);
		};

		updateDateTime();
		const intervalId = setInterval(updateDateTime, 60000); // Update every minute

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	return (
		<section className="flex size-full flex-col gap-10 text-white">
			<div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
				<div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
						<p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
					</div>
				</div>
			</div>
			<MeetingTypeList />
		</section>
	);
};

export default Home;

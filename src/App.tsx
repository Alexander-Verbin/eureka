import React from "react";
import { Button } from "./components/Button";
import { Calendar } from "./components/Calendar";
import { useOutsideClick } from "./utils/hooks/useOutsideClick";

export const App: React.FC = () => {
	const [selectedDate, setSelectedDay] = React.useState(new Date());
	const [activeCalendar, setActiveCalendar] = React.useState(false);
	const [activePopup, setActivePopup] = React.useState(false);
	const ref = useOutsideClick(() => {
		setActiveCalendar(false);
		setActivePopup(false);
	});
	return (
		<div className='App'>
			<div className='App__content' ref={ref}>
				<div
					className={activeCalendar ? "App__calendar active" : "App__calendar"}>
					<Calendar
						selectedDate={selectedDate}
						selectDate={(date) => setSelectedDay(date)}
						activePopup={activePopup}
						setActivePopup={setActivePopup}
					/>
				</div>
				<Button
					activeCalendar={activeCalendar}
					setActiveCalendar={setActiveCalendar}
					setActivePopup={setActivePopup}
				/>
			</div>
		</div>
	);
};

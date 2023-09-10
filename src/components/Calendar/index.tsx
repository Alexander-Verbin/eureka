import React from "react";
import { checkDateIsEqual, checkIsToday } from "../../utils/date";
import { useCalendar } from "../../utils/hooks/useCalendar";
import styles from "./styles.module.scss";
import { Popup } from "../Popup";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

interface CalendarProps {
	locale?: string;
	selectedDate: Date;
	selectDate: (date: Date) => void;
	firstWeekDayNumber?: number;
	activePopup: boolean;
	setActivePopup: (activePopup: boolean) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
	locale = "default",
	selectedDate: date,
	selectDate,
	firstWeekDayNumber = 2,
	activePopup,
	setActivePopup,
}) => {
	const { functions, state } = useCalendar({
		locale,
		selectedDate: date,
		firstWeekDayNumber,
	});

	return (
		<div className={styles.wrapper}>
			<Popup date={date} active={activePopup} />
			<div className={styles.calendar}>
				<div className={styles.calendar__header}>
					{state.mode === "days" && (
						<p
							className={styles.calendar__header__text}
							aria-hidden
							onClick={() => {
								functions.setMode("monthes");
								setActivePopup(false);
							}}>
							{state.monthesNames[state.selectedMonth.monthIndex].month}{" "}
							{state.selectedYear}
						</p>
					)}
					{state.mode === "monthes" && (
						<p
							className={styles.calendar__header__text}
							aria-hidden
							onClick={() => functions.setMode("years")}>
							{state.monthesNames[state.selectedMonth.monthIndex].month}{" "}
							{state.selectedYear}
						</p>
					)}
					{state.mode === "years" && (
						<p className={`${styles.calendar__header__text} ${styles.year}`}>
							{state.selectedYearsInterval[0]} -{" "}
							{
								state.selectedYearsInterval[
									state.selectedYearsInterval.length - 1
								]
							}
						</p>
					)}
					<div className={styles.calendar__header__arrows}>
						<div
							className={styles.calendar__header__arrow}
							onClick={() => functions.onClickArrow("left")}>
							<Arrow className={styles.calendar__header__arrow__icon} />
						</div>
						<div
							className={styles.calendar__header__arrow}
							onClick={() => functions.onClickArrow("right")}>
							<Arrow className={styles.calendar__header__arrow__icon} />
						</div>
					</div>
				</div>
				<div className={styles.calendar__body}>
					{state.mode === "days" && (
						<>
							<div className={styles.calendar__week__names}>
								{state.weekDaysNames.map((weekDaysName) => (
									<p
										className={styles.calendar__week__names__text}
										key={weekDaysName.dayShort}>
										{weekDaysName.dayShort}
									</p>
								))}
							</div>
							<div className={styles.calendar__days}>
								{state.calendarDays.map((day) => {
									const isToday = checkIsToday(day.date);
									const isSelectedDay = checkDateIsEqual(
										day.date,
										state.selectedDay.date
									);
									const isAdditionalDay =
										day.monthIndex !== state.selectedMonth.monthIndex;
									return (
										<p
											key={`${day.dayNumber}-${day.monthIndex}`}
											aria-hidden
											onClick={() => {
												functions.setSelectedDay(day);
												selectDate(day.date);
												setActivePopup(true);
											}}
											className={[
												`${styles.calendar__day}`,
												isToday ? `${styles.calendar__today__item}` : "",
												isSelectedDay
													? `${styles.calendar__selected__item}`
													: "",
												isAdditionalDay
													? `${styles.calendar__additional__day}`
													: "",
											].join(" ")}>
											{day.dayNumber}
										</p>
									);
								})}
							</div>
						</>
					)}
					{state.mode === "monthes" && (
						<div className={styles.calendar__pick__items__container}>
							{state.monthesNames.map((monthesName) => {
								const isCurrentMonth =
									new Date().getMonth() === monthesName.monthIndex &&
									state.selectedYear === new Date().getFullYear();
								const isSelectedMonth =
									monthesName.monthIndex === state.selectedMonth.monthIndex;
								return (
									<p
										key={monthesName.month}
										aria-hidden
										onClick={() => {
											functions.setSelectedMonthByIndex(monthesName.monthIndex);
											functions.setMode("days");
										}}
										className={[
											`${styles.calendar__pick__item}`,
											isSelectedMonth
												? `${styles.calendar__selected__item}`
												: "",
											isCurrentMonth ? `${styles.calendar__today__item}` : "",
										].join(" ")}>
										{monthesName.monthShort}
									</p>
								);
							})}
						</div>
					)}
					{state.mode === "years" && (
						<div className={styles.calendar__pick__items__container}>
							<div
								className={`${styles.calendar__pick__item} ${styles.calendar__unchoosable__year}`}>
								{state.selectedYearsInterval[0] - 1}
							</div>
							{state.selectedYearsInterval.map((year) => {
								const isCurrentYear = new Date().getFullYear() === year;
								const isSelectedYear = year === state.selectedYear;
								return (
									<div
										key={year}
										aria-hidden
										onClick={() => {
											functions.setSelectedYear(year);
											functions.setMode("monthes");
										}}
										className={[
											`${styles.calendar__pick__item}`,
											isCurrentYear ? `${styles.calendar__today__item}` : "",
											isSelectedYear
												? `${styles.calendar__selected__item}`
												: "",
										].join(" ")}>
										{year}
									</div>
								);
							})}
							<div
								className={`${styles.calendar__pick__item} ${styles.calendar__unchoosable__year}`}>
								{state.selectedYearsInterval[
									state.selectedYearsInterval.length - 1
								] + 1}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

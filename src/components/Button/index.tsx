import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Icon } from "../../images/icon.svg";

interface ButtonPrors {
	activeCalendar: boolean;
	setActiveCalendar: (active: boolean) => void;
	setActivePopup: (active: boolean) => void;
}

export const Button: React.FC<ButtonPrors> = ({
	activeCalendar,
	setActiveCalendar,
	setActivePopup,
}) => {
	return (
		<button
			type='button'
			className={
				activeCalendar ? `${styles.button} ${styles.active}` : styles.button
			}
			onClick={() => {
				setActiveCalendar(!activeCalendar);
				setActivePopup(false);
			}}>
			<Icon className={styles.button__icon} />
		</button>
	);
};

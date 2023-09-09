import React from "react";
import styles from "./styles.module.scss";

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
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 20 20'
				className={styles.button__icon}>
				<path
					d='M3.3 16.7V4.96666H16.7V16.7H3.3Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
				<path
					d='M7.26663 6.06667V3.1H7.73329V6.06667H7.26663Z'
					strokeWidth='1.2'
					strokeMiterlimit='10'
				/>
				<path
					d='M7.26663 10.2333V9.76666H7.73329V10.2333H7.26663Z'
					strokeWidth='1.2'
					strokeMiterlimit='10'
				/>
				<path
					d='M7.46663 12.5333V12.4667H7.53329V12.5333H7.46663Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
				<path
					d='M9.96663 10.0333V9.96666H10.0333V10.0333H9.96663Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
				<path
					d='M9.96663 12.5333V12.4667H10.0333V12.5333H9.96663Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
				<path
					d='M12.4666 10.0333V9.96666H12.5333V10.0333H12.4666Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
				<path
					d='M12.4666 12.5333V12.4667H12.5333V12.5333H12.4666Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
				<path
					d='M12.4666 5.86667V3.3H12.5333V5.86667H12.4666Z'
					strokeWidth='1.6'
					strokeMiterlimit='10'
				/>
			</svg>
		</button>
	);
};

import React from "react";
import styles from "./styles.module.scss";
import { formatDate } from "../../utils/date";
import image from "../../images/image1.webp";

interface PopupProps {
	date: Date;
	active: boolean;
}

export const Popup: React.FC<PopupProps> = ({ date, active }) => {
	return (
		<div className={active ? `${styles.popup} ${styles.active}` : styles.popup}>
			<div className={styles.popup__content}>
				<p className={styles.popup__current__date}>
					{formatDate(date, "DD.MM.YYYY")}
				</p>
				<div className={styles.popup__info}>
					<p className={styles.popup__today}>Международный день биодизеля</p>
					<img
						className={styles.popup__image}
						loading='lazy'
						src={image}
						alt='today'
					/>
				</div>
			</div>
		</div>
	);
};

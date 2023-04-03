import styles from './ShipCard.module.scss'
import {FC,} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import iconArrowLeft from "shared/assets/svg/arrowLeft.svg";
import {selectorShipsData} from "../../ships";

export const ShipCard: FC = () => {
    let {shipId} = useParams();

    const shipsData = useSelector(selectorShipsData)
    const shipData = shipsData.find((ship) => ship.ship_id === shipId)
    const navigation = useNavigate()
    const handleBackButton = () => {
        navigation('/ships')
    }
    return <div className={styles.shipCard}>
        <div className={styles.shipCard__inner}>
            <div className={styles.shipCard__header}>
                <div className={styles.shipCard__return} onClick={handleBackButton}>
                    <img className={styles.shipCard__returnImg} src={iconArrowLeft} alt={'Иконка назад'}/>
                    <span className={styles.shipCard__returnText}>Вернуться</span>
                </div>
                <div className={styles.shipCard__title}>{shipData?.ship_name}</div>
            </div>
            <div className={styles.shipCard__body}>
                <div className={styles.shipCard__params}>
                    <div className={styles.shipCard__typeWeight}>
                        <div className={styles.shipCard__type}>
                            <span className={styles.shipCard__typeLabel}>Тип</span>
                            <span className={styles.shipCard__typeText}>
                                {shipData?.ship_type ? shipData?.home_port : 'Неизвестно'}</span>
                        </div>
                        <div className={styles.shipCard__weight}>
                            <span className={styles.shipCard__weightLabel}>Вес</span>
                            <span className={styles.shipCard__weightText}>
                                {shipData?.weight_kg ? shipData?.weight_kg : 'Неизвестно'}
                            </span>
                        </div>
                    </div>
                    <div className={styles.shipCard__portYear}>
                        <div className={styles.shipCard__port}>
                            <span className={styles.shipCard__typeLabel}>Порт</span>
                            <span
                                className={styles.shipCard__typeText}>{shipData?.home_port ? shipData?.home_port : 'Неизвестно'}</span>
                        </div>
                        <div className={styles.shipCard__year}>
                            <span className={styles.shipCard__yearLabel}>Год</span>
                            <span
                                className={styles.shipCard__yearText}>{shipData?.year_built ? shipData?.year_built : 'Неизвестно'}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.shipCard__missions}>
                    <div className={styles.shipCard__missionsLabel}>Миссии</div>
                    <div
                        className={styles.shipCard__missionsText}>
                        {shipData?.missions
                            ? shipData?.missions.map((item) => item.name).join(', ')
                            : 'Нет информации'}</div>
                </div>
            </div>

        </div>

    </div>
}
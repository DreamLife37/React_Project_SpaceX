import styles from './ShipItem.module.scss'
import {FC} from "react";
import {ShipsDataType} from '../model/types';
import {useNavigate} from "react-router-dom";

type PropsType = {
    ship: ShipsDataType
}

export const ShipItem: FC<PropsType> = ({ship}) => {
    const navigation = useNavigate()
    const handlerCard = () => {
        navigation('/ships/' + ship.ship_id)
    }
    return <div className={styles.shipItem} onClick={handlerCard}>
        <div className={styles.ship__name}>
            {ship.ship_name}
        </div>
        <div className={styles.ship__body}>
            <div className={styles.ship__type}>
                <span className={styles.ship__typeLabel}>Тип</span>
                <span className={styles.ship__typeText}>{ship.ship_type}</span>
            </div>
            <div className={styles.ship__port}>
                <span className={styles.ship__portLabel}>Порт</span>
                <span className={styles.ship__portText}>{ship.home_port}</span>
            </div>
        </div>
    </div>
}
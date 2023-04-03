import styles from './ShipCardPage.module.scss'
import {FC} from "react";
import {ShipCard} from 'widgets/shipCard';

export const ShipCardPage: FC = () => {
    return <div className={styles.shipCardPage}>
        <ShipCard/>
    </div>
}
import {FC} from "react";
import styles from "./SkeletonItem.module.scss";

export const SkeletonItem: FC = () => {
    return <div className={styles.skeletonItem}>
        <div className={styles.ship__name}/>
        <div className={styles.ship__body}>
            <div className={styles.ship__type}/>
            <div className={styles.ship__port}/>
        </div>
    </div>
}
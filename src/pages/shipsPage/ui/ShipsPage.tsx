import styles from './ShipsPage.module.scss'
import {FC, useState} from "react";
import {Sidebar} from 'widgets/sidebar';
import {Ships} from 'widgets/ships';

export const ShipsPage: FC = () => {
    const [isActiveFilter, setIsActiveFilter] = useState(false)

    const toggleActiveFilter = () => {
        setIsActiveFilter(!isActiveFilter)
    }

    return <div className={styles.shipsPage}>
        <Ships isActiveFilter={isActiveFilter} toggleActiveFilter={toggleActiveFilter}/>
        <Sidebar isActiveFilter={isActiveFilter} toggleActiveFilter={toggleActiveFilter}/>
    </div>
}
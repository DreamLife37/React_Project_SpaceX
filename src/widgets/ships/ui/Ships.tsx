import styles from './Ships.module.scss'
import React, {FC, useEffect} from "react";
import {ShipItem} from 'entities/shipItem';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchAllShips} from "../model/thunk";
import {useSelector} from "react-redux";
import {
    selectorCurrentPage,
    selectorLoadingShips,
    selectorShipName,
    selectorShipPort,
    selectorShipsData,
    selectorShipType
} from "../model/selectors";
import {useDebounce} from "shared/lib/hooks/useDebounce/useDebounce";
import {Skeleton} from "shared/ui/skeleton/Skeleton";
import iconFilter from "shared/assets/svg/filters.svg"
import {setCurrentPage} from "../model/slice";
import {Pagination} from 'entities/pagination';

type PropsType = {
    isActiveFilter: boolean
    toggleActiveFilter: () => void
}

export const Ships: FC<PropsType> = React.memo(({toggleActiveFilter, isActiveFilter}) => {
    const dispatch = useAppDispatch()

    const shipsData = useSelector(selectorShipsData)
    const isLoading = useSelector(selectorLoadingShips)
    const shipNameSearch = useSelector(selectorShipName)
    const shipType = useSelector(selectorShipType)
    const shipPort = useSelector(selectorShipPort)
    const currentPage = useSelector(selectorCurrentPage)

    const debouncedSearchTerm = useDebounce(shipNameSearch);

    useEffect(() => {
        dispatch(fetchAllShips())
    }, [dispatch, debouncedSearchTerm, shipType, shipPort, currentPage])

    const handlerPrev = () => {
        dispatch(setCurrentPage(currentPage - 1))
    }
    const handlerNext = () => {
        dispatch(setCurrentPage(currentPage + 1))
    }

    return <div className={`${isActiveFilter ? styles.ships_inactive : styles.ships} `}>
        <div className={styles.ships__inner}>
            <div className={styles.ships__title}>SpaceX Ships</div>
            <div className={styles.iconFilter} onClick={toggleActiveFilter}>
                <img src={iconFilter}/>
                <span className={styles.iconFilter__text}>Фильтры</span>
            </div>
            {isLoading
                ? <Skeleton rowSkeleton={5}/>
                : shipsData.length === 0
                    ? <div className={styles.ships__textNoShips}>Корабли не найдены</div>
                    : shipsData.map((ship) => {
                        return <ShipItem key={ship.ship_id} ship={ship}/>;
                    })
            }
        </div>
        {shipsData.length !== 0
            && <div className={styles.ships__pagination}>
                <Pagination currentPage={currentPage} handlerNext={handlerNext} handlerPrev={handlerPrev}/>
            </div>}
    </div>
})
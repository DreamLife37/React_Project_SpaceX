import styles from './ShipsPage.module.scss'
import {FC, useEffect, useState} from "react";
import {Sidebar} from 'widgets/sidebar';
import {
    fetchAllShips,
    selectorCurrentPage,
    selectorShipName,
    selectorShipPort,
    selectorShipType, setPortShip, setSearchName,
    setTypeShip,
    Ships
} from 'widgets/ships';

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useDebounce} from "shared/lib/hooks/useDebounce/useDebounce";
import {useSearchParams} from "react-router-dom";


export const ShipsPage: FC = () => {
    const dispatch = useAppDispatch()
    const shipType = useSelector(selectorShipType)
    const shipPort = useSelector(selectorShipPort)
    const currentPage = useSelector(selectorCurrentPage)
    const shipNameSearch = useSelector(selectorShipName)
    const debouncedSearchTerm = useDebounce(shipNameSearch);

    const [searchParams, setSearchParams] = useSearchParams()

    const queryParamType = searchParams.get('type') || ''
    const queryParamName = searchParams.get('name') || ''
    const queryParamPort = searchParams.get('port') || ''

    const [isActiveFilter, setIsActiveFilter] = useState(false)

    const toggleActiveFilter = () => {
        setIsActiveFilter(!isActiveFilter)
    }

    //из URL строки в state (при первичной загрузке)
    useEffect(() => {
        if (queryParamType) dispatch(setTypeShip(queryParamType))
        if (queryParamName) dispatch(setSearchName(queryParamName))
        if (queryParamPort) dispatch(setPortShip(queryParamPort.split(',')))
    }, [])

    //из state в URL строку
    useEffect(() => {
        dispatch(fetchAllShips())
        setSearchParams(params => {
            if (shipType) params.set("type", shipType);
            if (shipNameSearch) {
                params.set("name", shipNameSearch)
            } else params.delete("name")
            if (shipPort.length > 0) {
                params.set("port", shipPort[shipPort.length - 1])
            } else params.delete("port")
            return params;
        });
    }, [dispatch,
        debouncedSearchTerm,
        shipType, shipPort, currentPage])

    return <div className={styles.shipsPage}>
        <Ships isActiveFilter={isActiveFilter} toggleActiveFilter={toggleActiveFilter}/>
        <Sidebar isActiveFilter={isActiveFilter} toggleActiveFilter={toggleActiveFilter}/>
    </div>
}
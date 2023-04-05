import styles from './Sidebar.module.scss'
import {FC} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Search} from "shared/ui/search/Search";
import iconArrowLeft from "shared/assets/svg/arrowLeft.svg"
import {RadioButton} from "shared/ui/radiobutton/RadioButton";
import {MultiSelect} from "shared/ui/select/Select";
import {
    selectorShipName,
    selectorShipPort,
    selectorShipType,
    setPortShip,
    setSearchName,
    setTypeShip
} from "widgets/ships";
import {useSelector} from "react-redux";

type PropsType = {
    isActiveFilter: boolean
    toggleActiveFilter: () => void
}

export const Sidebar: FC<PropsType> = ({isActiveFilter, toggleActiveFilter}) => {

    const dispatch = useAppDispatch()
    const shipType = useSelector(selectorShipType)
    const shipPort = useSelector(selectorShipPort)
    const shipNameSearch = useSelector(selectorShipName)

    const onChangeSearch = (shipName: string) => {
        dispatch(setSearchName(shipName))
    }

    const onTypeChange = (shipType: string) => {
        dispatch(setTypeShip(shipType))
    }

    const onPortChange = (shipPort: string[]) => {
        dispatch(setPortShip(shipPort))
    }

    const optionsSelect = [
        {label: 'Port Canaveral', value: 'Port Canaveral'},
        {label: 'Port of Los Angeles', value: 'Port of Los Angeles'},
        {label: 'Fort Lauderdale', value: 'Fort Lauderdale'},
    ]
    const optionsRadioButton = [
        {label: 'Barge', value: 'Barge'},
        {label: 'Cargo', value: 'Cargo'},
        {label: 'High Speed Craft', value: 'High Speed Craft'},
        {label: 'Tug', value: 'Tug'},
    ]

    return <div className={`${styles.sidebar} ${isActiveFilter ? styles.sidebar_active : ''}`}>
        <div className={styles.sidebar__inner}>
            <div className={styles.sidebar__title}>
                <img className={`${isActiveFilter ? styles.sidebar__titleImg_active : styles.sidebar__titleImg}`}
                     src={iconArrowLeft}
                     onClick={toggleActiveFilter} alt={'Стрелка назад'}/>
                <span className={styles.sidebar__titleText}>Фильтры</span>
            </div>
            <div className={styles.sidebar__body}>
                <Search currentValue ={shipNameSearch} label={'Название'} onChange={(e) => onChangeSearch(e.target.value)}/>
                <MultiSelect selected = {shipPort} options={optionsSelect} onChange={e => onPortChange(e)}/>
                <RadioButton selected={shipType} options={optionsRadioButton}
                             onChange={(e => onTypeChange(e.currentTarget.value))}
                             label={'Тип'}/>
            </div>
        </div>
    </div>
}
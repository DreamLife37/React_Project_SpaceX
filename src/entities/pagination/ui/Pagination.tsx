import styles from './Pagination.module.scss'
import {FC} from "react";
import iconPrev from "shared/assets/svg/buttonPrev.svg"
import iconNext from "shared/assets/svg/buttonNext.svg"

type PropsType = {
    currentPage: number
    handlerPrev: () => void
    handlerNext: () => void
}

export const Pagination: FC<PropsType> = ({handlerNext, handlerPrev, currentPage}) => {

    const onChangePrev = () => handlerPrev()
    const onChangeNext = () => handlerNext()

    return <div className={styles.pagination}>
        <div className={`${currentPage === 1 ? styles.pagination__prev_disabled : styles.pagination__prev}`}>
            <img className={styles.pagination__prevImg} src={iconPrev} onClick={onChangePrev} alt={'Иконка назад'}/>
        </div>
        <div className={styles.pagination__currentPage}>{currentPage}</div>
        <div className={`${currentPage === 5 ? styles.pagination__next_disabled : styles.pagination__next}`}>
            <img className={styles.pagination__nextImg} src={iconNext} onClick={onChangeNext} alt={'Иконка вперед'}/>
        </div>
    </div>
}
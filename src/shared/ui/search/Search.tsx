import {ChangeEvent, FC} from "react";
import styles from './Search.module.scss'

type PropsType = {
    label: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    currentValue: string
}

export const Search: FC<PropsType> = ({label, onChange, currentValue}) => {
    return (
        <div className={styles.search}>
            <label className={styles.search__label}>{label}
                <input className={styles.search__input}
                       type={"text"}
                       onChange={onChange}
                       value={currentValue}/>
            </label>
        </div>
    );
};

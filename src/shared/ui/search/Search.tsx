import {ChangeEvent, FC} from "react";
import styles from './Search.module.scss'

type PropsType = {
    label: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<PropsType> = ({label, onChange}) => {
    return (
        <div className={styles.search}>
            <label className={styles.search__label}>{label}
                <input className={styles.search__input}
                       type={"text"}
                       onChange={onChange}/>
            </label>
        </div>
    );
};

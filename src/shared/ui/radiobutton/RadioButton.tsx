import {ChangeEvent, FC} from "react";
import styles from './RadioButton.module.scss'

type OptionType = {
    label: string
    value: string
}

type PropsType = {
    label: string
    options: OptionType[]
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RadioButton: FC<PropsType> = ({label, onChange, options}) => {
    return (
        <div className={styles.radioButtonGroup}>
            <div className={styles.radioButton__inner}>
                <div className={styles.radioButtonGroup__label}>{label}</div>
                <div className={styles.radioButtonGroup__body}>
                    {options.map((item) => {
                        return <div className={styles.radioButton} key={item.value}>
                            <input className={styles.radioButton__input} type="radio" id={item.value}
                                   value={item.value}
                                   name={label}
                                   onChange={onChange}/>
                            <label htmlFor={item.value} className={styles.radioButton__label}>{item.label}</label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

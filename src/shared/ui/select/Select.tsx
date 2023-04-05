import React, {FC, useEffect, useState} from "react";
import {
    MenuItem,
    FormControl,
    ListItemText,
    Checkbox,
    StyledEngineProvider,
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import iconUp from 'shared/assets/svg/chevronUp.svg'
import iconDown from 'shared/assets/svg/chevronDown.svg'
import styles from './Select.module.scss'


type OptionType = {
    label: string
    value: string
}

type PropsType = {
    selected: string[]
    onChange: (e: string[]) => void
    options: OptionType[]
}

export const MultiSelect: FC<PropsType> = ({onChange, options, selected}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (selected.length > 0) {
            setSelectedValues(selected)
        } else setSelectedValues(['Любой'])
    }, [selected])

    const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
        const {
            target: {value},
        } = event;
        const createArray: Array<string> =
            typeof value === "string" ? value.split(",") : value;

        setSelectedValues(createArray);
        onChange(createArray.slice(1))
    };

    const handleSwitch = () => {
        setOpen((value) => !value);
    };

    return (
        <StyledEngineProvider injectFirst>
            <div className={styles.select}>
                <label className={styles.select__label}>Порт</label>
                <div className={styles.select__body}>
                    <FormControl color="primary" fullWidth>
                        <Select
                            className={styles.select__input}
                            color="primary"
                            multiple
                            onOpen={handleSwitch}
                            onClose={handleSwitch}
                            value={selectedValues}
                            onChange={handleChange}
                            renderValue={() =>
                                selectedValues[0] === 'Любой'
                                    ? "Любой"
                                    : `Выбрано  ${selectedValues.length}`
                            }
                            IconComponent={() =>
                                open ? (
                                    <img className={styles.select__iconUpDown} src={iconUp} alt={'icon Up'}/>
                                ) : (
                                    <img className={styles.select__iconUpDown} src={iconDown}
                                         alt={'icon Down'}/>
                                )
                            }
                        >
                            {options.map((item) => (
                                <MenuItem key={item.value} value={item.value} className={styles.select__menuItem}>
                                    <Checkbox checked={selectedValues.indexOf(item.value) > -1}
                                              className={styles.select__checkbox}/>
                                    <ListItemText primary={item.value}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </StyledEngineProvider>
    );
};



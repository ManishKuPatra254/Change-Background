import { Fragment } from 'react';
import styles from './Change.module.css';

export function ChangeColor() {

    function handleClickChangeColor(event) {
        // console.log(event);
        const changeColor = document.querySelector('body');
        changeColor.style.background = getRandomColor()
    }

    function getRandomColor() {
        const numbers = '0123456789ABCDEF';
        var colors = '#';
        for (let i = 0; i < 6; i++) {
            colors += numbers[Math.floor(Math.random() * 16)];
        }
        return colors;
    }

    return (
        <Fragment>
            <div className={styles.main_container}>
                <button className={styles.btn_change_color}
                    onClick={handleClickChangeColor}>Click Me</button>
            </div>
        </Fragment>
    )
}
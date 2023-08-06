import style from './PageClicker.module.css'

const PageClicker = ({ title, onClickHandler }) => { 
    return (
        <button type="button" className={style.button} onClick={onClickHandler}>{title}</button>
    )
}

export default PageClicker
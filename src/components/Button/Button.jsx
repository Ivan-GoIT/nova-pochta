import style from './Button.module.css'

const Button = ({ title, onClickHandler }) => { 
    return (
        <button type="button" className={style} onClick={onClickHandler}>{title}</button>
    )
}

export default Button
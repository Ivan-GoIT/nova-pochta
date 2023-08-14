import css from './Button.module.css'

const Button = ({ type, title, onClickHandler }) => {
  return (
    <button 
    type={type} 
    onClick={onClickHandler} 
    className={css.button}
    >
      {title}
    </button>
  );
};

export default Button;

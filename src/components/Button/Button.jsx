const Button = ({ type, title, onClickHandler }) => {
  return (
    <button type={type} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Button;

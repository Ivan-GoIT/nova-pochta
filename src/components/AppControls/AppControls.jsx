import css from './AppControls.module.css';
import { NavLink } from 'react-router-dom';

const AppControls = () => {
  console.log(`${css.navigation}`);
  return (
    <header>
      <nav className={`${css.navigation}`}>
        <NavLink to="/" className={`${css.pageButton}`}>
          Перевірити ТТН
        </NavLink>
        <NavLink to="/offices" className={`${css.pageButton}`}>
          Список відділень
        </NavLink>
      </nav>
    </header>
  );
};

export default AppControls;

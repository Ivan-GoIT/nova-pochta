import css from './AppControls.modules.css'
import { NavLink } from 'react-router-dom';

const AppControls = () => {
  return (
    <header>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.pageButton}>
          Перевірити ТТН
        </NavLink>
      </nav>
      <nav className={css.navigation}>
        <NavLink to="/offices" className={css.pageButton}>
          Список відділень
        </NavLink>
      </nav>
    </header>
  );
};

export default AppControls;

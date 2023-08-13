import css from './AppControls.module.css';
import { NavLink } from 'react-router-dom';

const AppControls = () => {
  console.log(`${css.navigation}`);
  return (
    <header>
      <nav className={`${css.navigation}`}>
        <NavLink to="/" className={`${css.pageButton}`}>
          <span>Перевірити ТТН</span>
        </NavLink>
        <NavLink to="/offices" className={`${css.pageButton}`}>
          <span>Список відділень</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppControls;

import { Route, Routes } from 'react-router-dom';
import 'App.css';
import NotFound from 'components/NotFound/NotFound';
import MainPage from 'pages/MainPage/MainPage';
import TtnCheckerPage from 'pages/TtnCheckerPage/TtnCheckerPage';
import OfficeListPage from 'pages/OfficeListPage/OfficeListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<TtnCheckerPage/>} />
        <Route path="offices" element={<OfficeListPage />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

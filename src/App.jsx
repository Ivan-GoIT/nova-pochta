import { Route, Routes } from 'react-router-dom';
import 'App.css';
import NotFound from 'components/NotFound/NotFound';
import MainPage from 'pages/MainPage/MainPage';
import { Stub } from 'components/Stub';
import TtnCheckerPage from 'pages/TtnCheckerPage/TtnCheckerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<TtnCheckerPage/>} />
        <Route path="offices" element={<Stub />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

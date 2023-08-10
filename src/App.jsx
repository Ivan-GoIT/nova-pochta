import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import MainPage from './components/MainPage/MainPage';
import { Stub } from './components/Stub';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Stub />} />
        <Route path="offices" element={<Stub />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

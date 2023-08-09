import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppControls from './components/AppControls/AppControls';
import TTNCheckerPage from './components/TTNCheckerPage/TTNCheckerPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<TTNCheckerPage />} />
        <Route path="offices" element={<TTNCheckerPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

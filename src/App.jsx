import { Route, Routes } from 'react-router-dom';
import 'App.css';
import NotFound from 'components/NotFound/NotFound';
import MainPage from 'pages/MainPage/MainPage';
import { Stub } from 'components/Stub';
import SearchForm from 'components/SearchForm/SearchForm';
import formProperties from 'helpers/formProperties';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<SearchForm {...formProperties.ttn}/>} />
        <Route path="offices" element={<Stub />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

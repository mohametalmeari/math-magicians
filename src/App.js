import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import CalcPage from './routes/CalcPage';
import QuotePage from './routes/QuotePage';
import Layout from './components/Layout';
import NotMatch from './routes/NotMatch';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="calculator" element={<CalcPage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

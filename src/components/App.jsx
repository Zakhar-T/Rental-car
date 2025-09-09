import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header.jsx';
const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<div></div>} />
          <Route path="/catalog/:id" element={<div></div>} />
        </Routes>
      </Suspense>
    </>
  );
}

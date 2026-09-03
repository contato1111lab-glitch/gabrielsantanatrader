/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LinksPage } from './components/LinksPage';
import { FunnelPage } from './components/FunnelPage';
import { pagesData } from './data';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/g1" element={<LinksPage config={pagesData.g1} />} />
        <Route path="/g2" element={<LinksPage config={pagesData.g2} />} />
        <Route path="/g3" element={<LinksPage config={pagesData.g3} />} />
        <Route path="/indicador" element={<FunnelPage />} />
        <Route path="*" element={<Navigate to="/g2" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

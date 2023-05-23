import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CryptocurrencyList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={CryptocurrencyList} />
    </Routes>
  </BrowserRouter>
)

export default CryptocurrencyTracker

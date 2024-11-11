import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MyOrdersPage from './pages/MyOrdersPage'
import InvoicesPage from './pages/InvoicesPage'
import SettingsPage from './pages/SettingsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MyOrdersPage />} />
          <Route path="/my-orders" element={<MyOrdersPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

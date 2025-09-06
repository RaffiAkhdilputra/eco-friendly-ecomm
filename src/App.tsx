import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* Tambahin lagi pagenya kalo udah */}
        </Routes>
      </Router>
    </>
  )
}

export default App

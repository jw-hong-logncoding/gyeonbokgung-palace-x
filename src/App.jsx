import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import NavBarLayout from './components/Layout/NavBarLayout/NavBarLayout'
import Community from './components/Community'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/community" element={<Community />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

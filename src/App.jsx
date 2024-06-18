import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import NavBarLayout from './components/Layout/NavBarLayout/NavBarLayout'
import Community from './components/Community'
import Map from './components/Map'
import BuildingInfo from './components/Map/BuildingInfo'
import ReviewForm from './components/ReviewForm'
import MyPage from './components/MyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/community" element={<Community />} />
          <Route index path="/review-form" element={<ReviewForm />} />
          <Route index path="/my-page" element={<MyPage />} />
          <Route path="/map" element={<Map />} >
            <Route path="/map/:title" element={<BuildingInfo />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserMain from './pages/UserMain'
import Footer from './components/footer'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <Router>
       <div>
        <Navbar/>
        <Footer />
      </div>
      <Routes>
        <Route exact path='/' element={<SignIn/>}></Route>
        <Route exact path = '/userProfile' element={<UserMain/>}></Route>
        <Route exact path='/signUp' element={<SignUp/>}></Route>
      </Routes>
    </Router>
  )
}

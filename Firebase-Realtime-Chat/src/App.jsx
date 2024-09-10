import { BrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from './main'

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App

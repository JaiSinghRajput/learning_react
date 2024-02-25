import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React of nobi with chai or code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

import Login from '../components/Login'
import Styles from '../styles/SignIn.module.css'


const login = ({children}) => {
  return (
      <div className={Styles.baseImage}>
        <Login />
      </div>
  )
}

export default login
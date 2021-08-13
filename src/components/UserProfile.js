import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import "./UserProfile.css"
import Avatar from "../assets/miles.jpg"

const UserProfile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const handleLogout = () => setCurrentUser(null)
  const handleLogin = () => setCurrentUser({
    name: "Miles Davis",
    imageUrl: Avatar,
  })

  return (
    <div className="UserProfile">
      {
        currentUser
          ? (
            <>
              <img src={currentUser.imageUrl} alt={`Avatar of ${currentUser.name}`} />
              <button onClick={handleLogout}>Logout</button>
            </>
          )
          : <button onClick={handleLogin}>Login</button>
      }
    </div>
  )
}

export default UserProfile

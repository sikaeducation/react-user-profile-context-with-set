import NavBar from "./NavBar"
import UserProfile from "./UserProfile"
import "./HeaderBar.css"

const HeaderBar = () => {
  return (
    <header className="HeaderBar">
      <h1>Star Lucky Coffee</h1>
      <NavBar />
      <UserProfile />
    </header>
  )
}

export default HeaderBar

import { Container, User, Search } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import AvatarPlaceHolder from "../../assets/profile.png"

export function Header({ children }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder

  return(
    <Container>
      <h2>RocketMovies</h2>

      <Search>
        {children}
      </Search>
      
      <User>
        <div>
          <Link to="/profile">
            {user.name}
          </Link>
          <button onClick={handleSignOut}>sair</button>
        </div>

        <img 
          src={avatarUrl}
          alt="Foto do usuário"
        />
      </User>
    </Container>
  )
}
import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleSignUp() {
    if(! name || !email || !password) {
      return alert("Preencha todos os campos.")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("Não foi possível cadastrar.")
      }
    })
  }

  return(
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail} 
          placeholder="Email"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock} 
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link onClick={handleBack}>
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )
}
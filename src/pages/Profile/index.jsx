import { Avatar, Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import AvatarPlaceHolder from "../../assets/profile.png"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [password, setPassword] = useState()
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: password,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <Link onClick={handleBack}>
          <FiArrowLeft/>
          Voltar
        </Link>
      </header>

      <Avatar>
        <img 
          src={avatar}
          alt="Foto do usuário"
        />

        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" onChange={handleChangeAvatar} />
        </label>
      </Avatar>

      <Form>
        <Input
          placeholder="Nome"
          value={name}
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail}
          value={email}
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
        />

        <Input 
          icon={FiLock} 
          placeholder="Senha atual"
          type="password"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          icon={FiLock} 
          placeholder="Nova senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
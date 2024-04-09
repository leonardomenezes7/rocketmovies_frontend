import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm) {
      await api.delete(`/movies/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  return(
    <Container>
      <Header />

      <Content>
        
        { 
        data &&
        <section>
          <Link onClick={handleBack} >
            <FiArrowLeft/>
            Voltar
          </Link>

          <div className="title">
            <h2>{data.title}</h2>
            <Rating grade={data.rating} />
          </div>

          <div className="user">
            <img src={avatarUrl} alt="Foto do usuário" />
            <p>{user.name}</p>
            <span>
              <GoClock />
              {data.created_at}
            </span>
          </div>
          
          { data.tags && 
            <div className="tags">
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </div>
          }

          <div className="text">
            <p>{data.description}</p>
          </div>

          <button onClick={handleRemove}>
            Excluir nota
          </button>
        </section>
        }
      </Content>
    </Container>
  )
}
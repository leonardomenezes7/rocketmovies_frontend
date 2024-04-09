import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Movie } from "../../components/Movie"
import { New } from "./styles";
import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()
  
  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return(
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <div className="title">
          <h2>Meus Filmes</h2>

          <New to="/new">
            <Button title="Adicionar filme" icon={FiPlus} />
          </New>
        </div>
        

        {
          movies.map(movie => (
            <Movie 
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))
        }
      </main>
    </Container>
  )
}
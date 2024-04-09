import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    if(!newTag) {
      return
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if(!title || !description || !rating) {
      return alert("Os campos de título, observações e nota são obrigatórios.")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar mas não adicionou.")
    }

    if(rating > 5) {
      return alert("Escolha uma nota de 0 a 5.")
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    })

    alert("Filme criado com sucesso!")
    handleBack()
  }

  return(
    <Container>
      <Header/>

      <main>
        <Link onClick={handleBack}>
          Voltar
        </Link>

        <h2>Novo Filme</h2>

        <Form>
          <div>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="number"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <h3>Marcadores</h3>

          <div className="items">
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <NoteItem 
              isnew 
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          
          <Button 
            title="Salvar"
            onClick={handleNewMovie}
          />
        </Form>
      </main>
    </Container>
  )
}
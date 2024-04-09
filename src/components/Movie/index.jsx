import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function Movie({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>

      <Rating grade={data.rating}/>

      <p>{data.description}</p>

       
      {data.tags.map((tag) => (
        <Tag key={tag.id} title={tag.name} />
      ))}
    </Container>
  )
}
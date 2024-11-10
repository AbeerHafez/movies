import { useLoaderData } from 'react-router-dom'
import {axiosinstance} from '../../services/api/axios'
import { Col, Container, Row } from 'react-bootstrap';

export default function MovieDetail() {
 
  const movie = useLoaderData();


   return (
<Container>
        <Row>
            <Col>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" style={{width:"30rem"}}/>
            </Col>
            <Col >
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <h3>{movie.release_date}</h3>
            </Col>
        </Row>
    </Container>  )
}

export const movieLoader = async ({ params }) => {
  const response = await axiosinstance.get(`/${params.id}`);
  return response.data;
};
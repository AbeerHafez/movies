import Row from "react-bootstrap/Row";
import { axiosinstance } from "../../services/api/axios";
import { useLoaderData } from "react-router-dom";
import CardMovie from './card'



export default function PopularMovies() {
  const movies = useLoaderData();

  return (
    <>
      <Row>
        {movies.map(({ id, poster_path, title }) => (
          <CardMovie key={id} id={id} poster_path={poster_path} title={title}/>
        ))}
      </Row>
    </>
  );
}

export const loader = async () => {
  try {
    const movies = await axiosinstance.get("/popular");
    console.log(movies.data.results);
    return movies.data.results;
  } catch (err) {
    console.log(err);
  }
};
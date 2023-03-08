import { IMovie } from "../models/IMovie";
import { H3 } from "./styled/Headings";
import { Img } from "./styled/Img";
import { ImageWrapper, MovieWrapper } from "./styled/Wrappers";

interface IMovieProps {
  movie: IMovie;
  handleSelected(id: number): void;
}

export const Movie = (props: IMovieProps) => {
  return (
    <MovieWrapper
      selected={props.movie.selected}
      onClick={() => {
        props.handleSelected(props.movie.id);
      }}
    >
      <H3>{props.movie.name}</H3>
      <ImageWrapper>
        <Img src={props.movie.imageUrl} alt={props.movie.name} />
      </ImageWrapper>
    </MovieWrapper>
  );
};

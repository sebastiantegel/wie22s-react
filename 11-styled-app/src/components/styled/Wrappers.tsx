import styled from "styled-components";

interface IMovieWrapperProps {
  selected: boolean;
}

const SELECTED_BG_COLOR = "#448A21";

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MovieWrapper = styled.div`
  width: 30%;
  border: 1px solid green;
  background-color: ${(props: IMovieWrapperProps) =>
    props.selected ? SELECTED_BG_COLOR : "transparent"};
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

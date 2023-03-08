import styled, { keyframes } from "styled-components";

interface IButtonProps {
  bgColor?: string;
}

const rotation = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Button = styled.button`
  background-color: ${(props: IButtonProps) => props.bgColor || "white"};
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;

  animation: ${rotation} 1s linear infinite;
`;

export const SaveButton = styled(Button)`
  background-color: green;
  color: white;

  animation: none;
`;

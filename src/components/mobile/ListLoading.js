import styled, { keyframes } from "styled-components";

const loading_a = `
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const loading_x = keyframes`${loading_a}`;
const LoadingView = styled.div`
  width: 2rem;
  height: 2rem;
  border-width: 0.2rem;
  border-style: solid;
  border-color: ${(props) => props.color};
  border-left-color: transparent;
  border-radius: 50%;
  margin: 2rem auto;
  animation: ${loading_x} 0.8s linear 0s infinite normal;
  .placeholder{
    text-indent: -9999px;
  }
`;

const ListLoading = ({ color = "#333" }) => {
  return <LoadingView color={color}>
    <div className="placeholder">123</div>
  </LoadingView>;
};

export default ListLoading;

import styled from "styled-components";

const Button = styled.button`
  margin: 0 20px;
  width: 123px;
  height: 70px;
  font-family: Quicksand;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${props => (props.reset ? "#434a48" : "#4e6385")};
  &:hover {
  background-color: ${props => props.primary ? "#854e59" : "#434a48"}};
`;

export default Button;

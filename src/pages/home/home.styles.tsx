import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .MuiButton-root {
    margin-top: 0.7rem;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: auto;
  margin-bottom: 1rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  .MuiOutlinedInput-input {
    padding: 10px 5px;
  }

  p:nth-child(1) {
    margin-right: 0.5rem;
  }

  p:nth-child(3) {
    margin-left: 0.5rem;
  }
`;

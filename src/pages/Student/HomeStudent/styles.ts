import styled from 'styled-components';

export const MainHome = styled.main`
  margin-top: 4rem;
  width: 38rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;

  background: ${(props) => props.theme['main-div-backgroung']};
  & > div:first-child {
    margin-top: -2.6rem;
    display: flex;
    align-items: center;
    border-radius: 999px;
    padding: 0.5rem;
    background: inherit;

    img {
      width: 7rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    h2 {
      margin: 1.5rem 0;
      font-size: 1.4rem;
      font-weight: bold;
    }

    form {
      display: flex;
      flex-direction: column;

      & > div {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 0 1rem;
        margin-bottom: 1rem;
        border-radius: 12px;
        transition: 0.3s;

        background-color: ${(props) => props.theme['white']};

        label {
          color: ${(props) => props.theme['input-placeholder']};
        }

        input {
          outline: none;
          width: 100%;
          padding: 1rem 0;
          border: none;
          background: transparent;
        }
        &:focus-within {
          box-shadow: 0 0 0 2px ${(props) => props.theme['blue-300']};
        }
      }

      button {
        background: ${(props) => props.theme['blue-400']};
      }
    }

    p {
      font-weight: 600;
      margin: 1.5rem 0;
    }

    button {
      width: 30rem;
      height: 3.5rem;
      font-size: 1.25rem;
      border: none;
      border-radius: 12px;
      font-weight: bold;
      cursor: pointer;

      color: ${(props) => props.theme['white']};
      background: ${(props) => props.theme['blue-500']};
      transition: 0.4s;

      &:hover {
        filter: brightness(0.85);
      }
    }
  }
`;

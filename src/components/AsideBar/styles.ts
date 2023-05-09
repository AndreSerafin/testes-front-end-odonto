import styled from 'styled-components'

export const AsideBar = styled.aside`
  display: flex;
  width: 15rem;
  height: 100vh;
  flex-direction: column;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  background: ${(props) => props.theme['blue-500']};

  & > div:nth-child(1) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 0.5rem;
      color: ${(props) => props.theme.white};
      font-weight: 600;
      font-size: 1.3rem;
    }

    img:nth-child(1) {
      width: 10rem;
    }
    img:nth-child(2) {
      margin-top: 0.5rem;
      width: 7rem;
    }
  }

  div:nth-child(2) {
    margin-top: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;

      a {
        display: flex;
        align-items: center;
        padding: 1rem 0.5rem;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        gap: 1rem;

        text-decoration: none;
        font-size: 1.3rem;
        font-weight: bold;

        transition: 0.2s ease-in;

        color: ${(props) => props.theme.white};

        &.active {
          background: ${(props) => props.theme['blue-200']};
          border-right: 5px solid ${(props) => props.theme.white};
        }

        &:hover {
          filter: brightness(1.1);
        }
      }

      > div {
        display: flex;
        align-items: center;
        padding: 1rem 0.5rem;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        gap: 1rem;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: bold;

        transition: 0.2s ease-in;

        color: ${(props) => props.theme.white};

        span {
          overflow: hidden;
          width: 5rem;
        }

        button {
          background: inherit;
          border: inherit;
          color: inherit;
        }
      }
    }

    > a {
      margin: 0 2rem;
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      font-size: 1.25rem;
      text-decoration: none;
      color: ${(props) => props.theme.danger};

      span {
        margin-left: 0.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.white};
      }
    }
  }
`

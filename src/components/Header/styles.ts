import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0 2rem;

  background: ${(props) => props.theme['header-background']};
  img {
    width: 15rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    img {
      width: 8.5rem;
    }

    h2 {
      font-size: 0.9rem;
    }
  }
`;

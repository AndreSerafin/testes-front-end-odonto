import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../../components/Header';
import { Wrapper } from './styles';

export function HomeDefault() {
  return (
    <>
      <HeaderComponent />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

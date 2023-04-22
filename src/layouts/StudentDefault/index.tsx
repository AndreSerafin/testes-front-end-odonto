import { Outlet } from 'react-router-dom';
import { AsideBarComponent } from '../../components/AsideBar';
import { Wrapper } from './styles';

export function StudentDefault() {
  return (
    <Wrapper>
      <AsideBarComponent />
      <Outlet />
    </Wrapper>
  );
}

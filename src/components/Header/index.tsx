import { Header } from './styles';
import logoUni from '../../assets/images/LogoUni.png';

export function HeaderComponent() {
  return (
    <Header>
      <img src={logoUni} />
      <h2>21/04/2023</h2>
    </Header>
  );
}

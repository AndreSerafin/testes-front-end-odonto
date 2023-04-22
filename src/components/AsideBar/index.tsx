import { AsideBar } from './styles';
import whiteLogoUni from '../../assets/images/WhiteLogoUni.png';
import whiteLogoOdonto from '../../assets/images/WhiteLogoOdonto.png';
import { NavLink } from 'react-router-dom';
import { ListChecks, Package, SignOut } from 'phosphor-react';

export function AsideBarComponent() {
  return (
    <AsideBar>
      <div>
        <img src={whiteLogoUni} />
        <img src={whiteLogoOdonto} />
        <p>22/04/2023</p>
      </div>
      <div>
        <div>
          <NavLink to={'/alunos/entrada'}>
            <ListChecks size={35} />
            <span>Entrada</span>
          </NavLink>
          <NavLink to={'/alunos/saida'}>
            <Package size={35} />
            <span>Saída</span>
          </NavLink>
        </div>

        <NavLink to={'/alunos'}>
          <SignOut size={62} />
          <span>Sair</span>
        </NavLink>
      </div>
    </AsideBar>
  );
}

import { AsideBar } from './styles'
import whiteLogoUni from '../../assets/images/WhiteLogoUni.png'
import whiteLogoOdonto from '../../assets/images/WhiteLogoOdonto.png'
import { NavLink } from 'react-router-dom'
import {
  CaretDown,
  ClockCounterClockwise,
  ListChecks,
  Package,
  SignOut,
  UsersThree,
} from 'phosphor-react'

interface PropsType {
  loginType: string
}
export function AsideBarComponent({ loginType }: PropsType) {
  return (
    <AsideBar>
      <div>
        <img src={whiteLogoUni} alt="" />
        <img src={whiteLogoOdonto} alt="" />
        <p>22/04/2023</p>
      </div>
      <div>
        <div>
          {(() => {
            if (loginType === 'student') {
              return (
                <>
                  <NavLink to={'/aluno/entrada'}>
                    <ListChecks size={36} />
                    <span>Entrada</span>
                  </NavLink>
                  <NavLink to={'/aluno/saida'}>
                    <Package size={36} />
                    <span>Saída</span>
                  </NavLink>
                </>
              )
            } else if (loginType === 'employee') {
              return (
                <>
                  <NavLink to={'/colaborador/entrada'}>
                    <ListChecks size={36} />
                    <span>Entrada</span>
                  </NavLink>
                  <NavLink to={'/colaborador/saida'}>
                    <Package size={36} />
                    <span>Saída</span>
                  </NavLink>
                  <NavLink to={'/colaborador/historico'}>
                    <ClockCounterClockwise size={36} />
                    <span>Histórico</span>
                  </NavLink>
                </>
              )
            } else if (loginType === 'professor') {
              return (
                <>
                  <NavLink to={'/professor/entrada'}>
                    <ListChecks size={36} />
                    <span>Entrada</span>
                  </NavLink>
                  <NavLink to={'/professor/saida'}>
                    <Package size={36} />
                    <span>Saída</span>
                  </NavLink>
                  <NavLink to={'/professor/historico'}>
                    <ClockCounterClockwise size={36} />
                    <span>Histórico</span>
                  </NavLink>
                  <div>
                    <UsersThree size={36} />
                    <span>Gestão</span>
                    <button>
                      <CaretDown size={36} />
                    </button>
                  </div>
                </>
              )
            }
          })()}
        </div>

        <NavLink to={'/aluno'}>
          <SignOut size={36} />
          <span>Sair</span>
        </NavLink>
      </div>
    </AsideBar>
  )
}

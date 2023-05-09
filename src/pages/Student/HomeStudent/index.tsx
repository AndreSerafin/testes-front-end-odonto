import { MainHome } from './styles'
import logoOdonto from '../../../assets/images/LogoOdonto.png'
import { EyeClosed, Lock, User } from 'phosphor-react'

export function HomeStudent() {
  return (
    <MainHome>
      <div>
        <img src={logoOdonto} alt="" />
      </div>

      <div>
        <h2>Seja Bem Vindo!</h2>
        <form>
          <div>
            <label htmlFor="enrollment">
              <User size={20} weight="bold" />
            </label>
            <input
              id="enrollment"
              type="text"
              placeholder="Matrícula"
              maxLength={7}
            />
          </div>

          <div>
            <label htmlFor="password">
              <Lock size={20} weight="bold" />
            </label>

            <input
              id="password"
              type="password"
              placeholder="Senha"
              maxLength={4}
            />
            <EyeClosed size={25} />
          </div>

          <button>Entrar</button>
        </form>

        <p>Ainda não possui cadastro? </p>

        <button>Cadastrar-se</button>
      </div>
    </MainHome>
  )
}

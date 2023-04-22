import { MainHome } from './styles';
import logoOdonto from '../../../assets/images/LogoOdonto.png';
import { EyeClosed, Lock, User } from 'phosphor-react';

export function HomeStudent() {
  const passwordLength: number = 4;
  const userLength: number = 7;
  return (
    <MainHome>
      <div>
        <img src={logoOdonto} />
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
              maxLength={userLength}
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
              maxLength={passwordLength}
            />
            <EyeClosed size={25} />
          </div>

          <button>Entrar</button>
        </form>

        <p>Ainda não possui cadastro? </p>

        <button>Cadastrar-se</button>
      </div>
    </MainHome>
  );
}

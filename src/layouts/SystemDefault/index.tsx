import { Outlet } from 'react-router-dom'
import { AsideBarComponent } from '../../components/AsideBar'
import { Wrapper } from './styles'

interface PropsType {
  loginType: string
}

export function SystemDefault({ loginType }: PropsType) {
  return (
    <Wrapper>
      <AsideBarComponent loginType={loginType} />
      <Outlet />
    </Wrapper>
  )
}

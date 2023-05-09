import { Routes, Route } from 'react-router-dom'
import { HomeDefault } from '../layouts/HomeDefault'
import { HomeStudent } from '../pages/Student/HomeStudent'
import { SystemDefault } from '../layouts/SystemDefault'
import { EntriesStudent } from '../pages/Student/EntriesStudent'
import { DispatchStudent } from '../pages/Student/DispatchStudent'

import {
  EntriesEmployee,
  DispatchEmployee,
  HomeEmployee,
} from '../pages/Employee'
import { HistoryEmployee } from '../pages/Employee/HistoryEmployee'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeDefault />}>
        <Route path="/" element={<HomeStudent />} />
        <Route path="/colaborador" element={<HomeEmployee />} />
      </Route>

      <Route path="/aluno" element={<SystemDefault loginType="student" />}>
        <Route path="/aluno/entrada" element={<EntriesStudent />} />
        <Route path="/aluno/saida" element={<DispatchStudent />} />
      </Route>

      <Route
        path="/colaborador"
        element={<SystemDefault loginType="employee" />}
      >
        <Route path="/colaborador/entrada" element={<EntriesEmployee />} />
        <Route path="/colaborador/saida" element={<DispatchEmployee />} />
        <Route path="/colaborador/historico" element={<HistoryEmployee />} />
      </Route>
    </Routes>
  )
}

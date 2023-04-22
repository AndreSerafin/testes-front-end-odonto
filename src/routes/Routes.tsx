import { Routes, Route } from 'react-router-dom';
import { HomeDefault } from '../layouts/HomeDefault';
import { HomeStudent } from '../pages/Student/HomeStudent';
import { StudentDefault } from '../layouts/StudentDefault';
import { StudentEntries } from '../pages/Student/StudentEntries';
import { StudentDispatch } from '../pages/Student/StudentDispatch';

export function Router() {
  return (
    <Routes>
      <Route path="/alunos" element={<HomeDefault />}>
        <Route path="/alunos" element={<HomeStudent />} />
      </Route>

      <Route path="/alunos" element={<StudentDefault />}>
        <Route path="/alunos/entrada" element={<StudentEntries />} />
        <Route path="/alunos/saida" element={<StudentDispatch />} />
      </Route>
    </Routes>
  );
}

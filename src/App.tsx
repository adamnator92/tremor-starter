import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { Dashboard } from "./modules/dashboard";
import { NotFound } from "./modules/not-found";
import { UserCreate, UserDetails, UserEdit, UserList } from "./modules/users";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/users" element={<Layout />}>
        <Route index element={<UserList />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="details/:id" element={<UserDetails />} />
        <Route path="edit/:id" element={<UserEdit />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

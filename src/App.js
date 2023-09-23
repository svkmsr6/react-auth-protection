import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AuthPage from './components/auth/AuthPage';
import UserProfilePage from './components/user/UserProfilePage';
import WelcomePage from './components/welcome/WelcomePage';
import { AuthContext } from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  let authAwareRoutes = (
    <>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="/user" element={<Navigate to="/auth" replace />} />
    </>
  );

  if (authCtx.token) {
    authAwareRoutes = (
      <>
        <Route path="/user" element={<UserProfilePage />}></Route>
        <Route path="/auth" element={<Navigate to="/user" replace />} />
      </>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        {authAwareRoutes}
      </Routes>
    </Layout>
  );
}

export default App;

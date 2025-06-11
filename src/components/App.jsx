import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error/Error";
import "./App.css";
import Layout from "./Layout/Layout";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (<strong>Refreshing user...</strong>) : (
    <>
      <div>
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} /> } />
              <Route path="/login" element={<RestrictedRoute component={<LoginPage />} /> } />
              <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </>
  );
}

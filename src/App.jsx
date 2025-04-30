import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Layouts/Navigation";
import LeaderBoardPage from "./pages/LeaderBord";
import AddThreadPage from "./pages/AddThread";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import { asyncPreloadProcess } from "./states/isPreload/action";
import ErrorPage from "./pages/404";
import Loading from "./components/Elements/Loading";
const App = () => {
  const { authUser = null, isPreload = false } = useSelector((state) => state);
  // console.log(authUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
      <Loading />
      <main className="form-container">
        <Routes>
          <Route element={<LoginPage />} path="/*" />
          <Route element={<RegisterPage />} path="/register" />
        </Routes>
      </main>
      </>
     
    );
  }
  return (
    <>
    <Loading />
    <div>
      <header>
        <Navigation signOut={onSignOut} authUser={authUser} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/threads/:threadId" element={<DetailPage />} />
          <Route path="/new" element={<AddThreadPage />} />
          <Route path="/leaderboards" element={<LeaderBoardPage />} />
        </Routes>
      </main>
    </div>
    </>
  );
};

export default App;

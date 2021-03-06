import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import UserPage from './components/user/UserPage';
import WelcomePage from './components/WelcomePage';
import { AuthProvider } from './contexts/AuthContext';
import CreatePost from './components/posts/CreatePost';
import EditPost from './components/posts/EditPost';
import PrivateRoute from './features/PrivateRoute';
import FeedMain from "./components/feed/FeedMain";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={
          <PrivateRoute>
            <WelcomePage />
            <FeedMain />
            
          </PrivateRoute>
        }>
        </Route>
        <Route path='/create-post' element={
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
          }>
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="profile" element={<UserPage/> } />
          <Route path="/add-post" element={<CreatePost/>} />
          <Route path="/edit-post" element={<EditPost/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

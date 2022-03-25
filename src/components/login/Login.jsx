import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import s from './Login.module.scss';

export const Login = ({ loggedIn, setLoggedIn }) => {
  return (
    <section className={s.login}>
      {loggedIn ? (
        <div>
          <p className={s.login__loggedIn}>Skráður inn sem test</p>
          <Button onClick={() => setLoggedIn(false)}>Útskrá</Button>
        </div>
      ) : (
        <div className={s.login__loggedIn}>
          <p><Link to="/login">Innskráning</Link></p>
          <Button onClick={() => setLoggedIn(true)}>Nýskráning</Button>
        </div>
      )}
    </section>
  );
};
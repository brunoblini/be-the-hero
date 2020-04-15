import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Login failed, try again.');
    }

  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Sign in here</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange = {e => setId(e.target.value)}
            />
          <button className="button" type="submit">Enter</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            I don't have an account
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
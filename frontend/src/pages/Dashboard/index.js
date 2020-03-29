import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content, Ul } from './styles'

export default function Dashboard() {

  const [ spots, setSpot ] = useState([]);

  useEffect(() => {
    async function spot() {
      const response = await api.get('/spots');

      const spot = response.data.map(spot => ({
        ...spot,
        priceFormatted: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(spot.price)
      }));

      setSpot(spot);
    }
    spot();
  }, []);

  async function excluir(_id) {
    await api.delete('/spots', _id);
    setSpot(spots.filter(spot => spot._id !== _id));
  }

  return(
    <Container>
      <Link to="/register">Cadastrar um novo spot</Link>
      <Content>
        <Ul>
          {spots.map(spot => (
            <li key={spot._id}>
              <header style={{backgroundImage: `url(${spot.path_url})`}} />
              <div>
                <strong>{spot.company}-</strong>
                <strong>{spot.techs}</strong>
                <button onClick={() => excluir(spot._id)} >DELETE</button>
              </div>
              <span>{spot.price ? spot.priceFormatted : 'GRATUITO'}</span>
            </li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
import React, { useState, useMemo } from 'react';

import api from '../../services/api';
import history from '../../services/history';

import camera from '../../assets/camera.svg';

import { Container, Content, Form } from './styles';

export default function Spot() {
  const [file, setFile] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('file', file);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data);

    history.push('/');

  };

  return (
    <>
      <Container>
        <Content>
          <Form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
              <input type="file" onChange={event => setFile(event.target.files[0])} />
              <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input id="company" placeholder="Sua empresa incrível" value={company} onChange={event => setCompany(event.target.value)}/>

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input id="techs" placeholder="Quais tecnologias usam?" value={techs} onChange={event => setTechs(event.target.value)}/>

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input id="price" placeholder="Valor cobrado por dia" value={price} onChange={event => setPrice(event.target.value)}/>

            <button type="submit" className="btn">Cadastrar</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}
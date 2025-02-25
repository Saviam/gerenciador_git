import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton } from './styles';
import {FaArrowLeft} from 'react-icons/fa';

import api from '../../services/api';

export default function Repositorio() {
  const { repositorio } = useParams(); // Obtém o parâmetro da URL corretamente

  const [repoData, setRepoData] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!repositorio) return; // Evita erros caso o parâmetro não esteja definido

    async function load() {
      try {
        const nomeRepo = decodeURIComponent(repositorio);

        const [repositorioData, issuesData] = await Promise.all([
          api.get(`/repos/${nomeRepo}`),
          api.get(`/repos/${nomeRepo}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ]);

        setRepoData(repositorioData.data);
        setIssues(issuesData.data);
      } catch (error) {
        console.error('Erro ao carregar repositório:', error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [repositorio]);

  if(loading){
    return(
        <Loading>
            <h1>Carregando...</h1>
        </Loading>
    )
  }

  return (
    <Container>

        <BackButton to="/">
            <FaArrowLeft color='#000' size={30} />
        </BackButton>
        <Owner>
            <img 
            src={repoData.owner.avatar_url} 
            alt={repoData.owner.login} />
            <h1>{repoData.name}</h1>
            <p>{repoData.description}</p>
        </Owner>
    </Container>
  )
}

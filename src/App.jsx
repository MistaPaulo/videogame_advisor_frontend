import React, { useState } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import GameList from './components/GameList';
import GameModal from './components/GameModal';
import { chat } from './services/api';

export default function App() {
  const [games, setGames] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async prompt => {
    setLoading(true);
    setError('');
    setGames([]);
    try {
      const { data } = await chat(prompt);
      setGames(data.games);
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao obter recomendações.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5 min-vh-100">
      <header className="text-center mb-5">
        <h1 className="display-4">Conselheiro de Videojogos</h1>
        <p className="lead">
          Diz-me o que gostas e encontra o teu próximo jogo favorito!
        </p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status" size="sm" className="me-2" />
          <span>A carregar recomendações…</span>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && games.length > 0 && (
        <GameList games={games} onCardClick={setSelected} />
      )}

      <GameModal
        show={!!selected}
        game={selected}
        onHide={() => setSelected(null)}
      />
    </Container>
  );
}

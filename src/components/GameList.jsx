import React from 'react';
import GameCard from './GameCard';

export default function GameList({ games, onCardClick }) {
  if (!games || games.length === 0) {
    return <p className="text-center">Nenhum jogo encontrado.</p>;
  }

  return (
    <div className="row">
      {games.map(g => (
        <GameCard key={g.slug} game={g} onClick={onCardClick} />
      ))}
    </div>
  );
}

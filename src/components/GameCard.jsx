import React from 'react';
import { Badge } from 'react-bootstrap';

export default function GameCard({ game, onClick }) {
  const {
    name,
    background_image,
    released,
    metacritic,
    rating,
    genres,
    platforms
  } = game;
  const year = released?.slice(0, 4);

  const mcColor = metacritic >= 75
    ? 'success'
    : metacritic >= 50
      ? 'warning'
      : 'danger';

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow-sm bg-transparent"
        onClick={() => onClick(game)}
        style={{
          cursor: 'pointer',
          border: '1px solid var(--theme-accent)',
        }}
      >
        <img
          src={background_image}
          className="card-img-top"
          alt={name}
          style={{ height: '180px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <h5
            className="card-title"
            style={{ color: 'var(--theme-accent)', fontWeight: 600 }}
          >
            {name}
          </h5>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <small style={{ color: 'var(--theme-accent)' }}>{year}</small>

            <Badge bg={mcColor}>
              MC {metacritic != null ? metacritic : 'N/A'}
            </Badge>

            <Badge className="badge-rating">
              {rating}★
            </Badge>
          </div>

          <div className="mb-3">
            <h6 style={{ color: 'var(--theme-on-surface)', fontWeight: 600 }}>
              Géneros
            </h6>
            <div className="d-flex flex-wrap">
              {genres.map(g => (
                <Badge
                  key={g.slug}
                  className="badge-genre me-1 mb-1"
                >
                  {g.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <h6 style={{ color: 'var(--theme-on-surface)', fontWeight: 600 }}>
              Plataformas
            </h6>
            <div className="d-flex flex-wrap">
              {platforms.map(p => (
                <Badge
                  key={p.platform.id}
                  className="badge-platform me-1 mb-1"
                >
                  {p.platform.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Modal, Badge, Row, Col, Carousel } from 'react-bootstrap';

export default function GameModal({ show, game, onHide }) {
  if (!game) return null;

  const {
    name,
    released,
    metacritic,
    rating,
    genres,
    tags,
    platforms,
    stores,
    short_screenshots = [],
    background_image,
  } = game;

  const mcColor = metacritic >= 75
    ? 'success'
    : metacritic >= 50
      ? 'warning'
      : 'danger';

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      {background_image && (
        <div
          style={{
            background: `url(${background_image}) center/cover`,
            height: 200,
          }}
        />
      )}
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'var(--theme-accent)' }}>
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col md={4}>
            <p>
              <strong>Lançamento:</strong><br />
              <span style={{ color: 'var(--theme-accent)' }}>
                {released}
              </span>
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Metacritic:</strong><br />
              <Badge bg={mcColor} className="fs-6">
                {metacritic ?? 'N/A'}
              </Badge>
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Nota RAWG:</strong><br />
              <Badge className="badge-rating fs-6">
                {rating}★
              </Badge>
            </p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <p>
              <strong>Géneros:</strong><br />
              {genres.map(g => (
                <Badge className="badge-genre me-1 mb-1" key={g.slug}>
                  {g.name}
                </Badge>
              ))}
            </p>
            <p>
              <strong>Tags:</strong><br />
              {tags.slice(0, 10).map(t => (
                <Badge className="badge-tag me-1 mb-1" key={t.slug}>
                  {t.name}
                </Badge>
              ))}
            </p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <p>
              <strong>Plataformas:</strong><br />
              {platforms.map(p => (
                <Badge
                  className="badge-platform me-1 mb-1"
                  key={p.platform.id}
                >
                  {p.platform.name}
                </Badge>
              ))}
            </p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Lojas:</strong><br />
              {stores.map(s => (
                <Badge className="badge-store me-1 mb-1" key={s.store.id}>
                  {s.store.name}
                </Badge>
              ))}
            </p>
          </Col>
        </Row>

        {short_screenshots.length > 0 && (
          <Carousel variant="dark" indicators={short_screenshots.length > 1}>
            {short_screenshots.map(sc => (
              <Carousel.Item key={sc.id}>
                <div
                  style={{
                    height: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#000',
                  }}
                >
                  <img
                    src={sc.image}
                    alt="Screenshot"
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Modal.Body>
    </Modal>
  );
}

import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (prompt.trim()) {
      onSearch(prompt.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center my-4">
      <input
        type="text"
        className="form-control w-50 theme-input"
        placeholder="Descreve o jogo que procuras..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
    </form>
  );
}

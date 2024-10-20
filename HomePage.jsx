import React, { useState } from 'react';

const HomePage = () => {
  const [story, setStory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (story.length < 3) {
      setError('Story must be at least 3 characters long.');
    } else {
      setError('');
      alert(`Story submitted: ${story}`);
      setStory('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Share Your Story</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Write your story..."
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;

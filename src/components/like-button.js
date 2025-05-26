'use client';

import { useState } from 'react';

export function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((state) => state + 1);
  }

  return <button onClick={handleClick}>Like({likes})</button>;
}

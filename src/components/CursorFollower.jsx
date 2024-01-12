import React, { useState, useEffect } from 'react';
import '../styles/CursorFollower.css'

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-follower">
      <div className="follower-icon" style={{ left: cursorPosition.x, top: cursorPosition.y, cursor:'🐟' }}>
      🐟
      </div>
    </div>
  );
};

export default CursorFollower;
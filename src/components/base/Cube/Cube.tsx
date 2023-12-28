import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Cube: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={ref}>
      <meshStandardMaterial attach="material" color="#8AC"/>
    </Box>
  );
};

export default Cube;

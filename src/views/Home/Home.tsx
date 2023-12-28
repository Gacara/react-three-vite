import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '../../components/base/Cube/Cube';


const Home = () => {

  return (
    <div className='home' >
      <Canvas>
        <ambientLight intensity={1} />
        <Cube />
        <OrbitControls />
      </Canvas>
    </div>
  );

};

export default Home;

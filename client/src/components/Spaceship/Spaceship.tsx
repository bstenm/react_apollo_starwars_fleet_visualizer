import React, { useRef } from 'react'
import { ReactThreeFiber } from 'react-three-fiber';

const Component: React.FC<{
    id: string,
    color: string,
    // _TODO
    position: any,
    onShoot: Function,
    onPointerOut: Function,
    onPointerOver: Function,
}> = ({ onPointerOver, onPointerOut, onShoot, position, color, id }) => {
    const mesh = useRef<ReactThreeFiber.Object3DNode<any, any>>(null);

    return (
        <mesh
            ref={mesh}
            position={position}
            scale={[0.8, 0.8, 0.8]}
            onClick={e => onShoot(id)}
            onPointerOut={e => onPointerOut(id)}
            onPointerOver={e => onPointerOver(id)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    );
};

export default Component;

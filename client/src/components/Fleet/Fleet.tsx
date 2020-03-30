import { Canvas } from 'react-three-fiber';
import difference from 'lodash/difference';
import React, { memo, PropsWithChildren } from 'react';

import Spaceship from '../Spaceship';
import { spaceshipColors } from '../../config';

const generateRandomCoord = (scope: number) => {
    return Math.random() * (Math.random() >= 0.5 ? -1 : 1) * scope;
};

const Fleet: React.FC<{
    items: string[],
    onClickItem: Function,
    onPointerOut: Function,
    onPointerOver: Function,
}> = ({
    items,
    onClickItem,
    onPointerOut,
    onPointerOver,
}) => (
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {items.map((item, i) => {
                    const x: number = generateRandomCoord(4);
                    const y: number = generateRandomCoord(2);
                    const z: number = generateRandomCoord(1);
                    return <Spaceship
                        id={item}
                        key={item}
                        color={spaceshipColors[i % spaceshipColors.length]}
                        position={[x, y, z]}
                        onShoot={onClickItem}
                        onPointerOut={onPointerOut}
                        onPointerOver={onPointerOver}
                    />
                })}
            </Canvas>
        );

export default memo(Fleet, (
    prevProps: Readonly<PropsWithChildren<{ items: string[]; }>>,
    nextProps: Readonly<PropsWithChildren<{ items: string[]; }>>,
) => {
    const diff = difference(prevProps.items, nextProps.items);
    return diff.length === 0;
});
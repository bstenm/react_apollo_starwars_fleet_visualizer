import { Canvas } from 'react-three-fiber';
import difference from 'lodash/difference';
import React, { memo, PropsWithChildren } from 'react';

import Spaceship from '../Spaceship';
import { spaceshipColors, initialXPosition } from '../../config';

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
                    const xPosition: number = initialXPosition + (i * 1.8);
                    const colorIndex: number = Math.round(Math.random() * spaceshipColors.length);
                    return <Spaceship
                        id={item}
                        key={item}
                        color={spaceshipColors[colorIndex]}
                        position={[xPosition, 0, 0]}
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
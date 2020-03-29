import React, { memo } from 'react';

function PlanetName() {
    console.log('RENDER SATURN!');
    return (
        <div style={{ padding: "50px 0 0 0" }}>Saturn</div>
    );
}

export default memo(PlanetName);

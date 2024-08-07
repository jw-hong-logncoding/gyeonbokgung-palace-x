import React, { useState } from 'react';
import InteractiveMap from './InteractiveMap';
import BuildingList from './BuildingList';

const ParentComponent = ({ isMobile, drawerWidth }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  return (
    <div style={{ display: 'flex' }}>
      <BuildingList onIconClick={handleIconClick} />
      <InteractiveMap
        isMobile={isMobile}
        drawerWidth={drawerWidth}
        selectedIcon={selectedIcon}
        onIconClick={handleIconClick}
      />
    </div>
  );
};

export default ParentComponent;

import React from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active 
    ? 'text-white border-green-500'
    : 'text-[#ADB7BE]';

  return (
    <button 
      className={`mr-3 font-semibold hover:text-white border-b ${buttonClasses}`} 
      onClick={selectTab}
    >
      {children}
    </button>
  );
}

export default TabButton;

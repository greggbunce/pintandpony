import React, { useEffect, useState } from 'react';

function getDefaultMode() {
  const savedMode = localStorage.getItem('mode');
  return savedMode ? savedMode : 'light';
}

function App() {




    const [mode, setMode] = useState(getDefaultMode()); 
    useEffect(() => {
      if (mode === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('mode', mode);
    }, [mode]);

    return (

        
      <div className='container'>
        <span 
           className='mode-switch'
           onClick={() => 
             setMode(mode === 'dark' ? 'light' : 'dark')
           }
        >
           {mode === 'dark' ? 'Light mode' : 'Dark mode'}
        </span>
        {/* my other elements */}
      </div>
    )
}
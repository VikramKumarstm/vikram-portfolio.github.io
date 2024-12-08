import React from 'react';
import './DownloadCV.css';

function DownloadCV({text}) {

    const handleDownload = () => {
        // You can trigger a download of the CV file stored in the 'public' folder
        const link = document.createElement('a');
        link.href = '/Vikram_Resume.pdf';  // Make sure the path matches your file location
        link.download = 'vikram_Resume.pdf';
        link.click();
      };

  return (
    <button onClick={handleDownload} className='cv-btn'>{text}</button>
  )
}

export default DownloadCV
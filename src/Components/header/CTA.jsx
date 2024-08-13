import React from 'react'


const CTA = () => {

  const handleDownloadAndView = () => {
    // Google Drive view link
    const driveViewLink = "https://drive.google.com/file/d/1VfVrYcDNkRc-kbQOh3AjUqWD1KZiaoip/view?usp=sharing/&export=download";
    // Google Drive direct download link
    const driveDownloadLink = "https://drive.google.com/uc?export=download&id=1VfVrYcDNkRc-kbQOh3AjUqWD1KZiaoip";

    // Open the resume in a new tab
    window.open(driveViewLink, '_blank');

    // Trigger the download
    const a = document.createElement('a');
    a.href = driveDownloadLink;
    a.download = 'Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    };

  return (
    <div className='cta'>
        <a onClick={handleDownloadAndView} className='btn' target="_blank">My Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA

import React from 'react';
import "./DownloadResume.css";

const DownloadResume = () => {
    return (
        <div className="downloadResume">
            <div className="text">
            <a
                href="https://drive.google.com/file/d/1Klp1hAH2A6k2GWPs5vFpYxB-RKNREAOW/view?usp=sharing"
                download
                >
                <h2> Click to Download</h2>
            </a>
            </div>
        </div>
    );
};

export default DownloadResume;
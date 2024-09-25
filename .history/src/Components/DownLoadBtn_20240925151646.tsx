// Components/DownloadBtn.tsx
import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface DownloadBtnProps {
  imageUrls: string[];
}

const DownloadBtn: React.FC<DownloadBtnProps> = ({ imageUrls }) => {
  const downloadImages = async () => {
    const zip = new JSZip();
    const folder = zip.folder('images');

    for (const url of imageUrls) {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileName = `${Date.now()}_${url.split('/').pop()}`;

      if (folder && fileName) {
        folder.file(fileName, blob);
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'images.zip');
  };

  return <button onClick={downloadImages}>下载所有图片</button>;
};

export default DownloadBtn;
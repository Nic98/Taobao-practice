import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const downloadImages = async (imageUrls: string[]) => {
  const zip = new JSZip();
  const folder = zip.folder('images');

  for (const url of imageUrls) {
    const response = await fetch(url);
    const blob = await response.blob();
    const fileName = url.split('/').pop();
    if (folder && fileName) {
      folder.file(fileName, blob);
    }
  }

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'images.zip');
};

export default function DownloadBtn(props: any) { 

  return (
    <button onClick={downloadImages} className="download-btn">Download</button>
  );
}
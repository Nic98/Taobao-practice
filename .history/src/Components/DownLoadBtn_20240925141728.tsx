import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const download = async () => {
  const zip = new JSZip();
  const folder = zip.folder('images');

  const images = [
    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    // 这里添加所有其他图片的 URL
  ];

  for (const url of images) {
    const response = await fetch(url);
    const blob = await response.blob();
    folder?.file('')
  }

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'images.zip');
};

export default function DownloadBtn(props: any) { 

  return (
    <button onClick={download} className="download-btn">Download</button>
  );
}
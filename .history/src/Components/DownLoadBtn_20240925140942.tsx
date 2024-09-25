import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function download = async () => {
  
}

export default function DownloadBtn(props: any) { 

  return (
    <button onClick={download} className="download-btn">Download</button>
  );
}
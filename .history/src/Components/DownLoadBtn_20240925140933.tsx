import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function download = async () => {
  const zip = new JSZip();
  zip.file("Hello.txt", "Hello World\n");
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "example.zip");
}

export default function DownloadBtn(props: any) { 

  return (
    <button onClick={download} className="download-btn">Download</button>
  );
}
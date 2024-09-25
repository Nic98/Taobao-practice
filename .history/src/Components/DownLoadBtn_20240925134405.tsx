import JSZip from 'jszip';
import { saveAs } from 'file-saver';




export default function ProductCard(props: any) { 

  return (
    <button onClick={download} className="download-btn">Download</button>
  );
}
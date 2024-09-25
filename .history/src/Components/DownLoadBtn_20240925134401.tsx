import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import button from './Styles/button.css';
export default function ProductCard(props: any) { 

  return (
    <button onClick={download} className="download-btn">Download</button>
  );
}
import JSZip from 'jszip';
import { saveAs } from 'file-saver';



function download() {
  const zip = new JSZip();
  zip.file("Hello.txt", "Hello World\n");
  zip.generateAsync({type:"blob"})
  .then(function(content) {
      saveAs(content, "example.zip");
  });
}
export default function Download(props: any) { 

  return (
    <button onClick={download} className="download-btn">Download</button>
  );
}
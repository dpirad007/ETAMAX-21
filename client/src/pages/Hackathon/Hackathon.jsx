import React, { Fragment, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import "./Hackathon.css";
import loginbg from "../../assets/etamaxbg.png";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Hackathon = () => {
  const [numPages, setNumPages] = useState(null);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Fragment>
      <div className="pdf-display" style={{ backgroundImage: `url(${loginbg})` }}>
      <Document 
          file={process.env.PUBLIC_URL+'/hackathon problem statements_UPDATED.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
        >
        
        {Array.from({length: numPages}, (_, i) => i + 1).map(page => (
          <Page pageNumber={page} />
        ))}

      </Document>
      </div>
    </Fragment>
  );
  };
  
  export default Hackathon;
  
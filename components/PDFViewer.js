import { Document, Page } from 'react-pdf';

export default function PDFViewer({ pdfUrl }) {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
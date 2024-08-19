import React from "react";
import PdfViewer from "./pdfViewer";

const App = () => {
  const pdfUrl =
    "https://firebasestorage.googleapis.com/v0/b/sqauredcircle.appspot.com/o/images%2F1723720533899?alt=media&token=2d71c138-35c7-4490-bae6-2bb3f6f47f34";

  return (
    <div className="App">
      <h1>PDF Viewer</h1>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default App;

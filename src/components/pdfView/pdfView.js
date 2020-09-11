import React, { Component } from "react";

// import { Document, Page } from "react-pdf/dist/entry.webpack"
import { Document, Page, pdfjs } from "react-pdf";
import sample from './sample.pdf'

export default class PdfView extends Component {
  state = { numPages: null, pageNumber: 1 };

  constructor(props){
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
}

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            // file = {{url: 'https://firebasestorage.googleapis.com/v0/b/reactsearch-d67f0.appspot.com/o/sample.pdf?alt=media&token=f030599c-0615-463c-803a-5e2057a2d518'}}
            // file={{ url: 'https://www.academia.edu/40549219/The_Road_to_React_with_Firebase'}}
            file= {sample}
            
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

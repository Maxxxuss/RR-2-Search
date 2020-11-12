import React, { Component } from "react";
import * as  cors from "cors"


// import { Document, Page } from "react-pdf/dist/entry.webpack"
import { Document, Page, pdfjs } from "react-pdf";
import sample from './sample.pdf'

export default class PdfView extends Component {

// https://stackoverflow.com/questions/37760695/firebase-storage-and-access-control-allow-origin/37765371
  state = {
     numPages: null,
     pageNumber: 1,
  };

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
    const {file} = this.props
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
          
            file = {file}
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

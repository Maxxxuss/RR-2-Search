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
     activeNote: "https://firebasestorage.googleapis.com/v0/b/reactsearch-d67f0.appspot.com/o/chat%2Fpublic%2F684df0a1-9d3d-49be-9e89-3d2ddfd905cb.jpg?alt=media&token=e908b15d-f3ef-47c3-91cb-15548f25e31f"

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
    // const {activeNote} = this.props
    const { pageNumber, numPages, docUrl, activeNote } = this.state;

    return (
      <div>
        <script crossorigin src="...">
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            // file = {{url: 'https://firebasestorage.googleapis.com/v0/b/reactsearch-d67f0.appspot.com/o/sample.pdf?alt=media&token=f030599c-0615-463c-803a-5e2057a2d518'}}
            file={{url: 'https://firebasestorage.googleapis.com/v0/b/reactsearch-d67f0.appspot.com/o/chat%2Fpublic%2Fsample.pdf?alt=media&token=8571da8d-c97e-49b3-8842-da96d13608c1'}}
            // file = {{url: "https://firebasestorage.googleapis.com/v0/b/reactsearch-d67f0.appspot.com/o/chat%2Fpublic%2F684df0a1-9d3d-49be-9e89-3d2ddfd905cb.jpg?alt=media&token=e908b15d-f3ef-47c3-91cb-15548f25e31f"} }
            // file= {sample}
            
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
        </script>
      </div>
    );
  }
}

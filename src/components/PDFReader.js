import React from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { propertiesPlugin } from '@react-pdf-viewer/properties'
import '@react-pdf-viewer/properties/lib/styles/index.css'
//import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
//import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/full-screen/lib/styles/index.css'
const PDFReader = (props) => {
  const { data } = props
  const pdf = data.text
  //const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const propertiesPluginInstance = propertiesPlugin();
  //const fullScreenPluginInstance = fullScreenPlugin()
  return (
    <div >
      {/*<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>*/}
      <Worker workerUrl='/assets/lib/pdf.worker.min.js'>
        <Viewer
          fileUrl={pdf}
          plugins={[propertiesPluginInstance]}
          theme='right'
          defaultScale={SpecialZoomLevel.PageFit}>
        </Viewer>
      </Worker>
    </div>
  );

}

export default PDFReader
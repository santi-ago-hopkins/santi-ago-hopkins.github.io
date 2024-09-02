import React, { useState } from "react"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

const PDFPreview = ({ fileUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        style={{
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          height: '300px', // Increased height
          overflow: 'hidden'
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div style={{ height: "100%" }}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
      </div>

      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '90%', // Increased width
              height: '90%', // Increased height
              position: 'relative'
            }}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'white',
                border: '1px solid black',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001 // Ensure it's above the PDF viewer
              }}
            >
              ×
            </button>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <div style={{ height: "100%" }}>
                <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
              </div>
            </Worker>
          </div>
        </div>
      )}
    </>
  )
}

export default PDFPreview

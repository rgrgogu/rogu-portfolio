import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProjectsContextProvider } from './context/ProjectContext.jsx'
import { InquirysContextProvider } from './context/InquiryContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectsContextProvider>
      <InquirysContextProvider>
        <App />
      </InquirysContextProvider>
    </ProjectsContextProvider>
  </React.StrictMode>
);

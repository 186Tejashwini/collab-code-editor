import React from "react";
import { Editor } from "@monaco-editor/react";

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h2 style={{ textAlign: "center" }}>🚀 Collaborative Code Editor (Demo)</h2>
      
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Start typing your code here..."
        theme="vs-dark"
      />
    </div>
  );
}

export default App;

/*!
 * HighlightAndSearch
 * Copyright (c) 2024 Bhavesh Sharma
 * Licensed under the MIT License
 */

import React, { useState,useEffect } from 'react';

import './App.css'
import InputTextBox from './InputTextBox';
import OutputTextBox from './OutputTextBox';

function App() {
  const [selectedText, setSelectedText] = useState([]);

  const clearState = () => {
    setSelectedText([]);
    document.querySelectorAll('span[style="background-color: yellow;"]').forEach(span => {
      const parent = span.parentNode;
      while (span.firstChild) {
        parent.insertBefore(span.firstChild, span);
      }
      parent.removeChild(span);
    });
  };
  const undoLastSelection = () => {
    if (selectedText.length === 0) return;

    const lastSelection = selectedText[selectedText.length - 1];
    setSelectedText(prev => prev.slice(0, -1));

    const highlightedSpans = document.querySelectorAll('span[style="background-color: yellow;"]');
    highlightedSpans.forEach(span => {
      if (span.textContent === lastSelection) {
        const parent = span.parentNode;
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
      }
    });
  };
  

  return (
    <div className="flex flex-col h-screen p-4">
    <div className="flex gap-4  mb-4">
      <button
        onClick={undoLastSelection}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Undo Last Selection
      </button>
      <button
        onClick={clearState}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear State
      </button>
    </div>
    
    <div className="flex h-fill-available flex-1 overflow-hidden">
      <div className="flex-1 overflow-auto bg-white border border-black rounded p-4">
        <InputTextBox setSelectedText={setSelectedText} />
      </div>
      <div className="flex-1 overflow-auto bg-white border border-black rounded p-4">
        <OutputTextBox selectedText={selectedText} />
      </div>
    </div>

    {/* {selectedText.length > 0 && (
      <div className="mt-4">
        <h3 className="text-lg font-bold">Selected Text:</h3>
        <ul>
          {selectedText.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    )} */}
  </div>
  )
}

export default App

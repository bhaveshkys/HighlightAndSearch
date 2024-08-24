import React, { useEffect } from 'react'

const InputTextBox = ({setSelectedText}) => {
    const handleTextSelection = () => {
        const selection = window.getSelection();
        if (selection.toString()) {
          const selectedRange = selection.getRangeAt(0);
          const span = document.createElement('span');
          span.style.backgroundColor = 'yellow';
          selectedRange.surroundContents(span);
    
          setSelectedText(prevSelectedText => [...prevSelectedText, selection.toString()]);
        }
      };
      useEffect(() => {
        document.addEventListener('mouseup', handleTextSelection);
    
        return () => {
          document.removeEventListener('mouseup', handleTextSelection);
        };
      }, []);
  return (
    <div className=' flex justify-center items-center '>
      <div className='p-[20px]  '>
        <p>
        appleeeee zxyyyy Hypertension, commonly known as high blood pressure, is a medical condition where the blood
        pressure in the arteries is persistently elevated. This condition often has no symptoms but can lead to serious health problems,
        such as heart disease and stroke. Managing hypertension typically involves lifestyle changes like adopting a low-sodium diet, 
        regular physical activity, and sometimes medication. If left untreated, hypertension can damage vital organs like the heart and kidneys, leading to chronic kidney
        disease and other complications
        </p>
      </div>

     
    </div>
  )
}

export default InputTextBox

import React, { useEffect, useRef } from 'react'
// @ts-ignore
import longtext from '../public/longtext.json'
const OutputTextBox = ({ selectedText }) => {
    const originalText=longtext.content;
    const highlightText = (text, highlights) => {
        let highlightedText = text;
        highlights.forEach((highlight) => {
          const regex = new RegExp(`(${highlight})`, 'gi');
          highlightedText = highlightedText.replace(regex, '<span style="background-color: yellow;">$1</span>');
        });
        return highlightedText;
      };
    
      const highlightedText = highlightText(originalText, selectedText);

      const outputRef = useRef(null);

      useEffect(() => {
        if (outputRef.current) {
            const highlightedSpans = outputRef.current.querySelectorAll('span[style="background-color: yellow;"]');
            
            const spanMap = new Map();
            highlightedSpans.forEach(span => {
                spanMap.set(span.textContent.toLowerCase(), span);
            });
    
            const orderedSpans = selectedText.map(text => spanMap.get(text.toLowerCase())).filter(span => span);
    
            if (orderedSpans.length > 0) {
                const lastOrderedSpan = orderedSpans[orderedSpans.length - 1];
                console.log("lastOrderedSpan", lastOrderedSpan);
    
                if (lastOrderedSpan) {
                    const spanBounds = lastOrderedSpan.getBoundingClientRect();
                    const outputBounds = outputRef.current.getBoundingClientRect();
    
              if (spanBounds.top > outputBounds.top || spanBounds.bottom < outputBounds.bottom) {
                lastOrderedSpan.scrollIntoView({   });
              }
            }
          }
        }
      }, [selectedText]);
  return (
    <div  ref={outputRef} className='flex  justify-center items-center '>
    <div className='p-[40px] overflow-auto' dangerouslySetInnerHTML={{ __html: highlightedText }} />
  </div>
  )
}

export default OutputTextBox
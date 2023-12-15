import React, { useEffect } from 'react';
import Children from './Children'

export default function Parent() {

    useEffect(() => {
        // Code to run after component renders
        console.log('Parent Component has rendered');
    
        // Cleanup code (optional)
        return () => {
          console.log('Parent Component will unmount or before next render');
          // Perform cleanup tasks here
        };
      }, []); // Empty depend


  return (
    <>
        <div>Parent</div>
        <div>{console.log("Parent inside div")}</div>
        <Children/>
    </>
  )
}

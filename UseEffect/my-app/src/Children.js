import React, { useEffect } from 'react';


export default function Children() {
    useEffect(() => {
        // Code to run after component renders
        console.log('Children Component has rendered');
    
        // Cleanup code (optional)
        return () => {
          console.log('Children Component will unmount or before next render');
          // Perform cleanup tasks here
        };
      }, []); // Empty depend


  return (
    <>
      <div>Children</div>
      <div>{console.log("Chilren inside div")}</div>
          
    </>
  )
}

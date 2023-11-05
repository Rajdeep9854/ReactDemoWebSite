import { useState } from 'react';

import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './Examples';

function App() {
 
  
  return (
    <>
      <Header />
    <main>
      
      <CoreConcepts         />
      <Examples  />

      </main>
    </>
  );
  }

export default App;

// rendering content conditionally 
/*  {textContent ? (<div id="tab-content">

            <h3>{EXAMPLES[textContent].title}</h3>
            <p>{EXAMPLES[textContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[textContent].code}
              </code>
            </pre>

          </div> ) : <p>Please select a topic</p>}*/

// rendering content conditionally part 2 
/* 
   {!textContent && <p>Please select a topic</p>} 
          {textContent && (<div id="tab-content">

            <h3>{EXAMPLES[textContent].title}</h3>
            <p>{EXAMPLES[textContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[textContent].code}
              </code>
            </pre>

          </div>)}
*/



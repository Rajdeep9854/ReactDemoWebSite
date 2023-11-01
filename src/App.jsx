import { useState } from 'react';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data'
import { EXAMPLES } from './data';

function App() {
  const [textContent,setTextContent] = useState()
  function handleSelect(selectedButton){
    setTextContent(selectedButton)
    console.log(textContent);
  }
  let tabContent = <p>Please select a topic</p>;
  if(textContent){
    tabContent = (<div id="tab-content">

      <h3>{EXAMPLES[textContent].title}</h3>
      <p>{EXAMPLES[textContent].description}</p>
      <pre>
        <code>
          {EXAMPLES[textContent].code}
        </code>
      </pre>

    </div>)
  }
  return (
    <div>
     <Header />
     
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreItem)=><CoreConcept key={coreItem.title}  {...coreItem} />)}
            
          </ul>
        </section>
       <section id='examples'>
        <h2>Examples</h2>
        <menu>
            <TabButton 
            onSelect={() => handleSelect("components")}
            isSelected={textContent==='components'}
            >Components</TabButton>
            <TabButton 
              isSelected={textContent === 'jsx'}
            onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton 
              isSelected={textContent === 'props'}
            onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton 
              isSelected={textContent === 'state'}
            onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
         
         {tabContent}
       </section>
      </main>
    </div>
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



import TabButton from "./components/TabButton"
import { useState } from "react";
import { EXAMPLES } from "./data";
import Section from "./components/Section";
import Tabs from "./components/Tabs";

export default function Examples() {

    const [textContent, setTextContent] = useState()
    function handleSelect(selectedButton) {
        setTextContent(selectedButton)
        console.log(textContent);
    }
    let tabContent = <p>Please select a topic</p>;
    if (textContent) {
        tabContent = (<div id="tab-content">

            <h3>{EXAMPLES[textContent].title}</h3>
            <p>{EXAMPLES[textContent].description}</p>
            <pre>
                <code>
                    {EXAMPLES[textContent].code}
                </code>
            </pre>

        </div>)}
return (
<>
        <Section id='examples' title="Examples">
            <Tabs 
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton
                            onClick={() => handleSelect("components")}
                            isSelected={textContent === 'components'}
                        >Components</TabButton>
                        <TabButton
                            isSelected={textContent === 'jsx'}
                            onClick={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton
                            isSelected={textContent === 'props'}
                            onClick={() => handleSelect("props")}>Props</TabButton>
                        <TabButton
                            isSelected={textContent === 'state'}
                            onClick={() => handleSelect("state")}>State</TabButton>
                    </>
                }
            >{tabContent}</Tabs>
            
            

            
        </Section>
    </>
)
}

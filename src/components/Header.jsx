import reactImg from '../assets/react-core-concepts.png'

const reactDescriptions = ['Crutial', 'Fundamental', 'Important']

function getRandomValue(max) {
    return Math.floor(Math.random() * (max))
}


function Header() {
    const descriptions = reactDescriptions[getRandomValue(reactDescriptions.length)]
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {descriptions} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

export default Header
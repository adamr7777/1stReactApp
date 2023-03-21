




const root = ReactDOM.createRoot(document.querySelector('#root'));


function Header() {
    return (
        <header>
            <nav className='nav-div'>
                <img className='react-img' src='react-logo.png'/>
                <ul className='nav-ul'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact Me</li>
                </ul>
            </nav>
        </header>
    )
}



function Footer() {
    return (
        <footer>
            <small>"© 20xx Adomas development. All rights reserved."</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>What's good about React:</h1>
            <ol>
                <li>Cool kids</li>
                <li>Employability</li>
            </ol>
        </div>
    )
}



function App() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}


root.render(<App/>);




function Page () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function Header () {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="./react-logo.png"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent () {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
            </ol>
        </div>
    )
}

function Footer () {
    return (
        <footer className="footer">
            <small>© 2022 Jim Ezesinachi. All rights reserved</small>
        </footer>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));
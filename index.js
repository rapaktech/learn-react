function MainContent() {
    return (
        <h1>Save The World</h1>
    )
}

ReactDOM.render(<ul>
        <li>First list item</li>
        <li>Second list item</li>
    </ul>, 
    document.getElementById('root-one'))

ReactDOM.render(<div>
    <MainContent />
</div>, 
document.getElementById('root-two'))

const page = (
    <div>
        <h1 className='header'>I love JavaScript!</h1>
        <p>This is JSX</p>
    </div>
)

function Page () {
    return (
        <div>
            <h1 className='header'>I love TypeScript!</h1>
            <p>This is TSX</p>
        </div>
    )
}

ReactDOM.render(page, document.getElementById('root-three'))
ReactDOM.render(
    <Page />
    , document.getElementById('root-four'))


const nav = (
    <nav>
        <h1>Jim's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById('root-five'))
import "./navigation.sass";

const Navigation = ({ items }) => (
    <nav className="docs-navigation">
        <ul className="docs-links">
            {items.map((element, idx) => (
                <li key={idx}>{element}</li>
            ))}
        </ul>
    </nav>
)

export default Navigation
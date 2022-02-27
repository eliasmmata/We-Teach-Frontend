export default function Cube() {
    return (
        <div className="homecubecontainer qube-perspective spin">
            <ul className="qube no-shading homecube">
                <li className="top" style={{ background: `#2B193D` }}></li>
                <li className="bottom" style={{ background: `#2B193D` }}></li>
                <li className="front" style={{ background: `#2B193D`, fontSize: `2rem` }}>WTF</li>
                <li className="left" style={{ background: `#2B193D` }}>T<span style={{ fontSize: `1rem`, marginLeft: `-20px` }}>each</span></li>
                <li className="back" style={{ background: `#2B193D` }}>F<span style={{ fontSize: `1rem`, marginLeft: `-30px` }}>rontend</span></li>
                <li className="right" style={{ background: `#2B193D` }}>W<span style={{ fontSize: `1rem`, marginLeft: `-10px` }}>e</span></li>
            </ul>
        </div>
    )
}
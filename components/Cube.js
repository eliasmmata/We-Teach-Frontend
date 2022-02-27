export default function Cube() {
    return (
        <>
            <h2 className="home-title">Frontend<span> and so much more</span></h2>
            <div className="homecubecontainer qube-perspective spin">
                <ul className="qube no-shading homecube">
                    <li className="top" style={{ background: `#2B193D` }}></li>
                    <li className="bottom" style={{ background: `#2B193D` }}></li>
                    <li className="front" style={{ background: `#2B193D`, fontSize: `2rem` }}>WTF</li>
                    <li className="left" style={{ background: `#2B193D` }}>T<span style={{ fontSize: `1rem`, marginLeft: `-20px` }}>each</span></li>
                    <li className="back" style={{ background: `#2B193D` }}>F<span style={{ fontSize: `1rem`, marginLeft: `-36px` }}>rontend</span></li>
                    <li className="right" style={{ background: `#2B193D` }}>W<span style={{ fontSize: `1rem`, marginLeft: `-20px` }}>e</span></li>
                </ul>
            </div>
            <div className="home-text-smalldevice font-MontserratBold">
                <h3>Los mejores recursos para Frontend, diseño y más...</h3>
                <h3 className="my-4">¡ Comparte tus favoritos !<i className="pi pi-share-alt ml-4" style={{cursor:`pointer`}}></i></h3>
                <h3 className="mt-2" style={{fontSize:`1rem`}}>Porque el código no lo es todo.<span style={{display:`block`, textAlign:`center`}} className="mt-2">Pero casi : )</span></h3>
            </div>
        </>
    )
}
import "./header.css";
function Header(){
    return(
        <div className="header">
            <h1 id="my">this is header</h1>
            <p>this is amazing tutorial</p>
        </div>
    )
}
function Footer(){
    return(
        <div className="footer">
            <h1 style={{color:"blue"}}>this is footer</h1>
        </div>
    )
}
export default Header;
export {Footer};


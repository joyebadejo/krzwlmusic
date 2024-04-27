

export default function Links (props){
    const setPage = props.setPage
    return (
        <div id="linksPage" className="subPage">
            <h3 className="toTop" onClick={()=>{setPage("home")}}>kurzweil.</h3>
            <ul id="linkItems"  className="subPageBox slowFade">
                <li onClick={()=>{setPage("works")}}>works.</li>
                <li onClick={()=>{setPage("inquire")}}>inquire.</li>
                <li onClick={()=>{setPage("contact")}}>contact.</li>
            </ul>
        </div>
    )
}
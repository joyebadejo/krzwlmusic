export default function Contact (props) {

    return(
        <div id="contactPage" className="subPage">
            <h3 className="" onClick={()=>{props.setPage("home")}}>kurzweil.</h3>
            <div  className="subPageBox fadeIn">
                contact.
            </div>
        </div>
    )
}
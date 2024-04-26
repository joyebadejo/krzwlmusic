export default function Contact (props) {

    return(
        <div id="contactPage" className="subPage">
            <h4 className="" onClick={()=>{props.setPage("home")}}>kurzweil.</h4>
            <div  className="subPageBox fade">
                contact.
            </div>
        </div>
    )
}
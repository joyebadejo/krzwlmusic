export default function Inquire (props){

    return(
        <div id="inquirePage" className="subPage">
            <h4 className="" onClick={()=>{props.setPage("home")}}>kurzweil.</h4>
            <div  className="subPageBox fade">
                inquire.
            </div>
        </div>
    )
}
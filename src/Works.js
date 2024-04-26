export default function Works (props){

    return(
        <div id="worksPage" className="subPage">
        <h4 className="" onClick={()=>{props.setPage("home")}}>kurzweil.</h4>
        <div className="subPageBox fade">
            <h5>works.</h5>
            <ul>
                <li>
                    <div>Produced by Kurzweil</div>
                    <div>
                        <a href="https://music.apple.com/us/playlist/produced-by-kurzweil/pl.u-WMx3IE2avPZ">Apple Music</a>
                    </div>
                </li>
                <li>
                    <div>Mixed by Kurzweil</div>
                    <div>
                        <a href="https://music.apple.com/us/playlist/mixed-engineered-by-kurzweil/pl.u-oWEpf3JW0Kj">Apple Music</a>
                    </div>
                </li>
                <li>
                    <div>Accolades:</div>
                    <div></div>
                </li>
            </ul>
        </div>
        </div>
    )
}
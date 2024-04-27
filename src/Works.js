import appleMusicLogo from './images/applemusic.svg';
import spotifyLogo from './images/spotifyLogo.png';

export default function Works (props){

    return(
        <div id="worksPage" className="subPage">
            <h3 className="" onClick={()=>{props.setPage("home")}}>kurzweil.</h3>
            <div className="subPageBox fadeIn">
                <h4>WORKS</h4>

                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Produced by Kurzweil
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <a  href="https://music.apple.com/us/playlist/produced-by-kurzweil/pl.u-WMx3IE2avPZ"><img src={appleMusicLogo} /></a>
                                <a href=""><img src={spotifyLogo}/></a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Mixed & Engineered by Kurzweil
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            <a className="playlist" href="https://music.apple.com/us/playlist/mixed-engineered-by-kurzweil/pl.u-oWEpf3JW0Kj"> <img src={appleMusicLogo} /></a>
                            <a href=""><img src={spotifyLogo}/></a>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h5 class="">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Awards & Certifications
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            Awards
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
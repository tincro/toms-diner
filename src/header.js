import TomsDiner from "./toms-diner.jpg";
import navBar from "./nav";


export default function header()
{
    /*  <div id="header-wrapper>
            <nav>
                <ul>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div id="header-title">
                <h1>Tom's Diner</h1>
            </div>
            <div id="main-img">
                <img src="./toms-diner.jpg">    
            </div>
           
        </div>
    */

        // TODO: add stylesheet
    const header = document.createElement('div');
    header.id = "header-wrapper";

    const nav = navBar();

    const headerTitle = document.createElement('div');
    headerTitle.id = 'header-title';
    
    const headerName = document.createElement('h1');
    headerName.innerText = "Tom's Diner";
    headerTitle.appendChild(headerName);

    const headerImgWrapper = document.createElement('div');
    headerImgWrapper.id ="main-img";
    
    const headerImg = new Image();
    headerImg.src = TomsDiner;
    headerImgWrapper.appendChild(headerImg);

    header.appendChild(nav);
    header.appendChild(headerTitle);
    header.appendChild(headerImgWrapper);
    
    return header;
}
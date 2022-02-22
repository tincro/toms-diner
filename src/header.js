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
        </div>
    */

        // TODO: add stylesheet
    const header = document.createElement('header');
    header.id = "header-wrapper";

    const nav = navBar();

    const headerTitle = document.createElement('div');
    headerTitle.id = 'header-title';
    
    const headerName = document.createElement('h1');
    headerName.innerText = "Tom's Diner";
    headerTitle.appendChild(headerName);

    header.appendChild(nav);
    header.appendChild(headerTitle);

    
    return header;
}
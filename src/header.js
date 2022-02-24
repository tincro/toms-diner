import navBar from "./nav";


export default function header()
{
    const header = document.createElement('header');
    header.id = "header-wrapper";

    
    const headerTitle = document.createElement('div');
    headerTitle.id = 'header-title';
    
    const headerName = document.createElement('p');
    headerName.innerText = "Tom's Diner";
    headerName.classList.add('logo-text');
    headerTitle.appendChild(headerName);
    header.appendChild(headerTitle);
    
    const nav = navBar();
    header.appendChild(nav);

    
    return header;
}
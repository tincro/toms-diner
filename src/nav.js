export default function navBar() {
    //  TODO: Add stylesheet
    
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');
    const navTabs = ["Menu", "Contact"];
    for(let nav of navTabs) {
        let navItem = document.createElement('li');
        let navItemLink = document.createElement('a');
        navItemLink.innerHTML = nav;
        navItemLink.href = "#";


        navItem.appendChild(navItemLink);
        navList.appendChild(navItem);
    }
    navBar.appendChild(navList);

    return navBar;
}
export default function navBar() {
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');
    const navTabs = ["Menu", "Contact"];
    for(let nav of navTabs) {
        let navItem = document.createElement('li');
        navItem.innerHTML = nav;
        
        navList.appendChild(navItem);
    }
    navBar.appendChild(navList);

    return navBar;
}
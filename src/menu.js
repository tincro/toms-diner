export default function menu() {
    /*
        <div id=menu-wrapper>
            // breakfast
            // lunch
            // dinner
            // desserts
            // sidebar 

            <div id="menu-title">
                <h2>MENU</h2
            </div>

            <div id="menu-items">
            
            </div>
            <div id="side-bar">
                <ul>
                    <li>Soda</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                </ul>
            </div>
        </div>
    */
    
    const element = document.createElement('div');
    element.id = "menu-wrapper";

    // adding title MENU here
    const titleWrapper = document.createElement('div')
    const title = document.createElement('h1');
    title.innerHTML = "Menu";

    titleWrapper.appendChild(title);

    // Add menu items in blocks for each time of day
    // TODO: add actual items in each list
    const menuItemsWrapper = document.createElement('div');

    // Add sidebar to include drinks TODO: add prices
    const sidebar = document.createElement('div');
    const drinksList = ["Coffee", "Soda", "Tea"];
    const list = document.createElement('ul');

    for (let drink of drinkList){
        let item = document.createElement('li');
        item.innerHTML = drink;
        list.appendChild(item);
    }
    sidebar.appendChild(list);
    
    element.appendChild(titleWrapper);
    element.appendChild(menuItemsWrapper);
    element.appendChild(sidebar);

    return element;
}
export default function menu() {
    /*
        <div id=menu-wrapper>
            // breakfast
            // lunch
            // dinner
            // desserts
            // sidebar 

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
    
    element.appendChild(menuItemsWrapper);
    element.appendChild(sidebar);

    return element;
}
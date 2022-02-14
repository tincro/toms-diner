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
                <ol>
                    <li>Soda</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                </ol>
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
    const list = document.createElement('ol');

    for (let i=0; i < drinksList.length; i++){
        let item = document.createElement('li');
        item.innerHTML = drinksList[i];
        list.appendChild(item);
    }
    sidebar.appendChild(list);
    
    element.appendChild(menuItemsWrapper);
    element.appendChild(sidebar);

    return element;
}
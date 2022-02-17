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
                <div>
                    <h3>Breakfast</h3>
                </div>
            
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
    const title = document.createElement('h2');
    title.innerHTML = "Menu";

    titleWrapper.appendChild(title);

    // Add menu items in blocks for each time of day
    // TODO: add actual items in each list
    const menuItemsWrapper = document.createElement('div');
    menuItemsWrapper.id = "menu-items";
    const mealsList = ["Breakfast", "Lunch", "Dinner", "Dessert"];
    for (let meal of mealsList){
        let menuSection = document.createElement('div')
        menuSection.id = meal;
        let menuTitle = document.createElement('h3');
        menuTitle.innerHTML = meal;

        menuSection.appendChild(menuTitle);
        menuItemsWrapper.appendChild(menuSection);
    }

    // Add sidebar to include drinks TODO: add prices
    const sidebar = document.createElement('div');
    const drinkList = ["Coffee", "Soda", "Tea"];
    const drinkTitle = document.createElement('h3');
    drinkTitle.innerHTML = "Beverages";
    sidebar.appendChild(drinkTitle);
    
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
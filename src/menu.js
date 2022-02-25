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
    element.classList.add("main-content");

    // adding title MENU here
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add("section-header"); 
    const title = document.createElement('h1');
    title.innerHTML = "Menu";

    titleWrapper.appendChild(title);

    // menu items
    const menuItemsWrapper = document.createElement('section');
    menuItemsWrapper.id = "menu-items";
    menuItemsWrapper.classList.add("menu-list");
    const mealsListObj = {
        Breakfast: ["eggs", "bacon", "pancakes"],
        Lunch: ["burger","salad", "chicken tenders"],
        Dinner: ["salmon", "ribeye", "pasta"],
        Dessert: ["apple pie", "cherry pie", "pumpkin pie"],
    }
    // populate each course menu
    for(const [k, v] of Object.entries(mealsListObj)){
        console.log(k, v);
        let menuSection = document.createElement('article');
        menuSection.id = k.toLowerCase();
        menuSection.classList.add('menu-box');
        let menuTitle = document.createElement('h2');
        menuTitle.innerText = k;
        menuSection.appendChild(menuTitle);

        for(const mealItem of v){
            let item = document.createElement('p');
            item.innerText = mealItem;
            menuSection.appendChild(item);
        }

        menuItemsWrapper.append(menuSection);
    }

    // Add sidebar to include drinks TODO: add prices
    const sidebar = document.createElement('section');
    sidebar.classList.add("sidebar");
    const drinkList = ["Coffee", "Soda", "Tea"];
    const drinkTitle = document.createElement('h2');
    drinkTitle.innerHTML = "Beverages";
    sidebar.appendChild(drinkTitle);
    
    const list = document.createElement('article');

    for (let drink of drinkList){
        let item = document.createElement('p');
        item.innerHTML = drink;
        list.appendChild(item);
    }
    sidebar.appendChild(list);
    
    element.appendChild(titleWrapper);
    element.appendChild(menuItemsWrapper);
    menuItemsWrapper.appendChild(sidebar);

    return element;
}
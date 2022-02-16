export default function contact () {
    /*
        <div id="contact-wrapper">
            // name
            // email
            // message
            // social sidebar ? 
            <div id="contact">
            </div>
            <div id="social">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>TikTok</li>
                </ul>
                // social media
            </div>
        </div>
    */

    // TODO: build out contact interface
    const element = document.createElement('div');
    element.id = "contact-wrapper";
    const contact = document.createElement('div');

    // Add sidebar to include social media
    // TODO: Add social images
    const sidebar = document.createElement('div');
    const sidebarList = document.createElement('ul');
    const socialList = ["Facebook", "Instagram","TikTok"];

    for (let social of socialList){
        let socialItem = document.createElement("li");
        socialItem.innerHTML = social;
        sidebarList.appendChild(socialItem);
    }
    sidebar.appendChild(sidebarList);


    return element;
}
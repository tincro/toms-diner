export default function contact () {
    /*
        <div id="contact-wrapper">
            // name
            // email
            // message
            // social sidebar ? 
            <div id="contact-title">
                <h2>CONTACT US</h2
            </div>
            <div id="contact">
                // add interface here
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

   const element = document.createElement('div');
   element.id = "contact-wrapper";

        // adding title CONTACT
    const titleWrapper = document.createElement('div');
    const title = document.createElement('h2');
    title.innerHTML = "Contact";

    titleWrapper.appendChild(title);

    // TODO: build out contact interface
    const contact = document.createElement('div');
    // name
    // email
    // message

    

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

    element.appendChild(titleWrapper);
    element.appendChild(contact);
    element.appendChild(sidebar);


    return element;
}
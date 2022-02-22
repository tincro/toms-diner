import './style.css';

export default function contact () {
    /*
        <div id="contact-wrapper">
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
    element.appendChild(titleWrapper);

    // TODO: Refactor for more concise code
    const contact = document.createElement('div');
    const form = document.createElement('form');
    const field = document.createElement('fieldset');
    form.appendChild(field);
    contact.appendChild(form);
    
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = "fname";
    nameLabel.innerText = "Your Name: ";
    field.appendChild(nameLabel);

    const name = document.createElement('input');
    name.type = "text";
    name.name = "name";
    name.placeholder = "John Smith";
    nameLabel.appendChild(name);

    const emailLabel = document.createElement('label');
    emailLabel.innerText = "Your Email: ";

    const email = document.createElement('input');
    email.type = "email";
    email.placeholder = "johnsmith@example.com";
    emailLabel.appendChild(email);
    field.appendChild(emailLabel);

    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = "message";
    messageLabel.innerText = "Leave us a message: "
    const message = document.createElement('textarea');
    message.placeholder = "Amazing food...";
    messageLabel.appendChild(message);
    field.appendChild(messageLabel);

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

    
    element.appendChild(contact);
    element.appendChild(sidebar);


    return element;
}
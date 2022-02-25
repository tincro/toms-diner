import './style.css';

export default function contact () {
   const element = document.createElement('div');
   element.id = "contact-wrapper";
   element.classList.add("main-content");

        // adding title CONTACT
    const titleWrapper = document.createElement('div');
    const title = document.createElement('h2');
    title.innerHTML = "Contact";
    title.classList.add("section-header");

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
    message.id = "message";
    message.cols = 50;
    message.rows = 15;
    messageLabel.appendChild(message);
    field.appendChild(messageLabel);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.innerText = "Submit";
    field.appendChild(submit);
    
    element.appendChild(contact);

    // Add sidebar to include social media
    // TODO: Add social images
    const sidebar = document.createElement('div');
    sidebar.id="socials-wrapper";

    const sidebarList = document.createElement('ul');
    sidebarList.id = "socials";
    const socialList = ["Facebook", "Instagram","TikTok"];

    for (let social of socialList){
        let socialItem = document.createElement('li');
        let socialItemLink = document.createElement('a');
        socialItemLink.innerText = social;
        socialItemLink.href = "#";
        socialItem.appendChild(socialItemLink);
        sidebarList.appendChild(socialItem);
    }
    sidebar.appendChild(sidebarList);
    element.appendChild(sidebar);

    


    return element;
}
import loadPage from "./load";
import menu from "./menu";
import contact from "./contact";

// add events to listen for tab switching
// function to clear out the current content
// add new content of the tab that was clicked

function replaceContent (e) {

    const content = document.getElementById('content');
    const nodeList = content.children;  
    content.replaceChild(e(), nodeList[1]);

    return content;
}

loadPage();

const menuNav = document.getElementById('menu');
menuNav.addEventListener('click', function(){replaceContent(menu)});

const contactNav = document.getElementById('contact');
contactNav.addEventListener('click',function(){replaceContent(contact)});


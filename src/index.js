import loadPage from "./load";
import menu from "./menu";
import contact from "./contact";

// add events to listen for tab switching
// function to clear out the current content
// add new content of the tab that was clicked

function replaceContent (e) {
    const homeContent = document.getElementById('home-content');
    homeContent.remove();
    
    const content = document.getElementById('content');
    content.appendChild(e());
    
    return content;
}

loadPage();

const menuNav = document.getElementById('menu');
menuNav.addEventListener('click', function(){replaceContent(menu)});

const contactNav = document.getElementById('contact');
contactNav.addEventListener('click', replaceContent);


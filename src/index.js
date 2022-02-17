import loadPage from "./load";
import menu from "./menu";
import contact from "./contact";
import mainContent from "./main-content";

function replaceContent (e) {

    const content = document.getElementById('content');
    const nodeList = content.children;  
    content.replaceChild(e(), nodeList[1]);

    return content;
}

 loadPage();

 const homeNav = document.getElementById('header-title');
 homeNav.addEventListener('click', function(){replaceContent(mainContent)});

const menuNav = document.getElementById('menu');
menuNav.addEventListener('click', function(){replaceContent(menu)});

const contactNav = document.getElementById('contact');
contactNav.addEventListener('click',function(){replaceContent(contact)});


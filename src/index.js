import loadPage from "./load";

// add events to listen for tab switching
// function to clear out the current content
// add new content of the tab that was clicked

function replaceContent () {
    // const homeContent = document.getElementById('home-content');
    // homeContent.remove();
    
    // const content = doucment.getElementById('content');
    // content.appendChild(e());
    
    // return content;
    console.log("you clicked the nav");
}

loadPage();

const menu = document.getElementById('menu');
menu.addEventListener('click', function(){console.log("clicked")});

const contact = document.getElementById('contact');
contact.addEventListener('click', replaceContent);


import header from "./header";
import mainContent from "./main-content";
import footer from "./footer";

export default function loadPage() {
    
    const content = document.getElementById('content');

    content.appendChild(header());
    content.appendChild(mainContent());
    content.appendChild(footer);

    return content;
}
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
                <ol>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>TikTok</li>
                </ol>
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
    const sidebarList = document.createElement('ol');
    const socialList = ["Facebook", "Instagram","TikTok"];

    for (let i=0; i < socialList.length;i++){
        let socialItem = document.createElement("li");
        socialItem.innerHTML = socialList[i];
        sidebarList.appendChild(socialItem);
    }
    sidebar.appendChild(sidebarList);


    return element;
}
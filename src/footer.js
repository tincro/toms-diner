export default function footer() {
    // <div id="footer">
    //     copyright 2022
    // </div>

    const footerWrapper = document.createElement('footer');
    footerWrapper.id = "footer"

    const footerContent = document.createElement('p');

    footerContent.innerText = "Copyright 2022";
    footerWrapper.appendChild(footerContent);

    return footerWrapper;
       
}
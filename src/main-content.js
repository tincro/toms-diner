
export default function mainContent () {
   
/* 
    <div id="main-desc">

        <p> 
            This place is the best diner in the Midwest. Folks come from miles around to eat here.
            Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.
        </p>
    </div>

*/
    const mainContentWrapper = document.createElement('div');

    mainContentWrapper.id = "main-desc";

    const blurb = document.createElement('p');
    blurb.innerText = `This place is the best diner in the Midwest. Folks come from miles around to eat here.
    Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.`;
    
    mainContentWrapper.appendChild(blurb);

    return mainContentWrapper;
}
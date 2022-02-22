import TomsDiner from "./toms-diner.jpg";

export default function mainContent () {
   
/* 
    <div id="home-content">
         <div id="main-img">
                <img src="./toms-diner.jpg">    
            </div>
        <div id="main-desc">
            <p> 
                This place is the best diner in the Midwest. Folks come from miles around to eat here.
                Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure. Find your little
            </p>
        </div>
    </div>

*/
    const mainContentWrapper = document.createElement('section');
    mainContentWrapper.id = "home-content";

    const headerImgWrapper = document.createElement('div');
    headerImgWrapper.id ="main-img";

    const headerImg = new Image();
    headerImg.src = TomsDiner;
    headerImgWrapper.appendChild(headerImg);

    const blurbWrapper = document.createElement('article');
    blurbWrapper.id = "about";

    const blurbContent = [
        "This place is the best diner in the Midwest. Folks come from miles around to eat here. Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.",
        "Our modern approach to classic diner-style experience will definitely be something to experience whether you are a local, new in town, or just passing through.",
    ]

    for(const p of blurbContent){
        const blurb = document.createElement('p');
        blurb.innerText = p;   
        blurbWrapper.appendChild(blurb);
    }
    
    mainContentWrapper.appendChild(headerImgWrapper);
    mainContentWrapper.appendChild(blurbWrapper);

    return mainContentWrapper;
}
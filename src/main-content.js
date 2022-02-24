import TomsDiner from "./toms-diner.jpg";

export default function mainContent () {
    const mainContentWrapper = document.createElement('section');
    mainContentWrapper.id = "home-content";

    const headerImgWrapper = document.createElement('div');
    headerImgWrapper.id ="main-img";

    const headerImg = new Image();
    headerImg.src = TomsDiner;
    headerImgWrapper.appendChild(headerImg);
    mainContentWrapper.appendChild(headerImgWrapper);

    const blurbWrapper = document.createElement('article');
    blurbWrapper.id = "about";

    const homepageTitle = document.createElement('h1');
    homepageTitle.innerText = "Welcome Home";
    homepageTitle.classList.add("section-header");
    mainContentWrapper.appendChild(homepageTitle);

    const blurbContent = [
        "This place is the best diner in the Midwest. Folks come from miles around to eat here. Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.",
        "You won't find a friendlier bunch of misfits to welcome you to a warm meal and comfortable atmosphere.",
        "Our modern approach to classic diner-style experience will definitely be something to experience whether you are a local, new in town, or just passing through.",
    ]

    for(const p of blurbContent){
        const blurb = document.createElement('p');
        blurb.innerText = p;   
        blurbWrapper.appendChild(blurb);
    }
    
    mainContentWrapper.appendChild(blurbWrapper);

    return mainContentWrapper;
}
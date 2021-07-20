//VIEW
class View{
    constructor(controller){
        this.controller = controller;
        let {select} = this.controller;
        //TARGETTING TAGS
        this.videoCaptions = select(".content__videos__video__caption__info__title", "all");
        this.menuBar = select(".navbar__logo__menu");
        this.searchIcon = select(".search__icon");
        this.searchBar = select("[type=search]");
        this.verticalMenu = select(".navbar__options__menu");
        this.darkThemeBox = select(".navbar__options__darktheme__options");
        this.darkOn = select(".darkon");
        this.darkOff = select(".darkoff");
        this.icons = select("i[class^=bx]", "all");
        this.backgroundMain = select(".content");
        this.side = select(".content__side");
        this.main = select(".content__videos");
        this.nav = select("nav");
        this.views = select(".content__videos__video__caption__info__views", "all");
        this.titles = select(".content__videos__video__caption__info__title", "all");
        this.sideLinks = select(".content__side a", "all");
        this.logo = select(".navbar__logo__name");
        this.home = select(".content__side__home");
        this.searchResults = select(".searchResults");


        this.listeners()

    }

    listeners(){
        let controller = this.controller;
        //PLAY VIDEO
        this.videoCaptions.forEach(caption=>{
            caption.addEventListener("click", (captionEvent)=>controller.play(captionEvent.target));
        });

        //TOGGLE DARKTHEME BOX
        this.verticalMenu.addEventListener("click", ()=>controller.toggleVerticalOptions(this.darkThemeBox));

        //DARTHEME
        this.darkOn.addEventListener("click", ()=>{
            controller.darkMode(this.nav, this.backgroundMain,
                this.main,this.side, this.icons,
                this.views, this.titles, this.sideLinks,
                 this.searchBar, this.searchIcon, this.logo)
        });

        //LIGHTHEME
        this.darkOff.addEventListener("click", ()=>{
            controller.lightMode(this.nav, this.backgroundMain,
                this.main,this.side, this.icons,
                this.views, this.titles, this.sideLinks,
                 this.searchBar, this.searchIcon, this.logo)
        });

        //HIDE SIDE BAR
        this.menuBar.addEventListener("click", ()=>{
            controller.hideSide(this.sideLinks, this.main, this.side, this.searchResults)});
        

        //SCROLL TO TOP
        [this.home, this.logo].forEach(el=>{
            el.addEventListener("click", ()=>controller.getHomePage(this.main))
        });

        //SEARCH RESULTS
        this.searchIcon.addEventListener("click", ()=>{
            this.searchResultsView(this.searchBar.value,this.main, this.searchResults, this.side);
        });
    }

    // SEARCH RESULTS VIEW
    searchResultsView(searchInput, main, resultsContainer, side){
        let {titles, videos, images, channelNames, durations} 
        = 
        searchInput ? this.controller.searchResults(searchInput) : {};

        main.classList.add("hide");
        resultsContainer.classList.add("showFlex");

        let controller = this.controller;

        let nav = this.nav;

        let result = "";
       
        if(searchInput){

            titles.forEach((title,index)=>{
                result+= `
                <div class="content__videos__video">
                    <iframe class="ad" src=https://www.youtube.com/embed/${videos[index]}?rel=0" allowfullscreen></iframe>
                    <div class="content__videos__video__caption">
                        <img src="${images[index]}" class="content__videos__video__caption__profile" alt="">
                        <div class=content__videos__video__caption__info>
                            <p class="content__videos__video__caption__info__title dynamicTitle">
                                ${title}
                            </p>
                            <div class="content__videos__video__caption__info__views dynamicViews">
                                <p>${channelNames[index]}</p>
                                <span class="views">${durations[index].num} views</span><span class="duration">${durations[index].timeSince}</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            });
        }else{
            this.backgroundMain.classList.add("fullHeight");
            result = "<div class='noResults'>Please search for something...</div>";
        }
        
        

        //DISPLAYING THE RESULTS OF THE SEARCH
        resultsContainer.innerHTML = result;

        function resultsDarkTheme(){
              //DARK THEME FOR SEARCH RESULTS
            let searchTitles = controller.select(".dynamicTitle", "all");
            let searchViews = controller.select(".dynamicViews", "all");
            let searchResults = controller.select(".searchResults");
           
            let checkDarkThemeOnNavbar = nav.classList.contains("darkThemeBackground");
   
        if(checkDarkThemeOnNavbar){
            searchViews.forEach(view=>{
                view.classList.add("darkThemeViews");
            });
    
            searchTitles.forEach(title=>{
                title.classList.add("darkThemeTitle");
            });
            
            searchResults.classList.add("darkThemeBackground");
        
        }

        let checkDarkThemeOnSearchResults = searchViews[0] && searchViews[0].classList.contains("darkThemeViews");

        if(!checkDarkThemeOnNavbar && checkDarkThemeOnSearchResults){
            searchViews.forEach(view=>{
                view.classList.remove("darkThemeViews");
            });

            searchTitles.forEach(title=>{
                title.classList.remove("darkThemeTitle");
            });
            
            searchResults.classList.remove("darkThemeBackground");
        
    }
    }
    
    let darkThemeResults = setInterval(resultsDarkTheme, 100);

    // PLAY VIDEOS FOR SEARCH RESULTS
    let videoCaptions = this.controller.select(".dynamicTitle", "all");

    videoCaptions.forEach(caption=>{
        caption.addEventListener("click", (captionEvent)=>{
            this.controller.play(captionEvent.target)
        });
    });

    

 }
}



//Controller
class Controller{
    initialize(view){
        this.view = view;

    }

    select(cssRule, number="one"){
        return (
             (number=="one") ? document.querySelector(cssRule)
            :(number=="all") ? [...document.querySelectorAll(cssRule)]
            :(()=>{throw "No tags found on your youtube page, JAM"})()
            );
    }

    play(caption){
        let video = caption.parentElement.parentElement.previousElementSibling;
        
        video.tagName.toLowerCase().startsWith("iframe") ? video.src+="&autoplay=1":
        alert("Sorry Azize Delam 😬️😬️😬️, video not available!");
          
    }

    toggleVerticalOptions(darkThemeBox){
        darkThemeBox.classList.toggle("show")
    }

    darkMode(nav, backgroundMain, main, side,
         icons,views, titles, sideLinks, searchBar, searchIcon, logo){

       [nav, backgroundMain, main, side, searchBar, searchIcon].forEach(el=>{
            el.classList.add("darkThemeBackground")
        });

        icons.forEach(icon=>{
            icon.classList.add("darkThemeIcons")
        });

        views.forEach(view=>{
            view.classList.add("darkThemeViews")
        });

        titles.forEach(title=>{
            title.classList.add("darkThemeTitle")
        });
    

        sideLinks.forEach(link=>{
            link.classList.add("darkThemeViews")
            link.parentElement.classList.add("darkThemeTransparent")
        });

        searchBar.classList.add("darkThemeTitle");

        logo.src="https://i.ibb.co/wLsSHkh/logo.png"

        
       

    }

    lightMode(nav, backgroundMain, main, side,
         icons,views, titles, sideLinks, searchBar, searchIcon, logo){
        [nav, backgroundMain, main, side, searchBar, searchIcon].forEach(el=>{
            el.classList.remove("darkThemeBackground")
        });


        icons.forEach(icon=>{
            icon.classList.remove("darkThemeIcons")
        });

        views.forEach(view=>{
            view.classList.remove("darkThemeViews")
        });

        titles.forEach(title=>{
            title.classList.remove("darkThemeTitle")
        });

        sideLinks.forEach(link=>{
            link.classList.remove("darkThemeViews")
            link.parentElement.classList.remove("darkThemeTransparent")
        });

        searchBar.classList.remove("darkThemeTitle");

        logo.src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png";
        
    }

    hideSide(sideLinks, main, side, searchResults){
        sideLinks.forEach(link=>{
            link.classList.toggle("hide")
        });

        side.classList.toggle("autoWidth");

        (screen.width <= "600") && (()=>{
            side.classList.remove("autoWidth");
        })();

        [main, searchResults].forEach(el=>{
            el.classList.toggle("marginLeft");
        });
       

    }

    getHomePage(main){
        //FIXING OF IRREGULAR APPLICATION OF DARK THEME
        this.view.backgroundMain.classList.contains("fullHeight")
         &&
        this.view.backgroundMain.classList.remove("fullHeight");
        
        //HIDE RESULTS
        this.view.searchResults.classList.remove("showFlex");

        //SHOW HOME
        main.classList.remove("hide");

        let {scrollToTop} = this.helpers()

        let childrenGreaterThanOne = ([...this.select(`${main.tagName.toLowerCase()}>*`, "all")].length>1) && true;

        childrenGreaterThanOne && scrollToTop();


    }

   

    //SEARCH RESULTS
    searchResults(searchInput){
        let {titleVideoImageInfo} = this.helpers();
        let {titles, videos, images, channelNames, durations} = titleVideoImageInfo(searchInput);
        

        return {titles, videos, images, channelNames, durations};
    }

    //HELPER METHODS
    helpers(){

        //TITLE, VIDEO LINK AND PROFILE PICTURE
        function titleVideoImageInfo(searchInput){
            if(!searchInput) return null;
            let titles = [
                "Funny video","Learning Tricking","African Video","Michael Jackson"
            ], videos = [
                "DODLEX4zzLQ","ATqleNo0agE","kiErHzaDFfw","Y0pYGmfhaGc"
            ], images = [
                "https://yt3.ggpht.com/ytc/AKedOLS4TQTp0xzYlueVkwT6zjqUwjaL3QfVAXgArpRTAg=s88-c-k-c0x00ffffff-no-rj",
                "https://yt3.ggpht.com/1Q7FXOCspVt7oMNa0dwE4wQ3qjReReoSqV0zKOfitD0sHApxd0b0WgUcO514nS-kel8PNA4leAs=s176-c-k-c0x00ffffff-no-rj-mo",
                "https://yt3.ggpht.com/ytc/AKedOLSQW7MHIoNUzukK5BCy6iobzu__vbCJDajhzApP=s48-c-k-c0x00ffffff-no-rj",
                "https://yt3.ggpht.com/ytc/AAUvwngo4chDDJX4rkdkybNruT_3MqEoOtirv1Ry-lAOFec=s48-c-k-c0x00ffffff-no-rj-mo"
            ], channelNames = [
                "Laugh your heart out",
                "Parkour",
                "African funny videos",
                "Micheal Jackson"
            ], 
            durations = [{num:"5K", timeSince:"7 months ago"},
            {num:"53K", timeSince:"9 weeks ago"},
            {num:"15M", timeSince:"7 days ago"},
            {num:"523", timeSince:"6 years ago"}

        ]  
            return {titles, videos, images, channelNames, durations}          


        }

        //SCROLL TO TOP
        function scrollToTop(){
            document.body.scrollToTop = 0;// Works only on Safari
            document.documentElement.scrollTop = 0;//Works For Chrome, Firefox, IE and Opera
        }

       

        //HELPER PUBLIC API INTERFACE
        return {
            titleVideoImageInfo,
            // numResults,
            scrollToTop
        }
    }
    

}





//SETUP
window.addEventListener("DOMContentLoaded", function(){
    let controller = new Controller();
    let view = new View(controller);
    controller.initialize(view);

});

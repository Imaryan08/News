function sidebar() {
    return `
            <div class="search"><input type="search" name="search" id="searchbar" placeholder="Search news..."></div>  
            <div class="home"><a href="index.html">HOME</a></div>  
            <div class="news"><a href="news.html">NEWS</a></div>
            <div><a href="#">SPORTS</a></div>  
            <div><a href="#">WORLD</a></div>
            <div><a href="#">LIVE TV</a></div>
            <div><a href="#">COVID</a></div>`;

    // return your html component here
    //Make sure to give input search box id as ""
}
export default sidebar;
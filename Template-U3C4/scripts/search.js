
let search_term = JSON.parse(localStorage.getItem('search_term'));

displayData(search_term);
// export default storeSearchterm;

function storeSearchterm(term) {

}

async function displayData(){

    try{

        let res = await fetch(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${search_term}`);
        
        let data = await res.json();
        console.log('data:', data)
        displayNews(data);

    }
    catch(err){
        console.log('err:', err)
    }
    
}


let displayNews = (news) => {

    news.forEach( (elem, index) => {

      
      let div = document.createElement('div');

      let imgDiv = document.createElement('div');
      let img = document.createElement('img');
      img.src = elem.urlToImage; 
      imgDiv.append(img);
      
      let heading = document.createElement('h2');
      heading.innerHTML = elem.title;

      
      div.append(imgDiv,heading);

      document.querySelector('#main').append(div);

      div.addEventListener('click',() => {
        console.log(index);

        localStorage.setItem('news',JSON.stringify(elem));

        window.open("news.html", "_blank");

      })


    })

  }
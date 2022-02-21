console.log('connected')

async function apiCall(url) {

  let res = await fetch(url);
  return res.json();
  
}


function appendArticles(articles, main) {

  articles.forEach( (elem, index) => {

    
    let div = document.createElement('div');

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = elem.urlToImage; 
    imgDiv.append(img);
    
    let heading = document.createElement('h2');
    heading.innerHTML = elem.title;
    
    div.append(imgDiv,heading);

    main.append(div);

    div.addEventListener('click',() => {

      localStorage.setItem('articles',JSON.stringify(elem));

      window.open("news.html", "_blank");

    })


  })

}

export { apiCall, appendArticles }



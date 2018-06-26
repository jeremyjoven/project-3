const businessButton = document.querySelector("#businessButton")
const entertainmentButton = document.querySelector("#entertainmentButton")
const generalButton = document.querySelector("#generalButton")
const healthButton = document.querySelector("#healthButton")
const scienceButton = document.querySelector("#scienceButton")
const sportsButton = document.querySelector("#sportsButton")
const technologyButton = document.querySelector("#technologyButton")

businessButton.addEventListener('click', e => {
  const userQuery = 'business'
  sendApiRequest(userQuery)
})

entertainmentButton.addEventListener('click', e => {
  const userQuery = 'entertainment'
  sendApiRequest(userQuery)
})

generalButton.addEventListener('click', e => {
  const userQuery = 'general'
  sendApiRequest(userQuery)
})

healthButton.addEventListener('click', e => {
  const userQuery = 'health'
  sendApiRequest(userQuery)
})

scienceButton.addEventListener('click', e => {
  const userQuery = 'science'
  sendApiRequest(userQuery)
})

sportsButton.addEventListener('click', e => {
  const userQuery = 'sports'
  sendApiRequest(userQuery)
})

technologyButton.addEventListener('click', e => {
  const userQuery = 'technology'
  sendApiRequest(userQuery)
})

async function sendApiRequest(userQuery) {
  let responseOne = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${userQuery}&apiKey=e6405bcd19a24341bd1c118c3c2c5733`);
  let responseTwo = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=JH4pXj01oKHBnReFNlbzCYHF8M60fmjb&q=${userQuery}&limit=25&offset=0&rating=G&lang=en`)
  let dataOne = await responseOne.json();
  let dataTwo = await responseTwo.json();
  //console.log(data);
  let myTitle = getTitlefrom(dataOne);
  let myURL = getURLfrom(dataOne);
  let mySource = getSourcefrom(dataOne);
  let myImage = getImageURLfrom(dataTwo)
  console.log(myTitle)
  console.log(myURL)
  addNewsToScreen(myTitle,mySource,myURL,myImage);
}


function getTitlefrom(myJSON) {
  return myJSON.articles[0].title
};

function getSourcefrom(myJSON) {
  return myJSON.articles[0].source.name
};

function getURLfrom(myJSON) {
  return myJSON.articles[0].url
};

function getImageURLfrom(myJSON) {
  return myJSON.data[Math.floor(Math.random() * 20)].images.original.url
};

function addNewsToScreen(myTitle,mySource,myURL,myImage) {
  let link = document.querySelector('#link')
  let title = document.querySelector('#title')
  let source = document.querySelector('#source')
  let image = document.querySelector('#image')
  title.innerHTML = `${myTitle}`
  source.innerHTML = `${mySource}`
  link.innerHTML = `<a href="${myURL}">Click Here to Read Article</a>`
  image.innerHTML = `<img src="${myImage}"/>`
};

/*
const myButton = document.querySelector("#mainButton")

myButton.addEventListener('click', e => {
  console.log("Button pressed!")
  const searchBar = document.querySelector("input")
  const userQuery = searchBar.value
  sendApiRequest(userQuery)
})

async function sendApiRequest(userQuery) {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=JH4pXj01oKHBnReFNlbzCYHF8M60fmjb&q=${userQuery}&limit=25&offset=0&rating=G&lang=en`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let myURL = getImageURLfrom(data);
  addImageToScreen(myURL);
}

function getImageURLfrom(myJSON) {
  return myJSON.data[5].images.original.url
};

function addImageToScreen(myURL) {
  let wrapper = document.querySelector('#wrapper')
  wrapper.innerHTML = `<img src="${myURL}"/>`
};
*/
window.addEventListener('load', () =>{
    event.preventDefault();

})

var inputCurrent = document.querySelector('#InputCurrent');
var rangeFrequence = document.querySelector('#RangeFrequence');
var divPodcast = document.querySelector('#divPodcast');
var resultado = document.querySelector('#result');


function start(){
    // rangeFrequence.addEventListener('input', HandleRange);
    rangeFrequence.addEventListener('input',range);
}

function HandleRange(event){
    let currentFrequence = event.target.value;
    inputCurrent.value = currentFrequence;

    findPodcast(currentFrequence);
}

function range(event){
    let currentFrequence = event.target.value;
    resultado.innerHTML = currentFrequence;

    findPodcast(currentFrequence);
}

function findPodcast(frequency){
    let foundPodcast = null;

    for(var i = 0; i < realPodcasts.length; i++){
        var currentPodcast = realPodcasts[i];

        if(currentPodcast.id === frequency){
            foundPodcast = currentPodcast;
            break;
        }
    }

    if (foundPodcast){
        renderPodcast(currentPodcast);
    }else{
        divPodcast.innerHTML = `
            <div class="card">
                <p id="descriptionPodcast"> Nenhum Podcast encontrado! </p>
            </div>
        `
    }
}

function renderPodcast(podcast){
    divPodcast.innerHTML = '';
    createCard();
    function createCard(){
        let titulo = podcast.title;
        let description = podcast.description;
        let img = './img/'+ podcast.img;
        const PodcastHTML = `
        <div class="card">
            <img id="PodcastImg" src="${img}" />
            <h2 id="tituloPodcast">${titulo}</h2>
            <p id="descriptionPodcast">${description}</p>
        </div>
        `
        divPodcast.innerHTML = PodcastHTML;
    }
    
}

start();
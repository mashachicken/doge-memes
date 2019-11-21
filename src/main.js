import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalMemes from "./animalinterface.js";
$(document).ready(function() {
  (async () => {
    let animalMeme = new AnimalMemes();
    const response = await animalMeme.getAnimals();
    getElements(response);
  })();

  const getElements = function(response) {
    response.forEach(function(url) {
      $("#memes").append("<li class='list-group-item'><img class='card-img-top' src='"+url+"'></li>");
    });
  };
});

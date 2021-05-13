//import { options } from "heatmap.js";

document.addEventListener('DOMContentLoaded', function () {

  var modeSwitch = document.querySelector('.mode-switch'); //seleziona il tag CSS con quel nome

  modeSwitch.addEventListener('click', function () {

    //aggiunge "dark" al nome della "root" in modo che il documento css la riconosce
    //e si attiva il css .dark:root che attiva lo sfondo dark
    document.documentElement.classList.toggle('dark');

    //aggiunge "active" al nome della classe "modeSwitch" in modo che il documento css la riconosce
    //e si attiva il css .mode-switch.active .moon che riempie la luna
    modeSwitch.classList.toggle('active');

    //funzione per cambiare il testo e i colori
    //var iconaMode = document.getElementById('icona_modalita');
    var iconaMode = document.getElementById('smile');
    var nomeMode = document.getElementById('modalita');
    var chart_bg1 = document.querySelector('#chart1');  //colore di sfondo della mappa
    var chart_bg2 = document.querySelector('#chart2');
    var chart_bg3 = document.querySelector('#chart3');
    var buttons = document.getElementsByClassName('bottone');  //colore di sfondo della mappa
    //var kofi_image = document.getElementById('kofi');
    var github_image = document.getElementById('github_img');
    //var kofi_image_tag = document.getElementById('kofi_img');
    var tooltip_bg = document.querySelector('.tooltip-sources');
    
    if (nomeMode.innerHTML === '&nbsp;&nbsp;Dark Mode') {
      iconaMode.src = 'img/ace_smiles_light.png';
      nomeMode.innerHTML = '&nbsp;Light Mode';

      chart_bg1.style.background = '#343E59';
      chart_bg2.style.background = '#343E59';
      chart_bg3.style.background = '#343E59';
      turnDarkMode1();  //ho creato delle funzioni per aggiornare i colori della mappa
      turnDarkMode2();
      turnDarkMode3();
      for (var i=0; i<buttons.length; i++) {
        buttons[i].style.color = '#F3F6FD';
        buttons[i].style.border = '2px solid #F3F6FD';
      }

      github_image.src = 'img/GitHub-Mark-Light-64px.png';

      tooltip_bg.style.setProperty('--balloon-color', '#F3F6FD');
      tooltip_bg.style.setProperty('--balloon-text-color', '#1F1C2E');
      
    } else {
      iconaMode.src = 'img/ace_smiles.png';
      nomeMode.innerHTML = '&nbsp;&nbsp;Dark Mode';

      chart_bg1.style.background = '#FFF';
      chart_bg2.style.background = '#FFF';
      chart_bg3.style.background = '#FFF';
      turnLightMode1();
      turnLightMode2();
      turnLightMode3();
      for (var i=0; i<buttons.length; i++) {
        buttons[i].style.color = '#1F1C2E';
        buttons[i].style.border = '2px solid #1F1C2E';
      }

      github_image.src = 'img/GitHub-Mark-64px.png';

      tooltip_bg.style.setProperty('--balloon-color', '#1F1C2E');
      tooltip_bg.style.setProperty('--balloon-text-color', '#F3F6FD');
    }
    

  });

});

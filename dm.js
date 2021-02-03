// Sélectionner la div où on veut mettre les images
let people = document.getElementById('people');
let studentsNumber = 30;

// Lancer la boucle de création d'images
for (let i = 0; i < studentsNumber; i++) 
{
    // Créer un nouvel élément figure pour le référencement
    let  figure = document.createElement('figure');
    people.appendChild(figure);

    // Créer un nouvel élément img
    let img = document.createElement('img');
    figure.appendChild(img);

    // Donner un chemin d'accès à l'image
    img.src = 'img/pan.png';

    // Id = "peopleN"
    figure.setAttribute('id', 'people' + i);

    // CSS
    figure.style.backgroundColor = randomColor();
    figure.style.cursor = 'pointer';

    // Désactivation du menu auto clic droit
    figure.oncontextmenu = (disableMenu) => {
        disableMenu.preventDefault();
    };
};


// Fonction d'apparition du formulaire au clic droit
function rightClick(){
    let students = document.getElementsByTagName('figure');
    let form = formulaire();

    for (let i = 0; i < students.length; i++) 
    {
        students[i].addEventListener ('mouseup', function() { // Quand on lâche le clic, la fonction se lance
            // Si c'est un clic droit
            if (event.button === 2)
            { 
                // On crée le formulaire dans la div selectionnée 
                this.appendChild(form); // J'AI VRAIMENT FAILLI NE PAS RENDRE UN CODE QUI FONCTIONNE A CAUSE DE CE THIS :'( 

                // Appel de la fonction pour désactiver le rechargement de la page
                disableBtn();
            } 
        }); 
    }
}
rightClick();

// Désactivation du bouton submit pour ne pas recharger la page
function disableBtn(){
    let form = document.querySelector('form');
    form.addEventListener('submit', function(action) {
        action.preventDefault();
        moveElement(form);
    });
}

// Déplacement de l'élément dans la div sélectionnée
function moveElement(form){
    let select = document.querySelector("select");

    let divSelected = form.parentElement.id;

    let source = document.getElementById(divSelected);

    let valueSelected = select.options[select.selectedIndex].value;
    
    if (valueSelected !== " ")
    {
        let target = document.getElementById(valueSelected);
        target.appendChild(source);
    }
}


// Création du formulaire 
function formulaire(){
    // <form action="#" method="POST">
    let form = document.createElement("form");
    form.setAttribute("method","GET");
    form.setAttribute("action", "#");
    
    // <select name="orientation" id="orientation_select">
    let select = document.createElement("select");
    select.setAttribute("name", "orientation");
    select.setAttribute("id", "orientation_select");
    // select.setAttribute("size", "4");
    form.appendChild(select);
    
    // Tableaux pour la boucle
    let topicValue = [' ', 'dev', 'design', 'mkt'];
    let topicText = ['--Sélectionnez--', 'Développement', 'Design', 'Marketing'];
    
    // Boucle pour les choix (options)
    for (let i = 0; i < topicValue.length; i++)
    {
        let option = document.createElement("option");
        option.setAttribute("value", topicValue[i]);
        option.innerHTML = topicText[i];
        select.appendChild(option);
        if (i == 0){
            option.setAttribute("disabled", "");
            option.setAttribute("selected", "");
        }
    }
    
    
    // <input type="submit" value="OK">
    let btnOk = document.createElement("input");
    btnOk.setAttribute("type", "submit");
    btnOk.setAttribute("value", "OK");
    form.appendChild(btnOk);

    return form;
}


// Fonction pour rendre la couleur du background aléatoire sur la base du RGB
function randomColor()
{
    color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

    return color;
}
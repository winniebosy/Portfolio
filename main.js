
//Triggers the page load event
document.addEventListener('DOMContentLoaded', () =>{
  //Get all navbar-burger elements
  const $navbarBurgers = Array.prototype.slice.call (document.querySelectorAll( '.navbar-burger'), 0);

//Checks if there is any navbar burgers

if ($navbarBurgers.length > 0){
    //Adds a click event on each of the navbar-burger elements

    $navbarBurgers.forEach( el => { 
        
        el.addEventListener('click', () => {
        //Gets the largest from the data-target attribute

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        //toogles the is-active class on both navbar burger and navbar menu
        el.classList.toggle('is-active');
        $target.classList('is-active')




    });
        
    });
}




});


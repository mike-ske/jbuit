

// function request() 
// {
//     let xhttp =  new XMLHttpRequest
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById('demo').innerHTML = this.responseText
//         }
//     }

//     xhttp.open('POST', 'main.blade.php', true)
//     // xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded")
//     xhttp.send()
// }

/* 
================ Code for active menu ===============
*/

let nav__link = document.getElementsByClassName("list_1");
let main_menu = document.getElementsByClassName("list_menu")[0];

for (let i = 0; i < nav__link.length; i++) {
    const list__item = nav__link[i];

    list__item.addEventListener("click", function () {
        document.getElementsByClassName("active")[0].classList.remove("active");
        nav__link[i].classList.add("active");
    })
    
    // ==== CODE TO HIDE THE MENU WHEN TABS ARE CLICKED
    list__item.addEventListener("click", function () {
        main_menu.classList.remove("show");
    })
}

/* 
============== CODE TO HIDE AND SHOW MENU ========
*/

let main__nav = document.getElementsByClassName("list_menu")[0];
let nav__icon = document.getElementsByClassName("toggle")[0];

nav__icon.addEventListener('click', function () {
    main__nav.classList.toggle("show");
})

// ============ CODE TO SET ACTIVE MENU FOOTER SECTION

let foot_menu = document.getElementsByClassName("ft_about")[0].getElementsByClassName("ft__01")[0].getElementsByClassName("ft__list")[0];

for (let i = 0; i < foot_menu.length; i++) {
    let ft__link = foot_menu[i];

    ft__link.addEventListener("click", function () {
        document.getElementsByClassName("active_2")[0].classList.remove("active_2");
        foot_menu.classList.add("active_2");
    })

}


// ========= set scroll nav =====

window.addEventListener("scroll", function () {
    document.getElementById("nav").classList.add("sticky");
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
    document.getElementById("nav").classList.remove("sticky");
     
    }
    return;
});


/**
 * Code to create image slider for each section 
 * containing courosel
 * 
 */

// slide 1

let elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	
    slide = new Splide(elms[i], {
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
        },
    
        type   : 'loop',
        perPage : 3,
        autoplay: true,
        padding: {
            right: '5rem',
            left : '5rem',
        },
        // perMove: 1,
       
    });
    slide.mount();
}


// Slide 2
// slide_2 = new Splide( '.splide');

// slide_2.mount();



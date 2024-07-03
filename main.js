//Wait to run your initialization code until the DOM is fully loaded. This is needed
// when wanting to access elements that are later in the HTML than the <script>.

var filename = window.location.pathname.split("/").pop();
console.log (window.location.pathname);
console.log (filename);


if(document.readyState === 'loading') {
  if (filename === "index.html" || filename === "" ||
    filename === "inconstruction.html" || filename === "index_hr.html") {
    document.addEventListener('DOMContentLoaded', loaded_index);
  } else {
    document.addEventListener('DOMContentLoaded', loaded_cons);
  }
} else {
  //The DOMContentLoaded event has already fired. Just run the code.
  if (filename === "index.html" || filename === "" || 
    filename === "inconstruction.html" || filename === "index_hr.html") {
    loaded_index();
  } else {
    document.addEventListener('DOMContentLoaded', loaded_cons);
  }
}


function loaded_index() {
    var ismenopen = 0;
    var index_section = 0;
    const max_index = 2;
    const scrldwn = document.getElementById("scrl-dwn-link");
    const logo = document.getElementById("navlogo");
    const navtext = document.getElementById("navtext");
    const banner = document.getElementById("banner");
    const btnmenu = document.getElementById("btnmenu");
    navmenu = document.getElementById("navmenu");
    //nvmenucontx = navmenu.getContext("2d");
    const banenr_info = banner.getBoundingClientRect();
    var idk = 0;

    logo.style.opacity = "0";

        scrldwn.addEventListener ("click", function (event) {
            event.preventDefault();
            scrldwn.href = `#section-${index_section}`
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (index_section < max_index)
                index_section += 1; 
            else if (index_section === max_index)
              scrldwn.style.visibility = "invisible";
        },
        false
        );

        btnmenu.addEventListener ("click", function(event)  {
            navmenu.style.animation = null; 
            navmenu.offsetWidth; /* trigger reflow */
            if (ismenopen === 0) {
              navmenu.style.animation = "menu-open 1s forwards";
              ismenopen = 1
            }
            else {
              navmenu.style.animation = "menu-open 0.5s reverse";
              ismenopen = 0
            }
            //navmenu.style = "translate(0%, 0%)";
            console.log("test");
        },
        false
        );

        window.addEventListener("scroll",function() {
          if (filename === "index.html" || filename === "index_hr.html" || filename === "") {
            logo.style.animation = null; 
            logo.offsetWidth; /* trigger reflow */ 
            console.log(`${parseInt(window.scrollY,10)} > ${window.innerHeight}`)
            if((window.scrollY + 10) > banenr_info.height && document.body.clientWidth > 540) {
              logo.style.opacity = "1"; 
              navtext.style.opacity = "1";
//              logo.style.animation = "fadein-logo 0.2s forwards"; //reuse animation
             }
            else if (window.scrollY < banenr_info.height) {
              logo.style.opacity = "0"; 
              navtext.style.opacity = "0";
//              logo.style.animation = "fadeout-logo 0.2s forwards ";
            }


            if ((parseInt(window.scrollY,10) + 10) > window.innerHeight) {
              console.log ("hello");
              scrldwn.style.opacity = "1"
              scrldwn.style.animation = "fadeout-logo 0.2s forwards"; //reuse animation
              scrldwn.style.pointerEvents = "none";
            }
            if (parseInt(window.scrollY,10) < 300) {
              scrldwn.style.opacity = "0"
              scrldwn.style.animation = "fadein-logo 0.2s forwards"; //reuse animation
              scrldwn.style.pointerEvents = "all";
              index_section = 0;
            }
          }
          else {
            logo.style.opacity = "1"; 
          }
        },
        false
        );
 
 
    } 

function loaded_cons() {
      var ismenopen = 0;
      const btnmenu = document.getElementById("btnmenu");
      navmenu = document.getElementById("navmenu");
      const navtext = document.getElementById("navtext");

      navtext.style.opacity = "1";

          btnmenu.addEventListener ("click", function(event)  {
              navmenu.style.animation = null; 
              navmenu.offsetWidth; /* trigger reflow */
              if (ismenopen === 0) {
                navmenu.style.animation = "menu-open 1s forwards";
                ismenopen = 1
              }
              else {
                navmenu.style.animation = "menu-open 0.5s reverse";
                ismenopen = 0
              }
              //navmenu.style = "translate(0%, 0%)";
              console.log("test");
          },
          false
          )   
   
      } 
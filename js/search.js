const data = [

{title:"About",url:"about.html"},
{title:"Recognition",url:"awards.html"},
{title:"Products",url:"products.html"},
{title:"Careers",url:"careers.html"},
{title:"Contact",url:"contact.html"}, 

{title:"Luxury Interior",url:"luxuryinterior.html"},
{title:"Commercial",url:"commercial.html"},
{title:"Architecture",url:"architecture.html"},
{title:"Photography",url:"photography.html"},
{title:"Furniture",url:"furniture.html"},
{title:"3D Visuals",url:"3d.html"}

];

const modal=document.getElementById("searchModal");
const input=document.getElementById("searchInput");
const results=document.getElementById("searchResults");

document.getElementById("openSearch").onclick=()=>{

    modal.classList.add("active");

    input.focus();

}

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

}

document.addEventListener("keydown",(e)=>{

    if((e.ctrlKey||e.metaKey)&&e.key==="k"){

        e.preventDefault();

        modal.classList.add("active");

        input.focus();

    }

    if(e.key==="Escape"){

        modal.classList.remove("active");

    }

});

input.addEventListener("input",()=>{

    const q=input.value.toLowerCase();

    results.innerHTML="";

    data.filter(i=>i.title.toLowerCase().includes(q))
        .forEach(i=>{

        results.innerHTML+=`
        <a class="search-item" href="${i.url}">
            ${i.title}
        </a>`;

    });

});

// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "..components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();

import{ searchNews} from "./fetch.js"

let search=(e) => {
    if(e.key ==="Enter") {
        let value=document.getElementById("search_input").value;
        searchNews(value).then((data) => {
            console.log(data);
            let results =document.getElementById("results");
            results.innerHTML=null;
            append(data.title,results)

        })      
    }
}

document.getElementById("search_input").addEventListener("keydown",searchNews)

let side_bar=document.getElementById("side_bar").children

function cSearch(){
    searchNews(this.id).then((data) => {
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.searchNews,container)
    })
}

for(let el of side_bar){
    el.addEventListener("click",cSearch)
}
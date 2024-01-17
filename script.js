//keyup event is handled here
function searchEmoji(){
    let inputValue = document.getElementById("search_field").value;
    // console.log(inputValue);
    displayResult(inputValue);
    // return false;
}


//displaying the meojis from here
function displayResult(searchQuery= ""){

    //filtering the emojis with filter on the basis of tags, aliases, desc
    let filteredData = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
    })

    console.log(filteredData);

    //where we need to append the tr
    let parent = document.getElementById("search_result_container");
    // console.log(parent);

    //so that the previous data got removed
    parent.innerHTML = "";

    //shoing the filtered data 
    filteredData.forEach((e)=>{

        let Box = document.createElement("div");
        Box.classList.add("box");
        // let Aliases = e.aliases.join(" ");
        Box.innerHTML=`
            <p class="Emojyy">${e.emoji}</p>
            <p class ="aliases">${e.aliases}</p>
            <p class="desc">${e.description}</p>
        `
        parent.appendChild(Box);
    })
}

document.getElementById("search_field").addEventListener("keyup", searchEmoji)

//first time to show all the emojis
window.onload = () => displayResult();
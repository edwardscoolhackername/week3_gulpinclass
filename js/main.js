import { getData } from "./components/TheDataMiner.js";

(() => {


    const   team = document.querySelector("#teammember"),
            template = document.querySelector("#bio-template").content;

    function buildTeam(info) {
       
        //clone the template for each name
        info.forEach(person => {
            let panel = template.cloneNode(true),
                memberinfo = panel.firstElementChild.children;

            memberinfo[0].querySelector('img').src = `images/${person.biopic}`;
            memberinfo[1].textContent = person.name;
            memberinfo[2].textContent = person.role;
            memberinfo[3].textContent = person.nickname;

            // then put this panel back in the team section
            team.appendChild(panel);
        })
    }

    // use the getData function
    getData(buildTeam);

})()
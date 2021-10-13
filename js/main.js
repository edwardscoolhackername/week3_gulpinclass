(() => {
    const   team = document.querySelector("#teammember"),
            template = document.querySelector("#bio-template").content;

    //Fetch Call to grab data

    function getData() {
        fetch("./data.json") //Get the data
        .then(res => res.json()) //unpack the response into plain text
        .then(data => { // Do whatever you want with the data
            console.table(data); //shows off the data

            // call a function to generate the data
            buildTeam(data);
        })
            //Catch and report error if the fetch doesn't work
        .catch(error => console.error(error));
    }

    function buildTeam(info) {
        //get a reference to the team members, get their keys
        let teammate = Object.keys(info);
        //clone the template for each name
        teammate.forEach(person => {
            let panel = template.cloneNode(true),
                memberinfo = panel.firstElementChild.children;

            memberinfo[0].querySelector('img').src = `images/${info[person].biopic}`;
            memberinfo[1].textContent = info[person].name;
            memberinfo[2].textContent = info[person].role;
            memberinfo[3].textContent = info[person].nickname;

            // then put this panel back in the team section
            team.appendChild(panel);
        })
    }

    // use the getData function
    getData();

})()
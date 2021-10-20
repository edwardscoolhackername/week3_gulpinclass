function getData(cb) { //cb calls back to a function
    //fetch("./data.json") Get the data right from the json
    fetch("./includes/functions.php") //get the sorted data from php
    .then(res => res.json()) //unpack the response into plain text
    .then(data => { 
        // Do whatever you want with the data
        // call a function to generate the data
        cb(data[0]);
    })
        //Catch and report error if the fetch doesn't work
    //.catch(error => console.error(error));
}

export { getData }
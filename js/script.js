/*
 * File: script.js
 * Created: Friday, 8th January 2021 8:16:09 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 9th January 2021 7:12:10 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

let searchButton = document.querySelector('#searchButton');
let searchUser = document.querySelector('#searchUser');

//Declear an object of UI class
let ui = new UI();

searchButton.addEventListener('click', (e) => {
    if (searchUser.value != '') {
        fetch(`https://api.github.com/users/${searchUser.value}`)
            .then(result => result.json())
            .then(data => {
                console.log(data);
                if (data.message == 'Not Found') {
                    //SHow alert
                    UI.showAlert("Profile Not Found...!", "error");
                } else {
                    //console.log(data);
                    //show profile
                    ui.showProfile(data);
                    UI.showAlert("Success..", "success");
                    searchUser.value = "";
                }
            });
    } else {
        //Show alert or error message
        UI.showAlert("Insert User Name..!", "error");
        ui.clearProfile();
    }
})
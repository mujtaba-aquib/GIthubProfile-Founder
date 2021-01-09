/*
 * File: ui.js
 * Created: Friday, 8th January 2021 8:16:18 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Sunday, 10th January 2021 1:42:28 am
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

class UI {
    constructor() {
        this.profile = document.querySelector('#userProfile');
    }

    showProfile(user) {
        //console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">View Profile </a>
            </div>
            <div class="col-md-8">
            <h3>${user.name}</h3>
            <h5>${user.location}</h5>
            <br><br>
                <span class="badge badge-primary"> Public Repose: ${user.public_repos}</span>
                <span class="badge badge-secondary"> Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success"> Follower: ${user.followers}</span>
                <span class="badge badge-warning"> Following: ${user.following}</span>
            <br><br>

            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website: <a href="${user.blog}">${user.blog}</a></li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
            </div>
        </div>
        </div>`;
    }
    static showAlert(message, className) {

        //creating a div for alert message.
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        //Creating a place for alert div
        let place = document.querySelector('#inputForm');
        let showing = document.querySelector('.search');

        place.insertBefore(div, showing);

        // Code for removing alert message automatically
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1300);
    }
    clearProfile() {
        this.profile.innerHTML = "";
    }
}

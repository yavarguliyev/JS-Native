"use strict";

// Footer

let footer = document.getElementById('footer');

let footerContainer = document.createElement('div');
footerContainer.setAttribute('class', 'container');

let footerRow = document.createElement('div');
footerRow.setAttribute('class', 'row');

let footerCol = document.createElement('div');
footerCol.setAttribute('class', 'col-lg-12');

let footerUl = document.createElement('ul');
footerUl.setAttribute('class', 'list-unstyled social-links');

let footerListFacebook = document.createElement('li');
let footerListFacebookButton = document.createElement('a');
footerListFacebookButton.setAttribute('href', 'https://www.facebook.com/');
footerListFacebookButton.setAttribute('target', '_blank');
let footerListFacebookIcon = document.createElement('i');
footerListFacebookIcon.setAttribute('class', 'fab fa-facebook');
footerListFacebook.append(footerListFacebookButton);
footerListFacebookButton.append(footerListFacebookIcon);

let footerListTwitter = document.createElement('li');
let footerListTwitterButton = document.createElement('a');
footerListTwitterButton.setAttribute('href', 'https://www.twitter.com/');
footerListTwitterButton.setAttribute('target', '_blank');
let footerListTwitterIcon = document.createElement('i');
footerListTwitterIcon.setAttribute('class', 'fab fa-twitter');
footerListTwitter.append(footerListTwitterButton);
footerListTwitterButton.append(footerListTwitterIcon);

let footerListGithub = document.createElement('li');
let footerListGitHubButton = document.createElement('a');
footerListGitHubButton.setAttribute('href', 'https://www.github.com/');
footerListGitHubButton.setAttribute('target', '_blank');
let footerListGitHubIcon = document.createElement('i');
footerListGitHubIcon.setAttribute('class', 'fab fa-github');
footerListGithub.append(footerListGitHubButton);
footerListGitHubButton.append(footerListGitHubIcon);

footer.append(footerContainer);
footerContainer.append(footerRow);
footerRow.append(footerCol);
footerCol.append(footerUl);
footerUl.append(footerListFacebook);
footerUl.append(footerListTwitter);
footerUl.append(footerListGithub);
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    "use strict";

    // Footer

    let footer = document.getElementById('footer');

    let footerContainer = document.createElement('div');
    footerContainer.setAttribute('class', 'container');

    let footerRow = document.createElement('div');
    footerRow.setAttribute('class', 'row');

    // Rating stars starts

    let starDiv = document.createElement('div');
    starDiv.setAttribute('class', 'col-lg-12 d-flex justify-content-center');

    let starUl = document.createElement('ul');
    starUl.setAttribute('class', 'list-unstyled stars');

    let starFirstLi = document.createElement('li');
    let fstarFirstLiButton = document.createElement('a');
    fstarFirstLiButton.setAttribute('href', '#');
    let starFirstLiIcon = document.createElement('i');
    starFirstLiIcon.setAttribute('id', 'rating-star');
    starFirstLiIcon.setAttribute('class', 'far fa-star fa-2x');

    let starSecondLi = document.createElement('li');
    let fstarSecondLiButton = document.createElement('a');
    fstarSecondLiButton.setAttribute('href', '#');
    let starSecondLiIcon = document.createElement('i');
    starSecondLiIcon.setAttribute('id', 'rating-star');
    starSecondLiIcon.setAttribute('class', 'far fa-star fa-2x');

    let starThirdLi = document.createElement('li');
    let fstarThirdLiButton = document.createElement('a');
    fstarThirdLiButton.setAttribute('href', '#');
    let starThirdLiIcon = document.createElement('i');
    starThirdLiIcon.setAttribute('id', 'rating-star');
    starThirdLiIcon.setAttribute('class', 'far fa-star fa-2x');

    let starFourthLi = document.createElement('li');
    let fstarFourthLiButton = document.createElement('a');
    fstarFourthLiButton.setAttribute('href', '#');
    let starFourthLiIcon = document.createElement('i');
    starFourthLiIcon.setAttribute('id', 'rating-star');
    starFourthLiIcon.setAttribute('class', 'far fa-star fa-2x');

    let starFifthLi = document.createElement('li');
    let fstarFifthLiButton = document.createElement('a');
    fstarFifthLiButton.setAttribute('href', '#');
    let starFifthLiIcon = document.createElement('i');
    starFifthLiIcon.setAttribute('id', 'rating-star');
    starFifthLiIcon.setAttribute('class', 'far fa-star fa-2x');

    footerRow.append(starDiv);
    starDiv.append(starUl);
    starUl.append(starFirstLi);
    starUl.append(starSecondLi);
    starUl.append(starThirdLi);
    starUl.append(starFourthLi);
    starUl.append(starFifthLi);
    starFirstLi.append(fstarFirstLiButton);
    starFirstLi.append(starSecondLiIcon);
    starFirstLi.append(starThirdLiIcon);
    starFirstLi.append(fstarFourthLiButton);
    starFirstLi.append(fstarFifthLiButton);
    fstarFirstLiButton.append(starFirstLiIcon);
    fstarFirstLiButton.append(starSecondLiIcon);
    fstarFirstLiButton.append(starThirdLiIcon);
    fstarFirstLiButton.append(starFourthLiIcon);
    fstarFirstLiButton.append(starFifthLiIcon);

    // Rating stars ends

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

    // Rating

    let ratingOnHover = document.querySelectorAll('#rating-star');
}
// ==UserScript==
// @name        Jira2Markdown
// @namespace   https://johann.gr
// @include     https://*
// @version     1
// @require     https://gist.githubusercontent.com/jograb/87cb9e635ee9c020fd6c3d36fb3fcee5/raw/e4ecb99fdfaea625ae57753115fa191bbec7e1c9/j2m.js
// @description https://github.com/jograb/gm-j2m
// ==/UserScript==
document.addEventListener('keyup', function(evt) {
    if(evt.keyCode == 49 && evt.ctrlKey) {
        let input = document.getElementById('description');
        input.value = J2M.toJ(input.value);
    }
    if(evt.keyCode == 50 && evt.ctrlKey) {
        let input = document.getElementById('description');
        input.value = J2M.toM(input.value);
    }
});

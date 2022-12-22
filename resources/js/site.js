$(document).ready(function (){
    /*dashoabrd*/
    var profileMenu = document.getElementById("profile");
    profileMenu.onclick = function () {
        var menuList = document.getElementById("profileMenu");
        menuList.classList.toggle("menu__show");
    };

    /*Left dropdown menu*/
    var sidebar = document.getElementById("dropdown");
    var menuList = document.getElementById("dropdownMenu");
    sidebar.onclick = function () {
        menuList.classList.toggle("menu__show");
        document.querySelector("#dropdown > svg").classList.toggle('rotate')
    };

    /*Left menu*/
    var navMenu = document.getElementById("navBar");
    navMenu.onclick = function () {
        var menuList = document.getElementById("leftMenu");
        menuList.classList.toggle("navmenu__show");
    };

    /*Menu bar*/

    document.querySelector("#navBar").addEventListener('click', function () {
        document.querySelector("#navBar").classList.toggle('cross__menu--bar')
    })

    /*accordion*/
    if (document.getElementById('headingOne')){
        document.getElementById('headingOne').addEventListener('click', function (){
            document.getElementById('headingOne').classList.toggle('headingRotate')
            const toggle = document.getElementById('collapseOne').classList.toggle('display_acc')
        })
        document.getElementById('headingOne2').addEventListener('click', function (){
            document.getElementById('headingOne2').classList.toggle('headingRotate')
            const toggle = document.getElementById('collapseOne2').classList.toggle('display_acc')
        })
    }
})
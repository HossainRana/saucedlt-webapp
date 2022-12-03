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

    /*Breadcrumb*/
    // let text = document.querySelector('.active_breadcrumb');
    // document.getElementById('nav-profile-tab').addEventListener('click', function (){
    //     text.innerHTML ='Pending';
    // })
    // document.getElementById('nav-contact-tab').addEventListener('click', function (){
    //     text.innerHTML ='Uploaded';
    // })
    // document.getElementById('nav-home-tab').addEventListener('click', function (){
    //     text.innerHTML ='All';
    // })

    // let breadCrumb = document.querySelector('.employee_breadcrumb');
    // document.getElementById('all-employee-tab').addEventListener('click', function (){
    //     alert('test')
    //     breadCrumb.innerHTML ='All Employees';
    // })
    // document.getElementById('visa-tab').addEventListener('click', function (){
    //     breadCrumb.innerHTML ='Visa Status';
    // })
    // document.getElementById('uploded-tab').addEventListener('click', function (){
    //     breadCrumb.innerHTML ='Uploaded';
    // })


    $('.visa_status').click(function (){
        $('.payroll__sync--container').toggleClass('sync__payroll--active')
    })

    /*Action bar*/
    document.querySelector('.sync__payroll').addEventListener('click', function (){
        document.querySelector('.payroll__sync--container').classList.toggle('sync__payroll--active')
    })
    document.querySelector('.recent__invitation').addEventListener('click', function (){
        document.querySelector('.invitation__recent--container').classList.toggle('recent__invitation--active')
    })

})
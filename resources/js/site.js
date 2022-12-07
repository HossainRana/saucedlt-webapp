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
    $('.action__btn-application').click(function (){
        $('.payroll__sync--container').toggleClass('sync__payroll--active')
    })


    /*filter*/

    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('job__filter--btn')){
            const showJobFilter = document.querySelector('.job__list');
            showJobFilter.classList.toggle('show__job')
        }
    })
    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('venues__filter--btn')){
            const showVenuesFilter = document.querySelector('.venus__list');
            showVenuesFilter.classList.toggle('show__venues')
        }
    })
    document.querySelector('.payroll__filter--container').addEventListener('click', function (e){
        if (e.target.classList.contains('sync__filter--btn')){
            const showVenuesFilter = document.querySelector('.sync__list');
            showVenuesFilter.classList.toggle('show__sync')
        }
    })

    var jobFilterBtn = document.getElementById('jobFilter');
    var jobFilterContent = document.getElementById('jobFilterContent');

    var venusFilterBtn = document.getElementById('venusFilter');
    var venusFilterContent = document.getElementById('venusFilterContent');

    var syncFilterBtn = document.getElementById('syncFilter');
    var syncFilterContent = document.getElementById('syncFilterContent');

    document.addEventListener('click', function (e){
        if (jobFilterBtn != e.target){
            const hide = document.querySelector('.job__list');
            hide.classList.remove('show__job')
        }
        const so = e.target.closest('.job__list');
        if (!so) return;
        so.classList.add('show__job')
    })

    document.addEventListener('click', function (e){
        if (venusFilterBtn != e.target){
            const hide = document.querySelector('.venus__list');
            hide.classList.remove('show__venues')
        }
        const so = e.target.closest('.venus__list');
        if (!so) return;
        so.classList.add('show__venues')
    })

    document.addEventListener('click', function (e){
        if (syncFilterBtn != e.target){
            const hide = document.querySelector('.sync__list');
            hide.classList.remove('show__sync')
        }
        const so = e.target.closest('.sync__list');
        if (!so) return;
        so.classList.add('show__sync')
    })



/*    $(document).on('click', function(evt) {
        console.log(evt.target)
        if(!$(evt.target).is('job__list') ) {
            console.log(evt.target)
            // $(".job__list").removeClass('show__job');
        }
    });*/


    /*Action bar*/
    document.querySelector('.sync__payroll').addEventListener('click', function (){
        document.querySelector('.payroll__sync--container').classList.toggle('sync__payroll--active')
    })
    document.querySelector('.recent__invitation').addEventListener('click', function (){
        document.querySelector('.invitation__recent--container').classList.toggle('recent__invitation--active')
    })

})
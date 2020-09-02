function makeSameHeight(x) {
    var maxHeight = 0;

    $(x).each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });


    $(x).height(maxHeight);
    // $(x).css('height', `${maxHeight}px`);
}


function dropdown() {
    // Iterate over each select element
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });



        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            // console.log($this.val());
            $this.trigger('change');
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

}

let navSlide = () => {
    let burger = document.querySelector('.burger');
    let sidebar = document.querySelector('#sidebar');
    let html = document.querySelector('html');


    burger.addEventListener('click', () => {
        sidebar.classList.toggle('side-active');
        burger.classList.toggle('close');
    });
    // html.addEventListener('click', (event) => {

    //     if (event.target != burger || event.target != sidebar) {
    //         console.log('out');

    //         sidebar.classList.remove('side-active');
    //     }
    // });
    sidebar.addEventListener('click', (event) => {
        console.log('side');

        event.stopPropagation(); // prevents executing the above event
    });



};
navSlide();

function smooth() {


    "use strict";
    var scroll = new SmoothScroll('.test a[href*="#"]:not([href="#"]', {


        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
        speed: 500,
        offset: 150,
        updateURL: false,
        popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
        emitEvents: true // Emit custom events

    });
}

smooth();

$('html').click(function () {
    //  Hide the sidebar
});

$('#sidebar').click(function (event) {
    event.stopPropagation(); // prevents executing the above event
});




$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    // $('.your-class-ar').slick('setPosition');
    makeSameHeight('.website');
    makeSameHeight('.website2');

})
//===========================================================================
//---------------------resize------------------------------------------------
//===========================================================================
$(window).on("resize", function () {
    makeSameHeight('.hostplan1');
    makeSameHeight('.website');
    makeSameHeight('.website2');
    // makeSameHeight('.hostplan2');
    // makeSameHeight('.hostplan3');
    makeSameHeight('.sh1');
});


//===========================================================================
//---------------------End resize--------------------------------------------
//===========================================================================

//===========================================================================
//---------------------document ready----------------------------------------
//===========================================================================
$(document).ready(function () {
    "use strict";


    makeSameHeight('.hostplan1');
    // makeSameHeight('.hostplan2');
    // makeSameHeight('.hostplan3');
    makeSameHeight('.sh1');
    makeSameHeight('.website');
    dropdown();
});

// =======================================

// // =======================================
// // Basice Code keep it
$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // $('.your-class-ar').slick('setPosition');
        makeSameHeight('.website');

    })
});
//===========================================================================
//---------------------end document ready------------------------------------
//===========================================================================


$(window).on('load', function () {

    "use strict";

    // Loading Elements

    $(".contain-loader").fadeOut(2000, function () {

        // Show The Scroll
        $("body").css("overflow", "hidden");

        $(this).fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).remove();
        });

    });


});


// // =======================================


function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.scroll-sec').each(function () {
        var currLink = $(this);
        // console.log(currLink);
        var refElement = $(currLink.attr('href'));

        if (refElement.position().top - 300 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.scroll-sec').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}


// // Basice Code keep it
$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

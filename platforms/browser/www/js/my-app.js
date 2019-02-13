var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.wedding.project',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/home/',
            url: 'index.html',
        },
        {
            path: '/bride-and-groom/',
            url: 'bride-and-groom.html',
        },
        {
            path: '/wedding-party/',
            url: 'wedding-party.html',
        },
        {
            path: '/events/',
            url: 'events.html',
        },
        {
            path: '/attire/',
            url: 'attire.html',
        },
        {
            path: '/location/',
            url: 'location.html',
        },
        {
            path: '/food-menu/',
            url: 'food-menu.html',
        }
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');

// App Events
app.on('panelClose', function (panel) {
    console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
    console.log('Panel ' + panel.side + ': closed');
});

// $('.sidebar-white a').click(function() {
//     $('.title-text').html($(this).html());
// });

var swiper = app.swiper.get('.swiper-container');

$('#app').on('touchstart', '.attire-swiper-container', function(){
    swiper = app.swiper.get('.attire-swiper-container');
    swiper.allowSlideNext = false;
    swiper.allowSlidePrev = false;
});

$('#app').on('touchstart', '.location-swiper-container', function(){
    swiper = app.swiper.get('.location-swiper-container');
    swiper.allowSlideNext = false;
    swiper.allowSlidePrev = false;
});

$('#app').on('touchstart', '.wedding-swiper-container', function(){
    swiper = app.swiper.get('.wedding-swiper-container');
    swiper.allowSlideNext = false;
    swiper.allowSlidePrev = false;
});

$('#app').on('click', '.attire a[id$=tab]', function() {
    /**
        this event listener can handle dynamically created selectors
    **/

    // always get current instance of swiper for local access when the event triggers
    swiper = app.swiper.get('.attire-swiper-container');
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    if(this.id.startsWith("back")) {
        swiper.slidePrev();
    }
    else if(this.id.startsWith("forward")) {
        swiper.slideNext();
    }

    // next titles
    nextTitle = getTitle(swiper, '.attire-slide-title');

    // if(!(swiper.activeIndex == 0 || swiper.activeIndex == swiper.slides.length - 1)) {
    // }
    var fadetime = 300;
    $('.current-slide-title').fadeOut(fadetime, function() {
        $(this).html(nextTitle).fadeIn(fadetime);
    });
});

$('#app').on('click', '.location a[id$=tab]', function() {
    /**
        this event listener can handle dynamically created selectors
    **/

    // always get current instance of swiper for local access when the event triggers
    swiper = app.swiper.get('.location-swiper-container');
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    if(this.id.startsWith("back")) {
        swiper.slidePrev();
    }
    else if(this.id.startsWith("forward")) {
        swiper.slideNext();
    }

    // next titles
    nextTitle = getTitle(swiper, '.location-slide-title');

    // if(!(swiper.activeIndex == 0 || swiper.activeIndex == swiper.slides.length - 1)) {
    // }
    var fadetime = 300;
    $('.current-slide-title').fadeOut(fadetime, function() {
        $(this).html(nextTitle).fadeIn(fadetime);
    });
});

$('#app').on('click', '.wedding a[id$=tab]', function() {
    /**
        this event listener can handle dynamically created selectors
    **/

    // always get current instance of swiper for local access when the event triggers
    swiper = app.swiper.get('.wedding-swiper-container');
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    if(this.id.startsWith("back")) {
        swiper.slidePrev();
    }
    else if(this.id.startsWith("forward")) {
        swiper.slideNext();
    }

    // next titles
    nextTitle = getTitle(swiper, '.wedding-slide-title');

    // if(!(swiper.activeIndex == 0 || swiper.activeIndex == swiper.slides.length - 1)) {
    // }
    var fadetime = 300;
    $('.current-slide-title').fadeOut(fadetime, function() {
        $(this).html(nextTitle).fadeIn(fadetime);
    });
});

function getTitle(swiperObject, slideTitleSelector) {
    slide_title = "";
    $(slideTitleSelector).each(function(e) {
        if(e == swiperObject.activeIndex) {
            slide_title = $(this).html();
        }
    });
    return slide_title;
}
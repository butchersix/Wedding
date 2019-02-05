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
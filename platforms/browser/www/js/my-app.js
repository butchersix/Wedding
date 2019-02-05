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
        path: '/about/',
        url: 'about.html',
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
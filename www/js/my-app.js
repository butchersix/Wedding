var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.example.cleanblankf7',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/services/',
        url: 'services.html'
      }
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');
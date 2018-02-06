export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      /*{
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'addusers',
            data: {
              menu: {
                title: 'Add Users',
              }
            }
          },
          
          {
            path: 'deleteusers',
            data: {
              menu: {
                title: 'Delete Users',
              }
            }
          },
          {
            path: 'userslist',
            data: {
              menu: {
                title: 'Users List',
              }
            }
          },

        ]
      },*/
     /* {
        path: 'devices',
        data: {
          menu: {
            title: 'Devices',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'deviceslist',
            data: {
              menu: {
                title: 'Device list',
              }
            }
          },
          {
            path: 'adddevices',
            data: {
              menu: {
                title: 'Add Devices',
              }
            }
          },
          {
            path: 'deletedevices',
            data: {
              menu: {
                title: 'Delete Devices',
              }
            }
          }
        ]
      },
      
      }*/
        /*children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },*/
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'addusers',
            data: {
              menu: {
                title: 'Add Users',
              }
            }
          },
          /*{
            path: 'deleteusers',
            data: {
              menu: {
                title: 'Delete Users',
              }
            }
          },*/
          {
            path: 'smartTables',
            data: {
              menu: {
                title: 'Modify Users',
              }
            }
          }
        ]
      },
      {
        path: 'devices',
        data: {
          menu: {
            title: 'Devices',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'adddevices',
            data: {
              menu: {
                title: 'Add Devices',
              }
            }
          },
          
          {
            path: 'smartTables',
            data: {
              menu: {
                title: 'Modify Devices',
              }
            }
          }
        ]
      },
      
      
      /*{
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },*/
      /*{
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
/*      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
  },*/
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Access Statistics',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
      
        children: [
          {
            path: 'smartTables',
            data: {
              menu: {
                title: 'Student'
               
              }
            }
          },
          {
            path: 'facultycategory',
            data: {
              menu: {
                title: 'Faculty'
                
              }
            }
          },
          {
            path: 'othercategory',
            data: {
              menu: {
                title: 'Others'
                
              }
            }
          }
        ],
            /*children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
     /* {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }*/
    
  },
  {
    path: 'settings',
    data: {
      menu: {
        title: 'Settings',
        icon: 'ion-settings',
        selected: false,
        expanded: false,
        order: 200,
      }
    }
  },
  }
];
  
  

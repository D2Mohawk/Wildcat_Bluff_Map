// Initialize the map
var map = L.map('map',{
  center: [35.2425,-101.9445],
  zoom: 16,
 // minZoom: 16,   //Set the minimum allowed zoom level
  maxBounds: L.latLngBounds([35.233579, -101.958148], [35.250973, -101.931660]) // Set the maximum bounds
  });


// Add a street view tile layer
var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a satellite tile layer (hidden by default)
var satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGJja2lyayIsImEiOiJjbHJyMjE5ZTAwOW9qMmlva2twMmN2cXhjIn0.if4mRdsJt7AQwMHeayh-bQ', {
  attribution: '© OpenStreetMap contributors, © Mapbox',
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidGJja2lyayIsImEiOiJjbHJyMjE5ZTAwOW9qMmlva2twMmN2cXhjIn0.if4mRdsJt7AQwMHeayh-bQ'
});

// Array of preset points with information
var points = [
  //          Landmark Points
  {
    latlng: [35.235, -101.93965],
    title: 'HQ',
    images: [ 'https://drive.google.com/file/d/126YZG0czF8_bMBsXDCCLrgbbyf7vjoYf/view?usp=sharing',
      'https://drive.google.com/uc?id=YOUR_IMAGE_ID_2'
    ],
    description: 'Description for Point 1.'
  },
  {
    latlng: [35.242103, -101.948720],
    title: 'Wildcat Bluff',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'Description for Point 2.'
  },
  {
    latlng: [35.239369, -101.949653],
    title: 'Windmill',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'Description for Point 2.'
  },
  //   {
  //   latlng: [, ],
  //   title: '',
  //   images: ['', ''], // Array of image paths
  //   description: ''
  // },
  
  //          Section 1 Points

   {
     latlng: [35.2487933333333,-101.944646666667],
     title: 'S1_Point 1',
     images: ['', ''], // Array of image paths
     description: ''
   },
   {
    latlng: [35.2488166666667,-101.94467],
    title: 'S1_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2487483333333,-101.945906666667],
    title: 'S1_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  //{
  //  latlng: [],
  //  title: 'S1_Point 4',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  {
    latlng: [35.248305,-101.94591],
    title: 'S1_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2479666666667,-101.945901666667],
    title: 'S1_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2478366666667,-101.945603333333],
    title: 'S1_Point 7',
    images: ['', ''], // Array of image paths
    description: ''
  },
 // {
 //   latlng: [],
 //   title: 'S1_Point 8',
 //   images: ['', ''], // Array of image paths
 //   description: ''
 // },
 // {
 //   latlng: [],
 //   title: 'S1_Point 9',
 //   images: ['', ''], // Array of image paths
 //   description: ''
 // },
  {
    latlng: [35.2474133333333,-101.945303333333],
    title: 'S1_Point 10',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2473433333333,-101.945371666667],
    title: 'S1_Point 11',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2471183333333,-101.94558],
    title: 'S1_Point 12',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.246965,-101.945966666667],
    title: 'S1_Point 13',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24691,-101.946168333333],
    title: 'S1_Point 14',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.246865,-101.946505],
    title: 'S1_Point 15',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2467166666667,-101.946815],
    title: 'S1_Point 16',
    images: ['', ''], // Array of image paths
    description: ''
  },

  //          Section 2 Points
  {
    latlng: [35.2464316666667,-101.947408333333],
    title: 'S2_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2462833333333,-101.947761666667],
    title: 'S2_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2460266666667,-101.948188333333],
    title: 'S2_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24607,-101.948391666667],
    title: 'S2_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2459916666667,-101.948588333333],
    title: 'S2_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2456716666667,-101.948418333333],
    title: 'S2_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2454383333333,-101.948245],
    title: 'S2_Point 7',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.245325,-101.947783333333],
    title: 'S2_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.245345,-101.947328333333],
    title: 'S2_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2451783333333,-101.94715],
    title: 'S2_Point 10',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24505,-101.947205],
    title: 'S2_Point 11',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2448983333333,-101.947525],
    title: 'S2_Point 12',
    images: ['', ''], // Array of image paths
    description: ''
  },
  //Stop Point
  //{
  //  latlng: ,
  //  title: 'S2_Point 13',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  //{
  //  latlng: ,
  //  title: 'S2_Point 14',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  {
    latlng: [35.2442916666667,-101.947928333333],
    title: 'S2_Point 15',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2442633333333,-101.948086666667],
    title: 'S2_Point 16',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.244355,-101.948436666667],
    title: 'S2_Point 17',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2443033333333,-101.949001666667],
    title: 'S2_Point 18',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2442833333333,-101.949376666667],
    title: 'S2_Point 19',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2442833333333,-101.949583333333],
    title: 'S2_Point 20',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2443566666667,-101.949815],
    title: 'S2_Point 21',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2444483333333,-101.94999],
    title: 'S2_Point 22',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2446766666667,-101.95043],
    title: 'S2_Point 23',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2446433333333,-101.950516666667],
    title: 'S2_Point 24',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2444983333333,-101.950646666667],
    title: 'S2_Point 25',
    images: ['', ''], // Array of image paths
    description: ''
  },
  
  //          Section 3 Points
  {
    latlng: [35.244425,-101.950566666667],
    title: 'S3_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2441916666667,-101.950245],
    title: 'S3_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2439733333333,-101.950763333333],
    title: 'S3_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24396,-101.950971666667],
    title: 'S3_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24391,-101.951271666667],
    title: 'S3_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2434383333333,-101.9518],
    title: 'S3_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  //{
  //  latlng: ,
  //  title: 'S3_Point 7',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  {
    latlng: [35.2430783333333,-101.95065],
    title: 'S3_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2426483333333,-101.950061666667],
    title: 'S3_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2420333333333,-101.949936666667],
    title: 'S4_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2414416666667,-101.949516666667],
    title: 'S4_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2400883333333,-101.949621666667],
    title: 'S4_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2398866666667,-101.949778333333],
    title: 'S4_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2398266666667,-101.94983],
    title: 'S4_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2397166666667,-101.949791666667],
    title: 'S4_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2395066666667,-101.950083333333],
    title: 'S4_Point 7',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.238875,-101.951018333333],
    title: 'S4_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.23877,-101.951338333333],
    title: 'S4_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2387916666667,-101.951696666667],
    title: 'S4_Point 10',
    images: ['', ''], // Array of image paths
    description: ''
  },
  







  //          Section 3 Offshoot Points
  {
    latlng: [35.24329,-101.951981666667],
    title: 'S3OS_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2433516666667,-101.952855],
    title: 'S3OS_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2432383333333,-101.953255],
    title: 'S3OS_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2434816666667,-101.953616666667],
    title: 'S3OS_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2437666666667,-101.953878333333],
    title: 'S3OS_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.243855,-101.954043333333],
    title: 'S3OS_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2438983333333,-101.954411666667],
    title: 'S3OS_Point 7',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2437566666667,-101.954756666667],
    title: 'S3OS_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.243665,-101.955163333333],
    title: 'S3OS_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2436933333333,-101.955791666667],
    title: 'S3OS_Point 10',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'text'
  },
  {
    latlng: [35.2439266666667,-101.955953333333],
    title: 'S3OS_Point 11',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'text'
  },
  {
    latlng: [35.244258333, -101.95624667],
    title: 'S3OS_Point 12',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'text'
  },
  
  // Add more points as needed

  
  
];

// Loop through points and add markers to the map
points.forEach(function(point) {
  var marker = L.marker(point.latlng).addTo(map);

  // Add a popup to each marker
  var popupContent = `
    <h3>${point.title}</h3>
    <div id="image-gallery" class="popup-gallery">`;
    
  point.images.forEach(function(imagePath) {
    popupContent += `<img src="${imagePath}" alt="Point Image" style="max-width: 100%;">`;
  });

  popupContent += `</div>
    <p>${point.description}</p>
  `;
  marker.bindPopup(popupContent);
});

// Add a control to toggle between Street View and Satellite View
var baseMaps = {
  'Street View': streetLayer,
  'Satellite View': satelliteLayer
};

L.control.layers(baseMaps).addTo(map);

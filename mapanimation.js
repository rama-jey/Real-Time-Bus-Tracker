// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
  ];
  
  // TODO: add your own access token
  Radar.initialize('prj_live_pk_1b6df879e5eaa3a46cc9a2b92c5c5fe239ba371d');
  
  // This is the map instance 
  let map = Radar.ui.map({
    container: 'map',
    style: 'radar-dark-v1',
    center: [-71.093829, 42.379244],
    zoom: 12
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = Radar.ui.marker({ color: '#FFFF00' })
  .setLngLat([-71.093729, 42.359244])
  .addTo(map);  


  // counter here represents the index of the current bus stop
  let counter = 0;

  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
    
  }
  window.onload = move();
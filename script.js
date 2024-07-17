mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhZGVlcDE0NDAiLCJhIjoiY2tnNmFtd2V0MTJxdjJxbXptZW0zZXdsbyJ9.QI_YzRbLiGY90HtL-2pGrg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setUpMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setUpMap([-2.54, 56.48]);
}

function setUpMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 16,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  //directions

  var directions = new MapboxDirections({
    accessToken:
      "pk.eyJ1IjoicHJhZGVlcDE0NDAiLCJhIjoiY2tnNmFtd2V0MTJxdjJxbXptZW0zZXdsbyJ9.QI_YzRbLiGY90HtL-2pGrg",
    unit: "metric",
    profile: "mapbox/cycling",
  });

  map.addControl(directions, "top-left");
}

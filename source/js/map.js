const mapContainer = document.querySelector("#map");
const BASIC_LAT = 59.9681404818884;
const BASIC_LNG = 30.31651345613417;
const BASIC_MAP_SCALING = 17;
const MAX_MAP_SCALING = 19;
const MAIN_PIN_WIDTH = 38;
const MAIN_PIN_HEIGHT = 50;
const mainPinMarker = L.icon({
  iconUrl: 'data:image/svg+xml,%3Csvg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cellipse cx="19" cy="48.5" rx="8" ry="1.5" fill="%237859CF" fill-opacity="0.25"/%3E%3Cpath d="M38 20C38 35.0457 19 44 19 44C19 44 0 35.0457 0 20C0 8.9543 8.50659 0 19 0C29.4934 0 38 8.9543 38 20Z" fill="%237859CF"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M19 36C27.2843 36 34 28.8365 34 20C34 11.1635 27.2843 4 19 4C10.7157 4 4 11.1635 4 20C4 28.8365 10.7157 36 19 36ZM28.8566 25.3333C29.5886 23.7267 30.0001 21.9158 30.0001 20C30.0001 13.3726 25.0752 8 19.0001 8C18.1529 8 17.3281 8.10448 16.5359 8.30226C20.3328 9.30223 23.1251 12.6682 23.1251 16.6667C23.1251 19.7738 21.3806 22.8188 19.6876 25.3333H28.8566ZM14.1875 10.6665C17.6047 10.6665 20.375 13.3528 20.375 16.6665C20.375 20.4663 17.3608 24.134 14.9429 27.076C14.6827 27.3926 14.4294 27.7008 14.1875 27.9998H27.199C25.1849 30.4548 22.2578 31.9998 19 31.9998C12.9249 31.9998 8 26.6273 8 19.9998C8 16.3379 9.61517 10.6665 14.1875 10.6665Z" fill="white"/%3E%3C/svg%3E%0A',
  iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_HEIGHT],
  iconAnchor: [MAIN_PIN_WIDTH/2, MAIN_PIN_HEIGHT],
});
const marker = L.marker(
  {
    lat: BASIC_LAT,
    lng: BASIC_LNG,
  },
  {
    draggable: false,
    icon: mainPinMarker
  },
);

mapContainer.innerHTML = "";

const map = L.map("map");

const loadMap = () => {
  map.setView([BASIC_LAT, BASIC_LNG], BASIC_MAP_SCALING);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: MAX_MAP_SCALING,
    attribution: "© OpenStreetMap"
  }).addTo(map);

  marker.addTo(map);
}

export { loadMap }

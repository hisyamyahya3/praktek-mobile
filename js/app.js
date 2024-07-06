// Demo
if (window.parent && window !== window.parent) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '0px');
    html.style.setProperty('--f7-safe-area-bottom', '0px');
  }
}

// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

let terjemahbulan = ['','Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
function tgljamindo(tgljam){
  let tgl = tgljam.split(" ");
  let xtgl = tgl[0].split("-");
  let jam = tgl[1];
  return `${xtgl[2]} ${terjemahbulan[parseInt(xtgl[1])]} ${xtgl[0]} / ${jam}`;
}

function ribuan(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
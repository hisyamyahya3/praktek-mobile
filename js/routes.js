var routes = [
  {path: '/', componentUrl: 'pages/home.html'},
  {path: '/zod/', componentUrl: 'pages/zodiak.html'},
  {path: '/send/', componentUrl: 'pages/kirimpesan.html'},
  {path: '/film/', componentUrl: 'pages/film.html'},
  {path: '/dfilm/', componentUrl: 'pages/detail_film.html'},
  {path: '/loc/', componentUrl: 'pages/lokasi.html'},
  {path: '/uang/', componentUrl: 'pages/list_transaksi.html'},
  {path: '/transaksi/:jenis', componentUrl: 'pages/transaksi.html'},
  {path: '/transaksiu/', componentUrl: 'pages/transaksi_kelola.html'},
  {path: '/history/', componentUrl: 'pages/perbankan.html'},
  {path: '/map/', componentUrl: 'pages/map.html'},
  {path: '(.*)', url: 'pages/404.html'},
];
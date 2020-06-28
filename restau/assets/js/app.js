let map = L.map('map').setView([48.07338333129883, 7.330802917480469], 6);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20
}).addTo(map);
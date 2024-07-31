let map = L.map('Mapa_Centralizado').setView([12.14739,-86.21769],13
)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>; Farmacialife'
}).addTo(map);

L.marker ([12.11798, -86.25915]).addTo(map).bindPopup("Farmacias Praga" ).on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.11798,-86.25915&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=[12.11798,-86.25915";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
   
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.14455, -86.26100]).addTo(map).bindPopup("Farmacia Saba").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.14455,-86.26100&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.14455,-86.26100";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
    
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.12996, -86.22971]).addTo(map).bindPopup("Farmacia Siloe").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.12996,-86.22971&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.12996,-86.22971";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
    
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.12268, -86.24384]).addTo(map).bindPopup("Farmacia Samaria").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.12268,-86.24384&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.12268,-86.24384";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.14527, -86.23244]).addTo(map).bindPopup("Farma Value Bello Horizonte").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.14527,-86.23244&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.14527,-86.23244";
  
    // Crear link element0s
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
    
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.13646, -86.19749]).addTo(map).bindPopup("Farmacia Villa Reconciliación").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.13646,-86.19749&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.13646,-86.19749";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
  
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.08609, -86.23384]).addTo(map).bindPopup("Farmacia Hospital Vivian Pellas").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.08609,-86.23384&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.08609,-86.23384";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
  
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.14572, -86.23275]).addTo(map).bindPopup("Farmacia Kielsa Bello Horizonte").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.14572,-86.23275&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.14572,-86.23275";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
    
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });
L.marker([12.14739,-86.21769]).addTo(map).bindPopup("Farmacia Ebenezer").on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const title = this.getPopup().getContent(); 
  
    // Waze URL:
    const wazeUrl = "https://waze.com/ul?ll=12.14739,-86.21769&z=17&navigate=yes";
    // Google Maps URL:
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.14739,-86.21769";
  
    // Crear link elementos
    const wazeLink = document.createElement('a');
    wazeLink.href = wazeUrl;
    wazeLink.target = '_blank';
    wazeLink.textContent = 'Open in Waze';
  
    const googleMapsLink = document.createElement('a');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.target = '_blank';
    googleMapsLink.textContent = 'Open in Google Maps';
  
   
    this.getPopup().setContent(`
      <p>${title}</p>
      <p>
        <a href="${wazeUrl}" target="_blank">Open in Waze</a>
        |
        <a href="${googleMapsUrl}" target="_blank">Open in Google Maps</a>
      </p>
    `);
  });





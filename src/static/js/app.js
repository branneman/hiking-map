import 'babel-polyfill'

import { create } from './map'

fetch('/static/gpx/listing.json')
  .then(response => response.json())
  .then(listing => create(listing.map(file => `/static/gpx/${file}`)))

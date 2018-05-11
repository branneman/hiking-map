import Map from 'ol/map'
import View from 'ol/view'
import proj from 'ol/proj'

import { getLayer as getMapLayer } from './map-layer'
import { getLayer as getRoutesLayer } from './routes-layer'

export const create = urls =>
  new Map({
    target: 'map',
    layers: [getMapLayer(), getRoutesLayer(urls)],
    view: new View({
      center: proj.fromLonLat([4.470181, 51.92366]),
      zoom: 5
    })
  })

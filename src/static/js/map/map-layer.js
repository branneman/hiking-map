import Tile from 'ol/layer/tile'
import XYZ from 'ol/source/xyz'

let apiKey = window.location.hash.substr(1)
if (!apiKey) {
  apiKey = prompt('Provide API key')
  window.location = '#' + apiKey
}

export const getLayer = () =>
  new Tile({
    source: new XYZ({
      url:
        'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=' +
        window.location.hash.substr(1)
    })
  })

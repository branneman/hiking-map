import Group from 'ol/layer/group'
import VectorLayer from 'ol/layer/vector'
import VectorSource from 'ol/source/vector'
import GPX from 'ol/format/gpx'

import style from './routes-layer-style'

export const getLayer = urls =>
  new Group({
    layers: urls.map(
      gpx =>
        new VectorLayer({
          source: new VectorSource({
            url: gpx,
            format: new GPX()
          }),
          style: feature => style[feature.getGeometry().getType()]
        })
    )
  })

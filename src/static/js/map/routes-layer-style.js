import Style from 'ol/style/style'
import Circle from 'ol/style/circle'
import Fill from 'ol/style/fill'
import Stroke from 'ol/style/stroke'

const redline = new Stroke({
  color: '#f00',
  width: 3
})

export default {
  LineString: new Style({ stroke: redline }),
  MultiLineString: new Style({ stroke: redline })
}

import { $ } from 'clappr'
import BaseMarker from './base-marker'

/*
 * An implementation of a basic Marker, which can have a tooltip containing text.
 */
export default class StandardMarker extends BaseMarker {

  /*
   * time: the time in seconds that this marker represents
   * tooltipText: the text to be shown on the tooltip (optional)
   * tooltipColour: the colour the marker is going to have (optional)
   */
  constructor (time, tooltipText, tooltipColour = '#FFFFFF') {
    super(time, tooltipColour)

    this._tooltipText = tooltipText || null
    this._tooltipColour = tooltipColour
    this._tooltipText && this._setTooltipEl(this._buildTooltipEl())
  }

  _buildTooltipEl () {
    return $('<div />').addClass('standard-tooltip').text(this._tooltipText)
  }
}

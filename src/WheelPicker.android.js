/**
 * @prettier
 * @flow
 * */

import React from 'react'
import { requireNativeComponent } from 'react-native'

const WheelPickerView = requireNativeComponent('WheelPicker', null)

type Props = {
  data: Array<string>,
  isCyclic?: boolean,
  selectedItemTextColor?: string,
  selectedItemTextSize?: number,
  indicatorWidth?: number,
  hideIndicator?: boolean,
  indicatorColor?: string,
  itemTextColor?: string,
  itemTextSize?: number,
  selectedItem?: number,
  backgroundColor?: string,
  onItemSelected?: number => void
}

export default class WheelPicker extends React.Component<Props> {
  static defaultProps = {
    style: {
      width: 100,
      height: 150,
      borderWidth: 1,
    },
  }

  onItemSelected = (event: any) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(event.nativeEvent.position)
    }
  }

  render() {
    return (
      <WheelPickerView
        {...this.props}
        onChange={this.onItemSelected}
      />
    )
  }
}

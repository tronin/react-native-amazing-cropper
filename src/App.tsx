import React, { Component } from 'react';
import Cropper from './pages/Cropper.page';
import DefaultFooter from './components/Footer/DefaultFooter.component';

export type AmazingCropperProps = {
  footerComponent?: JSX.Element;
  onDone: (croppedImageUri: string) => void;
  onCancel: () => void;
  imageUri: string;
  imageWidth: number;
  imageHeight: number;
  TOP_VALUE?: number;
  LEFT_VALUE?: number;
  BOTTOM_VALUE?: number;
  RIGHT_VALUE?: number;
  initialRotation?: number;
  NOT_SELECTED_AREA_OPACITY?: number;
  BORDER_WIDTH?: number;
} & typeof defaultProps;

const defaultProps = {
  footerComponent: <DefaultFooter doneText='DONE' rotateText='ROTATE' cancelText='CANCEL' />,
  onDone: (_croppedImageUri: string) => {},
  onCancel: () => {},
  imageUri: '',
  imageWidth: 1280,
  imageHeight: 747,
  TOP_VALUE: 0,
  LEFT_VALUE: 0,
  BOTTOM_VALUE: 0,
  RIGHT_VALUE: 0,
  initialRotation: 0,
  NOT_SELECTED_AREA_OPACITY: 0.5,
  BORDER_WIDTH: 50,
};

class App extends Component<AmazingCropperProps> {
  static defaultProps = defaultProps;

  render() {
    return (
      <Cropper
        footerComponent={this.props.footerComponent}
        onDone={this.props.onDone}
        onCancel={this.props.onCancel}
        imageUri={this.props.imageUri}
        imageWidth={this.props.imageWidth}
        imageHeight={this.props.imageHeight}
        TOP_VALUE={this.props.TOP_VALUE}
        LEFT_VALUE={this.props.LEFT_VALUE}
        BOTTOM_VALUE={this.props.BOTTOM_VALUE}
        RIGHT_VALUE={this.props.RIGHT_VALUE}
        initialRotation={this.props.initialRotation}
        NOT_SELECTED_AREA_OPACITY={this.props.NOT_SELECTED_AREA_OPACITY}
        BORDER_WIDTH={this.props.BORDER_WIDTH}
      />
    );
  }
}

export default App;

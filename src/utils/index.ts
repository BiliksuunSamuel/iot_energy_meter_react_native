import {Dimensions} from 'react-native';
import {Buffer} from 'buffer';

const {width, height} = Dimensions.get('screen');

const w = 360;
const h = 800;

export function getHeight(size: number = 1) {
  const ratio = h / size;
  return height / ratio;
}

export function getWidth(size: number = 1) {
  const ratio = w / size;
  return width / ratio;
}

export function GenerateBuffer(message: string) {
  const buffstr = Buffer.from(message).toString('base64');

  return Buffer.from(buffstr, 'base64');
}

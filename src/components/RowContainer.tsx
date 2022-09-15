import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React, {ReactNode} from 'react';

interface IProps {
  props?: ViewProps;
  children: ReactNode[];
}
export default function RowContainer({children, props}: IProps) {
  return (
    <View style={styles.root} {...props}>
      {children.map((child, index) => (
        <React.Fragment
          key={(Math.random() * index).toString() + Date.now().toString()}>
          {child}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

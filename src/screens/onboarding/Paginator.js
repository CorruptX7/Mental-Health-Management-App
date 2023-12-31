import { Animated, View, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* map through the data array */}
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; // previous dot, current dot & next dot

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10], // width
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5da5a9',
    marginHorizontal: 8,
  },
});

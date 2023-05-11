import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SlideUpAndDown: React.FC = () => {
  const [boxColor, setBoxColor] = useState('black');
  const slideValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideUp = Animated.timing(slideValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    const slideDown = Animated.timing(slideValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    const slideAnimation = Animated.sequence([slideUp, slideDown]);

    Animated.loop(slideAnimation).start();
  }, [slideValue]);

  const translateY = slideValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  const handleColorChange = () => {
    const newColor = boxColor === 'black' ? 'grey' : 'black';
    setBoxColor(newColor);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateY }], backgroundColor: boxColor }]}>
        <TouchableOpacity style={styles.btn} onPress={handleColorChange} >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Rashad
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 250,
    backgroundColor: 'black',
    borderRadius: 10,

  },
  btn: {
    width: 200,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SlideUpAndDown;

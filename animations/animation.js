import { withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width

export const useDeleteAnimation = (isDeleting) => {
  return useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: withTiming(isDeleting ? SCREEN_WIDTH : 0, { duration: 400 })
      }]
    };
  });
};

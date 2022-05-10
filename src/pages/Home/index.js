import {Animated, View, PanResponder} from 'react-native';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import {photo as photoArray} from './data';
import {CARD} from '../../components';
import {ACTION_OFFSET} from '../../components';
import Card from '../../components/atoms/Card';
import {styles} from './styles';
import {RoundButton} from '../../components';
import MenuSetting from '../../components/atoms/MenuSetting';

export default function Home() {
  const [photo, setPhotos] = useState(photoArray);
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!photo.length) {
      setPhotos(photoArray);
    }
  }, [photo.length]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy});
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = useCallback(() => {
    setPhotos(prevState => prevState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handleChoice = useCallback(
    direction => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x],
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.theme} />
        <View style={styles.contentWrapper}>
          {photo
            .map(({name, source, desc}, index) => {
              const isFirst = index === 0;
              const dragHandlers = isFirst ? panResponder.panHandlers : {};

              return (
                <Card
                  key={name}
                  name={name}
                  desc={desc}
                  source={source}
                  isFirst={isFirst}
                  swipe={swipe}
                  tiltSign={tiltSign}
                  {...dragHandlers}
                />
              );
            })
            .reverse()}
          <RoundButton handleChoice={handleChoice} />
          <MenuSetting />
        </View>
      </View>
    </>
  );
}

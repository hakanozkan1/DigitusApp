import { FlatList, StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import data from '../sliderData';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(FlatList);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleOnViewableItemsChanged = useCallback(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }, []);


  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <View>
        <FlatList
          data={data}
          renderItem={({item}) => <SlideItem item={item} />}
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        </View>
        <Pagination data={data} index={index} flatListRef={flatListRef}/>
      </View>
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  view: {
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

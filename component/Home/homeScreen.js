import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
  View,
  ScrollView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Truyen from '../child/truyen';
// import Carousel, {
//   withCarouselContext,
//   useCarouselContext,
// } from '@r0b0t3d/react-native-carousel';
const screen = Dimensions.get('window');
export default function HomeScreen() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [danhSachTruyen, setDanhSachTruyen] = React.useState([]);
  const [aspectRatio, setaspectRatio] = React.useState(1);
  const [flatList, setFlatList] = React.useState(null);
  const [currentOffset, setCurrenOffset] = React.useState(1);
  //Lấy dữ liệu khi bắt đầu
  React.useEffect(() => {
    let dataimage = require('../../assets/image.json').data;
    setData([dataimage[dataimage.length - 1], ...dataimage, dataimage[0]]);
    setDanhSachTruyen(require('../../assets/danhSachTruyen.json'));
    setLoading(false);
  }, []);
  //Tự động scroll khi đủ dữ liệu
  React.useEffect(() => {
    const interval = setInterval(() => {
      //get current scroll position
      if (flatList !== null) {
        if (currentOffset < data.length - 1) {
          setCurrenOffset(prev => prev + 1);
          flatList.scrollToIndex({
            index: currentOffset,
            animated: true,
          });
        } else {
          setCurrenOffset(1);
          flatList.scrollToIndex({
            index: currentOffset,
            animated: true,
          });
        }
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [data, flatList, currentOffset]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Animated.FlatList
            data={data}
            horizontal
            ref={ref => {
              setFlatList(ref);
            }}
            // khi scroll thì set currentOffset
            onScroll={e => {
              if (
                Math.floor(
                  (e.nativeEvent.contentOffset.x + 1) / (screen.width - 30),
                ) ===
                data.length - 1
              ) {
                setCurrenOffset(1);
                flatList.scrollToIndex({
                  index: currentOffset,
                  animated: true,
                });
              }
              if (
                Math.floor(
                  (e.nativeEvent.contentOffset.x + 1) / (screen.width - 30),
                ) === 0
              ) {
                setCurrenOffset(data.length - 2);
                flatList.scrollToIndex({
                  index: currentOffset,
                  animated: true,
                });
              }
            }}
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled={true}
            renderItem={({item}) => (
              <Image
                onLoadEnd={() => {
                  Image.getSize(
                    item.imageUrl,
                    (width, height) => {
                      setaspectRatio(width / height);
                    },
                    error => {
                      console.log(error);
                    },
                  );
                }}
                source={{uri: item.imageUrl}}
                style={{
                  width: screen.width - 30,
                  aspectRatio: aspectRatio,
                  resizeMode: 'contain',
                }}
              />
            )}
          />
        )}
      </View>
      <View style={styles.box2}>
        <View style={styles.containerIcon}>
          <Icon name="home" size={30} color="#64B5F6" />
          <Text style={styles.textIcon}>Thể loại</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon name="home" size={30} color="#E57373" />
          <Text style={styles.textIcon}>Xếp hạng</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon name="home" size={30} color="#66BB6A" />
          <Text style={styles.textIcon}>Truyện mới</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon name="home" size={30} color="#F9A825" />
          <Text style={styles.textIcon}>Truyện full</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon name="home" size={30} color="#7582C5" />
          <Text style={styles.textIcon}>Truyện vip</Text>
        </View>
      </View>
      <View style={styles.box3}>
        <View style={styles.menu}>
          <Text style={styles.text}>Truyện mới cập nhật</Text>
          <Icon
            style={styles.chevron_right}
            name="arrow-right-thin"
            size={30}
            color="#900"
          />
        </View>
        <FlatList
          data={danhSachTruyen.data}
          horizontal
          renderItem={({item}) => {
            return (
              <Truyen
                image_url={item.cover_url}
                title={item.title}
                numChapters={item.numChapters}
              />
            );
          }}
        />
      </View>
      <View style={styles.box3}>
        <View style={styles.menu}>
          <Text style={styles.text}>Truyện đã hoàn thành</Text>
          <Icon
            style={styles.chevron_right}
            name="arrow-right-thin"
            size={30}
            color="#900"
          />
        </View>
        <FlatList
          data={danhSachTruyen.data}
          horizontal
          renderItem={({item}) => {
            return (
              <Truyen
                image_url={item.cover_url}
                title={item.title}
                numChapters={item.numChapters}
              />
            );
          }}
        />
      </View>
      <View style={styles.box3}>
        <View style={styles.menu}>
          <Text style={styles.text}>Truyện phổ biến</Text>
          <Icon
            style={styles.chevron_right}
            name="arrow-right-thin"
            size={30}
            color="#900"
          />
        </View>
        <FlatList
          data={danhSachTruyen.data}
          horizontal
          renderItem={({item}) => {
            return (
              <Truyen
                image_url={item.cover_url}
                title={item.title}
                numChapters={item.numChapters}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
  },
  box3: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chevron_right: {
    alignSelf: 'flex-end',
  },
  containerIcon: {
    width: 50,
    textAlign: 'center',
    alignItems: 'center',
  },
  textIcon: {
    textAlign: 'center',
    fontSize: 15,
  },
});

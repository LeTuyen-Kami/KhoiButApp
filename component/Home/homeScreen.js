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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Truyen from '../child/truyen';
const screen = Dimensions.get('window');
export default function HomeScreen(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [defaultData, setDefaultData] = React.useState([]);
  const [danhSachTruyen, setDanhSachTruyen] = React.useState([]);
  const [aspectRatio, setaspectRatio] = React.useState(1);
  const [flatList, setFlatList] = React.useState(null);
  const [currentOffset, setCurrenOffset] = React.useState(0);
  //Lấy dữ liệu khi bắt đầu
  React.useEffect(() => {
    let dataimage = require('../../assets/image.json').data;
    setData(dataimage);
    setDefaultData(dataimage);
    setDanhSachTruyen(require('../../assets/danhSachTruyen.json'));
    setLoading(false);
  }, []);
  //Tự động scroll khi đủ dữ liệu
  React.useEffect(() => {
    const interval = setInterval(() => {
      //get current scroll position
      if (flatList !== null) {
        //console.log(flatList.current.scrollProperties.offset);
        // if (currentOffset < data.length - 1) {
        //   // setCurrenOffset(prev => prev + 1);
        //   flatList.scrollToIndex({
        //     index: currentOffset,
        //     animated: true,
        //   });
        // } else {
        //   // setCurrenOffset(1);
        //   flatList.scrollToIndex({
        //     index: currentOffset,
        //     animated: true,
        //   });
        // }
        if (currentOffset > 30) {
          setData(defaultData);
          setCurrenOffset(0);
        }
        try {
          flatList.scrollToIndex({
            index: currentOffset + 1,
            animated: true,
          });
        } catch (e) {}
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, flatList, currentOffset]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            horizontal
            ref={ref => {
              setFlatList(ref);
            }}
            onScroll={event => {
              setCurrenOffset(
                Math.floor(event.nativeEvent.contentOffset.x / screen.width) +
                  1,
              );
            }}
            scrollEventThrottle={160}
            // khi scroll thì set currentOffset
            onEndReachedThreshold={0.3}
            onEndReached={() => {
              setData([...data, ...data]);
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
                // eslint-disable-next-line react-native/no-inline-styles
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
          <Icon name="apps" size={30} color="#64B5F6" />
          <Text style={styles.textIcon}>Thể loại</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon name="chart-bar" size={30} color="#E57373" />
          <Text style={styles.textIcon}>Xếp hạng</Text>
        </View>
        <View style={styles.containerIcon}>
          <MaterialIcon name="library-books" size={30} color="#66BB6A" />
          <Text style={styles.textIcon}>Truyện mới</Text>
        </View>
        <View style={styles.containerIcon}>
          <MaterialIcon name="military-tech" size={30} color="#F9A825" />
          <Text style={styles.textIcon}>Truyện full</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon name="diamond-stone" size={30} color="#7582C5" />
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('HomeDetail', {
                    item: item,
                  })
                }>
                <Truyen
                  image_url={item.cover_url}
                  title={item.title}
                  numChapters={item.numChapters}
                />
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('HomeDetail', {
                    item: item,
                  })
                }>
                <Truyen
                  image_url={item.cover_url}
                  title={item.title}
                  numChapters={item.numChapters}
                />
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('HomeDetail', {
                    item: item,
                  })
                }>
                <Truyen
                  image_url={item.cover_url}
                  title={item.title}
                  numChapters={item.numChapters}
                />
              </TouchableOpacity>
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
  box1: {},
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

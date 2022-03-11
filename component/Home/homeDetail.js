import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Chuong} from '../child/Chuong';

const screenWidth = Dimensions.get('window').width;
const ShowRating = rate => {
  let result = [];
  for (let i = 1; i <= rate; i++) {
    result.push(<AntdesignIcon key={i} name="star" size={20} color="yellow" />);
  }
  for (let i = 5; i > rate; i--) {
    result.push(
      <AntdesignIcon key={i} name="staro" size={20} color="yellow" />,
    );
  }
  return result;
};

function HomeDetail(props) {
  const [data, setData] = React.useState([]);
  const [size, setSize] = React.useState([200, 'flex']);
  const item = props.route.params.item;
  React.useEffect(() => {
    switch (item.slug) {
      case 'dau-pha-thuong-khung':
        setData(
          require('../../assets/danhSachChuong/dau-pha-thuong-khung-chuong.json')
            .data,
        );
        break;
      case 'he-thong-lien-minh':
        setData(
          require('../../assets/danhSachChuong/he-thong-lien-minh-chuong.json')
            .data,
        );
        break;
      case 'pham-nhan-tu-tien':
        setData(
          require('../../assets/danhSachChuong/pham-nhan-tu-tien-chuong.json')
            .data,
        );
        break;
      case 'thon-phe-tinh-khong':
        setData(
          require('../../assets/danhSachChuong/thon-phe-tinh-khong-chuong.json')
            .data,
        );
        break;
      case 'trong-sinh-do-thi-cuong-long':
        setData(
          require('../../assets/danhSachChuong/trong-sinh-do-thi-cuong-long-chuong.json')
            .data,
        );
        break;
      default:
        setData(
          require('../../assets/danhSachChuong/pham-nhan-tu-tien-chuong.json')
            .data,
        );
        break;
    }
  }, [item]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box1}>
          <ImageBackground
            source={{uri: item.cover_url}}
            resizeMode="cover"
            blurRadius={5}
            style={{
              flex: 1,
              width: null,
              height: null,
            }}>
            <View style={styles.box1}>
              <View style={styles.box1_1}>
                <Image source={{uri: item.cover_url}} style={styles.image} />
                <View style={styles.box1}>{ShowRating(item.numRatings)}</View>
              </View>
              <View style={styles.box1_2}>
                <Text style={[styles.title, styles.textWhite]}>
                  {item.title}
                </Text>
                <View style={[styles.author, styles.borderBox]}>
                  <Text style={styles.textWhite}>{item.author.name}</Text>
                </View>
                <View style={styles.box1}>
                  <View style={[styles.Genre, styles.borderBox]}>
                    <Text style={styles.textWhite}>{item.Genre.name}</Text>
                  </View>
                  <View
                    style={[styles.state, styles.borderBox, styles.marginLeft]}>
                    <Text style={styles.textWhite}>{item.state}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.box1}>
              <TouchableOpacity
                style={styles.readButton}
                onPress={() =>
                  props.navigation.navigate('HomeReadNovel', {item: data[0]})
                }>
                <Icon name="play" size={20} color="white" />
                <Text
                  style={[styles.textSize20, styles.bold, styles.textWhite]}>
                  {' '}
                  Đọc Ngay
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <MaterialIcon name="bookmark-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <MaterialIcon name="file-download" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.box1, styles.starWrap]}>
          <View style={styles.center}>
            <Text style={[styles.textSize20, styles.bold]}>
              {item.numChapters}
            </Text>
            <Text style={styles.textSize15}>Chương</Text>
          </View>
          <View
            style={[
              styles.center,
              {
                borderWidth: 1,
                borderColor: 'gray',
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
              },
            ]}>
            <Text style={[styles.textSize20, styles.bold]}>
              {item.num_views}
            </Text>
            <Text style={styles.textSize15}>Lượt Xem</Text>
          </View>
          <View
            style={[
              styles.center,
              {
                borderWidth: 1,
                borderRightColor: 'gray',
                borderLeftColor: 'transparent',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
              },
            ]}>
            <Text style={[styles.textSize20, styles.bold]}>
              {item.num_likes}
            </Text>
            <Text style={styles.textSize15}>Lượt Thích</Text>
          </View>
          <View style={styles.center}>
            <Text style={[styles.textSize20, styles.bold]}>
              {item.num_views + Math.floor(Math.random() * 1000)}
            </Text>
            <Text style={styles.textSize15}>Tiếp Cận</Text>
          </View>
        </View>
        <View style={[styles.starWrap, {height: size[0], overflow: 'hidden'}]}>
          <Text style={[styles.textSize20, styles.bold]}>
            Giới Thiệu Truyện
          </Text>
          <Text style={[styles.textSize15]}>{item.summary}</Text>
          <TouchableOpacity
            onPress={() => {
              setSize([null, 'none']);
            }}
            style={{
              position: 'absolute',
              top: 165,
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 5,
              width: '100%',
              margin: 5,
              borderTopColor: 'rgba(0,0,0,0.1)',
              borderTopWidth: 1,
              display: size[1],
            }}>
            <Icon name="angle-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.starWrap}>
          <Text style={[styles.textSize20, styles.bold]}>
            Chương Mới Cập Nhật
          </Text>
          {data
            .slice()
            .reverse()
            .slice(0, 5)
            .map((item1, index) => (
              <Chuong item={item1} key={index} {...props} />
            ))}

          <TouchableOpacity
            style={styles.buttonDsc}
            onPress={() => {
              props.navigation.navigate('HomeListChapter', {
                item: item,
                data: data,
              });
            }}>
            <Text style={[styles.textSize15, styles.bold, styles.textWhite]}>
              Danh Sách Chương
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.starWrap}>
          <Text style={[styles.textSize20, styles.bold]}>Truyện Tương Tự</Text>
        </View>
        <View style={styles.tacGia}>
          <Image
            source={require('../../assets/account1.png')}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text style={[styles.textSize15, styles.bold]}>
            {item.author.name}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  box1: {
    flexDirection: 'row',
  },
  chuong: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: (screenWidth - 20) / 4,
  },
  box1_1: {
    padding: 10,
  },
  box1_2: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: screenWidth - 100,
  },
  borderBox: {
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  textWhite: {
    color: 'white',
  },
  marginLeft: {
    marginLeft: 10,
  },
  textSize20: {
    fontSize: 20,
  },
  textSize15: {
    fontSize: 17,
  },
  bold: {
    fontWeight: 'bold',
  },
  Genre: {
    backgroundColor: '#1565C0',
  },
  state: {
    backgroundColor: '#006064',
  },
  author: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  readButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1565C0',
    padding: 5,
    width: (screenWidth - 10) * 0.7,
    borderRadius: 10,
    margin: 5,
  },
  button: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    width: (screenWidth - 10) * 0.15 - 10,
  },
  buttonDsc: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  starWrap: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  tacGia: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
export default HomeDetail;

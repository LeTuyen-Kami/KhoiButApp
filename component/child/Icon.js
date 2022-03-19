import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

function CustomIcon(props) {
  const page = props.page;
  const dataLength = props.dataLength;
  const isNext = props.isNext;
  const changeCurrenPage = props.changeCurrenPage;
  React.useEffect(() => {
    changeCurrenPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Icon
      name={props.name}
      size={props.size}
      color={
        !isNext
          ? props.currenPage > 0
            ? '#000'
            : '#ccc'
          : props.currenPage < dataLength
          ? '#000'
          : '#ccc'
      }
      onPress={() => {
        if (props.currenPage > 0 && !isNext) {
          changeCurrenPage(props.currenPage - 1);
          props.changePage(props.currenPage - 1);
        }
        if (props.currenPage < dataLength && isNext) {
          changeCurrenPage(props.currenPage + 1);
          props.changePage(props.currenPage + 1);
        }
      }}
    />
  );
}
export default connect(
  state => ({
    currenPage: state.currenPage,
  }),
  dispatch => ({
    changeCurrenPage: value => {
      dispatch({type: 'CHANGE_CURRENT_PAGE', payload: value});
    },
  }),
)(CustomIcon);

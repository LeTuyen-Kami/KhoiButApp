import React from 'react';
import {Text} from 'native-base';
import {connect} from 'react-redux';

function CustomText(props) {
  const firstChapTitle = props.firstChapTitle;
  const changeChapTitle = props.changeChapTitle;
  React.useEffect(() => {
    changeChapTitle(firstChapTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Text {...props}>{props.chapTitle}</Text>;
}
export default connect(
  state => ({
    chapTitle: state.chapTitle,
  }),
  dispatch => ({
    changeChapTitle: value => {
      dispatch({type: 'CHANGE_CHAP_TITLE', payload: value});
    },
  }),
)(CustomText);

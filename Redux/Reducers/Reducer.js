const initialState = {
  isLoading: false,
  chapTitle: '',
  data: [],
  currenPage: 0,
  item: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_PAGE':
      return {
        ...state,
        currenPage: action.payload,
      };
    case 'CHANGE_LIST_CHAPTER':
      return {
        ...state,
        data: action.payload,
      };
    case 'CHANGE_ITEM':
      return {
        ...state,
        item: action.payload,
      };
    case 'CHANGE_CHAP_TITLE':
      return {
        ...state,
        chapTitle: action.payload,
      };
    default:
      return state;
  }
}

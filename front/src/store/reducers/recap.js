import {
  ADD_FIELD_NAP,
  REMOVE_FIELD_NAP,
  CHANGE_VALUE_TEXT,
  CHANGE_MOOD,
  CHANGE_TIME_NAP,
  // CHANGE_TIME_NAP_START,
  // CHANGE_TIME_NAP_END,
  SAVE_RECAPS,
  CHANGE_DATE,
  SAVE_RECAP,
} from 'src/store/actions/recap';



const initialState = {
  napFormLimit: 1,
  napFormList: [
    {
      id: 1,
      nameStartNap: `start_time_1`,
      nameEndNap: 'end_time_1',
      nameCommentNap: 'comment_nap_1'
    },
  ],

  isOpen: false,
  loading: true,
  list: [],
  time: '12:00:00',
  comment_meal: 'un commentaire sur le miam',
  start_time: '',
  end_time: '',
  comment: '',
  naps: [],
  meals: [],


  date: '',
  mood: '',
  others:'',

  start_time_1: '',
  end_time_1: '',
  comment_nap_1: '',

  start_time_2: '',
  end_time_2: '',
  comment_nap_2: '',

  start_time_3: '',
  end_time_3: '',
  comment_nap_3: '',
};





const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case ADD_FIELD_NAP:{

      const newId = Math.max(...state.napFormList.map(form => form.id)) + 1

      const newNap = {
        id: newId,
        nameStartNap: `start_time_${newId}`,
        nameEndNap: `end_time_${newId}`,
        nameCommentNap: `comment_nap_${newId}`
      } 
      return {
        ...state,
        napFormList: [
          ...state.napFormList,
          newNap
        ],
        napFormLimit: state.napFormLimit + 1
      };
    }

    case REMOVE_FIELD_NAP:{

      const newFormList = [...state.napFormList]
      newFormList.pop()
      return {
        ...state,
        napFormList: [...newFormList],
        napFormLimit: state.napFormLimit - 1
      };
    }

    case CHANGE_VALUE_TEXT: {
      return {
        ...state,
        [action.key]: action.value,
      }; 
    }         
    case CHANGE_MOOD:
      return {
        ...state,
        [action.key]: action.value,
      }
      case CHANGE_TIME_NAP:
        console.log(typeof(action.value))
        console.log(action.key)
        // const newItem = {
        //   start_time: state.start_nap_1,
        //   end_time: state.end_nap_1,
        // }
      return {
        ...state,
          [action.key]: action.value,
      }

      case SAVE_RECAPS: {
       return {
         ...state,
         list: action.payload,
         loading: false,
       };
     }
     case CHANGE_DATE: {
      return {
        ...state,
        [action.key]: action.value,
      }; 
    }
    case SAVE_RECAP: {
      return {
        ...state,
        recap: action.payload,
        date: '',
        mood: '',
        others:'',
        start_time_1: '',
        end_time_1: '',
        comment_nap_1: '',
        start_time_2: '',
        end_time_2: '',
        comment_nap_2: '',
        start_time_3: '',
        end_time_3: '',
        comment_nap_3: '',
      }
    }
    default:
      return state;
  }
};

export default reducer;
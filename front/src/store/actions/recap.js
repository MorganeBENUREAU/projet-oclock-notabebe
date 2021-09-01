export const FETCH_RECAPS = 'FETCH_RECAPS';
export const SAVE_RECAPS = 'SAVE_RECAPS';
export const SHOW_FIELD_NAP = 'SHOW_FIELD_NAP';
export const CHANGE_VALUE_TEXT = 'CHANGE_VALUE_TEXT';
export const CHANGE_MOOD = 'CHANGE_MOOD';
export const CHANGE_TIME_NAP = 'CHANGE_TIME_NAP';
export const CREATE_RECAP ='CREATE_RECAP';
export const CHANGE_DATE = 'CHANGE_DATE'
export const SAVE_RECAP = 'SAVE_RECAP';

export const fetchRecaps = () => ({
  type: FETCH_RECAPS,
})

export const saveRecaps = (recaps) => ({
  type: SAVE_RECAPS,
  payload: recaps,
});

export const showFieldNap = () => ({
  type: SHOW_FIELD_NAP,
});

export const changeValueText = (key, value) => ({
  type: CHANGE_VALUE_TEXT,
  value,
  key,
});

export const changeMood = (key, value) => ({
  type: CHANGE_MOOD,
  value,
  key,
});

export const changeTimeNap = (key, value) => ({
  type: CHANGE_TIME_NAP,
  value,
  key,
});

export const submitFormCreateRecap = (child_id) => ({
  type: CREATE_RECAP,
  child_id,
});

export const changeDate = (value, key) => ({
  type: CHANGE_DATE,
  key,
  value,
});

export const saveRecap = (recap) => ({
  type: SAVE_RECAP,
  payload: recap,
})

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { changeDate } from 'src/store/selectors/formatDate'

import './styles.scss';

const CreateRecap = ({
  openNewNap, 
  isOpen, 
  onChangeValue, 
  name, 
  moodSelected, 
  // timeNapStartSelected,
  // timeNapEndSelected,
  timeNapSelected,
  value,
  submitCreateRecap,
  dateSelected,

  napFormList,
  napFormLimit,
  removeLastNap,
  addNewNap,

}) => {

  const data = useLocation();
  const child = data.state.child;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('je clique sur submit')
    submitCreateRecap(child.id);
  }

  const handleAddNapFormClick = () => {
    addNewNap();
  };

  const handleRemoveNapFormClick = () => {
    removeLastNap();
  };

  const changeValue = (e) => {
    e.preventDefault();
    onChangeValue(e.target.value, e.target.name);
  };

  const selectMood = (e) => {
    e.preventDefault();
    moodSelected(e.target.value, e.target.name);
  }

  const selectTimeNap = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    timeNapSelected(e.target.value, e.target.name);
  }

  // const selectTimeStartNap = (e) => {
  //   e.preventDefault();
  //   timeNapStartSelected(e.target.value, e.target.name);
  // }

  // const selectTimeEndNap = (e) => {
  //   e.preventDefault();
  //   timeNapEndSelected(e.target.value, e.target.name);
  // }

  const selectDate = (e) => {
    e.preventDefault();
    const newDate = changeDate(e.target.value)
    dateSelected(newDate, e.target.name);

  }

  return (
    <form className="createrecap" onSubmit={handleSubmit}>
      <div className="createrecap">
        <h1 className="createrecap__title">Création d'un récap pour </h1>
        <h1 className="createrecap__firstname">{child.first_name}</h1>

        <label htmlFor="date"> Date: </label>

        <input type="date" id="date" name="date"
          //value="2021-08-31"
           min="2020-01-01" max="2030-12-31" 
           onChange={selectDate}
           />

        <div className="createrecap__mood">
          <label htmlFor="mood-select" className="createrecap__mood__label">Humeur du jour :</label>
          <select name="mood" id="mood-select" onChange={selectMood}>
            <option value="0">--Sélectionner--</option>
            <option value="happy">Joyeux</option>
            <option value="middle">Ca va</option>
            <option value="grumpy">Grincheux</option>
          </select>
        </div>
        

        // FORMULAIRE NAPS
      
      {napFormList.map((form) => (
        <div key={form.id} className="createrecap__nap">
        <h2 className="createrecap__nap__title">Sieste </h2>

          <div className="createrecap__nap__timeinputs">
          <p>De</p>
            <input
              type="time"
              id="snap"
              name={form.nameStartNap}
              onChange={selectTimeNap}
              //onChange={selectTimeStartNap}
              className="createrecap__nap__input"
            />
          <p> à </p>
            <input
              type="time"
              id="enap"
              name={form.nameEndNap}
              onChange={selectTimeNap}
              //onChange={selectTimeEndNap}

              className="createrecap__nap__input"
            />
          </div>

          <div className="createrecap__nap__comment">
            <textarea
              id="nap"
              name={form.nameCommentNap}
              onChange={changeValue}
              rows="3"
              placeholder="Ecrivez votre commentaire"
              className="createrecap__nap__comment__textarea"
            />
          </div>
        </div>
      ))}

        // BOUTON AJOUTER
        {napFormLimit < 3 && (
          <button 
            type="button" 
            onClick={handleAddNapFormClick} 
            className="createrecap__nap__button"
            >
              Ajouter une sieste
          </button>
        )}
          
        
        // BOUTON ANNULER
        {napFormLimit > 1 && (
          <button type="button" onClick={handleRemoveNapFormClick} className="createrecap__nap__button">Annuler</button>
        )}

      <div className="createrecap__nap__comment">
          <label htmlFor="meal" className="createrecap__nap__comment__label">Commentaire repas:</label>
          <textarea
            id="meal"
            name="comment_meal"
            onChange={changeValue}
            rows="3"
            className="createrecap__nap__comment__textarea"
          />
        </div>

        <div className="createrecap__nap__comment">
          <label htmlFor="others" className="createrecap__nap__comment__label">Autres commentaires:</label>
          <textarea
            id="others"
            name="others"
            onChange={changeValue}
            rows="3"
            className="createrecap__nap__comment__textarea"
          />
        </div>

          <button type="submit" className="createrecap__submit">Créer le récap</button>
        
      </div>
      <div>-</div>
      </form>
   
  );
}

CreateRecap.propTypes = {

};

export default CreateRecap;

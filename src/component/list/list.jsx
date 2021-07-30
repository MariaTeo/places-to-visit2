import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initListAction, selectAction, changeStatusAction } from '../../store/visit.action';
import Visited from '../visited/visited';
import { data } from './data';
import * as S from './list.style'


const List = () => {
  const dispatch = useDispatch()
  const toVisit = useSelector(({ toVisit }) => toVisit)
  console.log(toVisit)
  const { list, selected } = toVisit

  useEffect(() => {
    dispatch(initListAction(data))
  }, [])
  
  const onClick = (place) => {
    dispatch(selectAction(place))
  }

  const unselect = () => {
    dispatch(selectAction({}))
  }

  const toggle = () => {
    dispatch(changeStatusAction())
  }

  return (
    <div>
      <h1>Places to visit:</h1>
      <S.List>
        {list.map((place) => {
          return (
            <>
              <S.Location onClick={() => onClick(place)}>{place.location}</S.Location>
              <Visited visited={place.visited}/>
            </>
          );
        })}
      </S.List>

      <h2>Selected place:</h2>
      <p>{selected.location}</p>
      <button onClick={unselect}>Unselect</button>
      <button onClick={toggle}>Toggle Visit Status</button>
    </div>
  );
};

export default List;

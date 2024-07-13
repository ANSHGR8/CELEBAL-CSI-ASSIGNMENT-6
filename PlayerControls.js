import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong, pauseSong } from '../../redux/actions/musicActions';

const PlayerControls = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(state => state.music.isPlaying);

  return (
    <div>
      <button onClick={() => dispatch(playSong())}>Play</button>
      <button onClick={() => dispatch(pauseSong())}>Pause</button>
    </div>
  );
};

export default PlayerControls;

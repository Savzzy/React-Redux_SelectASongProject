import { combineReducers } from 'redux';

const songReducers = ()=>{
    return [
        {title: 'No Scrubs', duration: '4:05'},

        { title: 'Macerena', duration: '2:30'},
        { title: 'All Star', duration: '4:05' },
        { title: 'I Want it This Way', duration: '1:45' }

    ];
};


const selectedSongReducer = (selectedSong=null , action)=>{
    //1. check the action type
    //2. if action type is equal to selected sing then modifiy the data based on the action payload
    if (action.type === 'SONG_SELECTED'){
        return  action.payload;
    }
    return selectedSong;
}

const songInfoReducer = (songInfo=null , action)=>{
    if (action.type === 'SONG_CLICKED'){
        return action.payload;
    }
    return songInfo;
}

export default combineReducers({
    songs : songReducers,
    selectedSong : selectedSongReducer,
    songInfo: songInfoReducer
})

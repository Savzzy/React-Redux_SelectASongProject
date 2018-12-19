//action creator

export const selectSong = (song) =>{
    return{
        type : 'SONG_SELECTED',
        payload : song
    };
};

export const songInfoAction = (song) =>{
    return {
        type: 'SONG_CLICKED',
        payload :song
    }
}


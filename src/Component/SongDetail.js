import React from 'react';
import { connect } from 'react-redux';


const SongDetail = (props)=>{
    if (props.songSelected){
        return <div>Selected Song : {props.songSelected.title}</div>
    }
    else{
        return <div> No Song Selected</div>
    }
   
};

const mapStateToProps = state=>{
    return {
        songSelected : state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);
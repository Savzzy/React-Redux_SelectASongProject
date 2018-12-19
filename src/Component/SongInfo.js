import React from 'react';
import { connect } from 'react-redux';



const SongInfo = (props) => {
    if (props.songInfo)
    return (
        <div>Clicked Song : {props.songInfo.title}</div>
    )
    else{
        return <div>No Song to Display</div>
    }
}
const mapStateToProps = (state) => {
    return (
        {
            songInfo: state.songInfo
        }
    )
}

export default connect(mapStateToProps)(SongInfo);
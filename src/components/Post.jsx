import React from 'react';
import { connect } from 'react-redux';
import UpVoteButton from './UpVoteButton';
import DownVoteButton from './DownVoteButton';

const Post = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.date}, {props.topic}</h5>
      <p>{props.post}</p>
      <h4>{props.id}</h4>
      <UpVoteButton/>
      <DownVoteButton/>
      <hr/>
    </div>
  );
};
 
export default Post;
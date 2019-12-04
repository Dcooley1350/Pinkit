import React from 'react';

const UpVoteButton = (props) => {
    function handleUpVoteButtonClick() {
        const action = {
            type: 'UP_VOTE',
            postId: props.postId
        }
        dispatch(action);
    }
    return (
        <button onClick={handleUpVoteButtonClick} className='button btn small'>UpVote!</button>
      );
}
 
export default UpVoteButton;
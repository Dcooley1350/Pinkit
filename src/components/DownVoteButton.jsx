import React from 'react';

const DownVoteButton = (props) => {
    function handleDownVoteButtonClick() {
        const action = {
            type: 'DOWN_VOTE',
            postId: props.postId
        }
        dispatch(action);
    }
    return (
        <button onClick={handleDownVoteButtonClick} className='button btn small'>DownVote!</button>
      );
}
 
export default DownVoteButton;
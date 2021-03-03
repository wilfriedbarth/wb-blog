import React, { useRef, useEffect } from 'react';

import './comments.css';

const Comments = () => {
  const commentBox = useRef();
  useEffect(() => {
    const commentBoxCurrent = commentBox.current;
    if (commentBoxCurrent) {
      const scriptEl = document.createElement('script');
      scriptEl.setAttribute('async', true);
      scriptEl.setAttribute('crossorigin', 'anonymous');
      scriptEl.setAttribute('issue-term', 'url');
      scriptEl.setAttribute('repo', 'wilfriedbarth/wb-blog-comments');
      scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
      scriptEl.setAttribute('theme', 'github-light');
      commentBoxCurrent.appendChild(scriptEl);
    } else {
      console.log('Error adding comments box.');
    }
    return () => {
      if (commentBoxCurrent) {
        const utterancesDiv = document.getElementsByClassName('utterances')[0];
        if (utterancesDiv) {
          utterancesDiv.remove();
        }
      } else {
        console.log('Error removing comments box.');
      }
    };
  }, []);
  return <div id="comments" ref={commentBox} />;
};

export default Comments;

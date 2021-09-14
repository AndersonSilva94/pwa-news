import React, { memo } from 'react';
import ShareIcon from '../../images/share.svg';
import CopyIcon from '../../images/copy.svg';
import './style.css'

const navigatorHasShare = navigator.share;

const URL = 'http://localhost:3001/'

function Actions({ post, subject }) {
  const { id, title } = post;

  const shareInfo = () => { // caso seja dispositivo móvel, compartilhe
    navigator.share({
      title: `PWA News - ${subject}`,
      text: title,
      url: URL
    });
  }

  const copyInfo = () => { //caso seja versão web, compartilhe
    navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`)
  }

  const renderAction = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo;
    const icon = navigatorHasShare ? ShareIcon : CopyIcon;

    return <img alt="icon" src={icon} className="share-icon" onClick={action} />
  }

  return (
    <div className="share">
      {renderAction()}
    </div>
  );
}

export default memo(Actions);
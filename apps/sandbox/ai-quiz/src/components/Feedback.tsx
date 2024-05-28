import React from 'react';

type Props = {
  feedback: string;
  correct: boolean
}

const FeedbackOverlay: React.FC<Props> = ({feedback, correct}) => {

  const getColorClass = () => {
    if (correct === undefined) return '';
    return correct ? 'overlay-correct' : 'overlay-incorrect';
  };

  return (
    <div className={`data-overlay ${getColorClass()}`}>
      <div className="feedback">{feedback}</div>
    </div>
  );
};

export default FeedbackOverlay;
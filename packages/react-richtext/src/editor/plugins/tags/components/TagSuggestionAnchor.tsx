/* eslint-disable react-refresh/only-export-components */
import React from 'react';

import withConsumer from '../../../context/withConsumer';
import { IEditorContext } from '../../../../types';

interface IProps {
  context: IEditorContext;
  children: React.ReactNode;
  offsetKey: string;
}

const TagSuggestionAnchor = (props: IProps): JSX.Element => {
  const {
    setShowSuggestions,
    registerSuggestionPortal,
  } = props.context;
  const newTagPortal = React.useRef();

  React.useLayoutEffect(() => {
    setShowSuggestions(
      true,
      props.offsetKey,
    );
    if (newTagPortal.current) {
      registerSuggestionPortal(
        newTagPortal.current,
        props.offsetKey,
      );
    }
    return (): void => {
      setShowSuggestions(false, props.offsetKey);
    };
  }, []);

  return (
    <span className="tagged-text" ref={newTagPortal}>{props.children}</span>
  );
};

export default withConsumer(TagSuggestionAnchor);

import React from 'react';

import Provider from './editor/context/Provider';
import RichEditor from './editor/RichEditor';
import useForwardedRef from './editor/libs/hooks/useForwardedRef';
import * as Types from './types';

export default React.forwardRef<HTMLDivElement, Omit<Types.IEditorProps, 'editorContainerRef'>>(
  (props, ref): JSX.Element => {
  const innerRef = useForwardedRef(ref);
  return (
    <Provider {...props}>
      <RichEditor
        {...props}
        editorContainerRef={innerRef}
      />
    </Provider>
  )
});

export  type {
  IEntityInfo, IRenderSuggestions, IRenderHint, IEditorState
} from './types';
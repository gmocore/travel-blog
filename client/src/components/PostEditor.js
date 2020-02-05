import React from 'react';
import {Editor, EditorState} from 'draft-js';

function PostEditor() {
    const [editorState, setEditorState] = React.useState(
      EditorState.createEmpty()
    );
  
    const editor = React.useRef(null);
  
    function focusEditor() {
      editor.current.focus();
    }
  
    React.useEffect(() => {
      focusEditor()
    }, []);
  
    return (
      <div style={styles.editor} onClick={focusEditor} className="container bg-light text-dark">
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
        />
      </div>
    );
  }

  const styles = {
    editor: {
      border: '1px solid gray',
      minHeight: '6em'
    }
  };

  export default PostEditor
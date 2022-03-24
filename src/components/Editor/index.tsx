import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { Tools } from "./toolConfig";

interface IEditorProps {
  id?: string;
  readOnly?: boolean;
  defaultData?: object;
  setData?: any;
}
const ReactEditorJS = createReactEditorJS();

const Editor = ({ id, readOnly, defaultData, setData }: IEditorProps) => {
  const editorCore = React.useRef(null) as any;

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    // const savedData = await editorCore.current.save();
    // const result = await savedData;
    // setVal(result);
    editorCore.current.save().then((savedData: any) => setData(savedData));
  }, []);

  // React.useEffect(() => {
  //   console.log(val);
  // }, [val]);

  return (
    <ReactEditorJS
      defaultValue={defaultData}
      tools={Tools}
      readOnly={readOnly}
      onInitialize={handleInitialize}
      onChange={handleSave}
      holder={id}
    />
  );
};

export default Editor;

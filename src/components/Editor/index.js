// import { default as React, useEffect, useRef } from "react";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import { Tools } from "./toolConfig";

// // const DEFAULT_INITIAL_DATA = () => {
// //   return {
// //     time: new Date().getTime(),
// //     blocks: [
// //       {
// //         type: "header",
// //         data: {
// //           text: "This is my awesome editor!",
// //           level: 2,
// //         },
// //       },
// //     ],
// //   };
// // };

// const EDITTOR_HOLDER_ID = "editorjs";

// const Editor = (props) => {
//   const { value, setValue } = props;
//   const ejInstance = useRef();
//   const [editorData, setEditorData] = React.useState(value);

//   useEffect(() => {
//     if (!ejInstance.current) {
//       initEditor();
//     }
//     return () => {
//       ejInstance.current.destroy();
//       ejInstance.current = null;
//     };
//   }, []);

//   const initEditor = () => {
//     const editor = new EditorJS({
//       holder: EDITTOR_HOLDER_ID,
//       autofocus: true,
//       logLevel: "ERROR",
//       data: editorData,
//       onReady: () => {
//         ejInstance.current = editor;
//       },
//       onChange: () => {
//         saved();
//       },
//       tools: {
//         header: {
//           class: Header,
//           // inlineToolbar: ["marker", "link"],
//           // inlineToolbar: true,
//           config: {
//             // placeholder: "Header",
//             // levels: [1, 2, 3],
//             // defaultLevel: 2,
//           },
//           // shortcut: "CTRL+SHIFT+H",
//         },
//       },
//     });

//     function saved() {
//       editor
//         .save()
//         .then((savedData) => {
//           // console.log("salvado", savedData);
//           setValue(savedData);
//         })
//         .catch((error) => {
//           console.log("fallo al guardar", error);
//         });
//     }
//   };

//   return (
//     <React.Fragment>
//       <div id={EDITTOR_HOLDER_ID}> </div>
//     </React.Fragment>
//   );
// };

// export default Editor;

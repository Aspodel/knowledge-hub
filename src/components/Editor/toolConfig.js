import Embed from "@editorjs/embed";
import List from "@editorjs/list";
// import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

export const Tools = {
  embed: Embed,
  header: {
    class: Header,
    inlineToolbar: ["marker", "link"],
    config: {
      placeholder: "Header",
      levels: [1, 2, 3],
      defaultLevel: 2,
    },
    shortcut: "CTRL+SHIFT+H",
  },
  list: List,
  // code: Code,
  linkTool: LinkTool,
  image: Image,
  quote: Quote,
  marker: Marker,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

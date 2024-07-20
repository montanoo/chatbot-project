import { useEffect, useState } from "react";
import { marked } from "marked";

export default function Response({ content }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    setHtmlContent(marked(content));
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

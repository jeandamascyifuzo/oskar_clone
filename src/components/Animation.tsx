"use client";

import { JSX, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const fullCode = `import Okra from 'okra-js'

Okra.buildWithOptions({
  name: 'Peter the builder',
  env: 'production-sandbox',
  key: '', //Your key from okra dashboard
  token: '', //Your token from okra dashboard
  onSuccess: function(data){
    console.log('options close')
  },
  onClose: function(data){
    console.log('options close', data)
  }
})

Okra.buildWithShortUrl({
  short_url: '', //Your short url from the app builder
})`;

export default function TypingCode(): JSX.Element {
  const [typedCode, setTypedCode] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < fullCode.length) {
      const timeout = setTimeout(() => {
        setTypedCode((prev) => prev + fullCode[index]);
        setIndex((prev) => prev + 1);
      }, 10); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="p-4 rounded-lg">
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        customStyle={{
          backgroundColor: "transparent",
          padding: "0",
          margin: 0,
        }}
        wrapLines
        showLineNumbers={false}
      >
        {typedCode}
      </SyntaxHighlighter>
    </div>
  );
}

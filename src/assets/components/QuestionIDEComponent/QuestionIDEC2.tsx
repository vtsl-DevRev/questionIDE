import React, { useState, useCallback, useMemo, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import "./QuestionIDEC2.css";
import { editor } from "monaco-editor";

interface IEditorOptions extends editor.IStandaloneEditorConstructionOptions {
    acceptSuggestionOnEnter: "on" | "off" | "smart";
}

const QuestionIDEC2: React.FC = () => {
  const [code, setCode] = useState<string>("// Write your code here");
  const [language, setLanguage] = useState<string>("javascript");
  const [theme, setTheme] = useState<string>("vs-dark");
  const [fontSize, setFontSize] = useState<number>(14);
  const [minimap, setMinimap] = useState<boolean>(true);
  const [wordWrap, setWordWrap] = useState<string>("on");
  const [lineNumbers, setLineNumbers] = useState<string>("on");

  const languageDefaults = useMemo(() => ({
    javascript: `// JavaScript Example
const greeting = "Hello, World!";
console.log(greeting);

function example() {
  return "This is a JavaScript example";
}`,
    typescript: `// TypeScript Example
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30
};`,
    python: `# Python Example
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
    java: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    css: `/* CSS Example */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    html: `<!-- HTML Example -->
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
    sql: `-- SQL Example
SELECT column1, column2
FROM table_name
WHERE condition = true;`,
    cpp: `// C++ Example
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    csharp: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    php: `<?php
// PHP Example
function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet("World");
?>`,
    ruby: `# Ruby Example
def greet(name)
  "Hello, #{name}!"
end

puts greet("World")`,
  }), []);

  useEffect(() => {
    setCode(languageDefaults[language]);
  }, [languageDefaults, language]);

  const editorDidMount = useCallback((editor: any, monaco: any) => {
    editor.focus();
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      handleSave();
    });

    monaco.editor.defineTheme("github-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0d1117",
        "editor.foreground": "#c9d1d9",
        "editor.lineHighlightBackground": "#161b22",
        "editorLineNumber.foreground": "#6e7681",
        "editor.selectionBackground": "#264f78",
      },
    });
  }, []);

  const onChange = useCallback((newValue: string) => {
    setCode(newValue);
  }, []);

  const handleSave = useCallback(() => {
    console.log("Saving code:", code);
    // Implement save functionality
  }, [code]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const handleMinimapToggle = () => {
    setMinimap((prev) => !prev);
  };

  const options = useMemo(() => ({
    selectOnLineNumbers: true,
    colorDecorators: true,
    quickSuggestions: true,
    autoClosingBrackets: true,
    autoClosingQuotes: true,
    autoIndent: "advanced",
    formatOnPaste: true,
    formatOnType: true,
    snippetSuggestions: "inline",
    cursorBlinking: "smooth",
    cursorSmoothCaretAnimation: true,
    mouseWheelZoom: true,
    minimap: {
      enabled: minimap,
    },
    fontSize: fontSize,
    fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
    fontLigatures: true,
    wordWrap: wordWrap,
    lineNumbers: lineNumbers,
    renderWhitespace: "selection",
    scrollBeyondLastLine: false,
    automaticLayout: true,
    bracketPairColorization: {
      enabled: true,
    },
    padding: {
      top: 10,
    },
    suggest: {
      preview: true,
      showMethods: true,
      showFunctions: true,
      showConstructors: true,
      showDeprecated: false,
      showFields: true,
      showVariables: true,
      showClasses: true,
      showStructs: true,
      showInterfaces: true,
      showModules: true,
      showProperties: true,
      showEvents: true,
      showOperators: true,
      showUnits: true,
      showValues: true,
      showConstants: true,
      showEnums: true,
      showEnumMembers: true,
      showKeywords: true,
      showWords: true,
      showColors: true,
      showFiles: true,
      showReferences: true,
      showFolders: true,
      showTypeParameters: true,
      showSnippets: true,
    },
  }), [minimap, fontSize, wordWrap, lineNumbers]);

  return (
    <div className="editor-container">
      <div className="toolbar">
        <select
          className="select-input language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="sql">SQL</option>
        </select>

        <select
          className="select-input"
          value={theme}
          onChange={handleThemeChange}
        >
          <option value="vs">Light</option>
          <option value="vs-dark">Dark</option>
          <option value="github-dark">GitHub Dark</option>
        </select>

        <select
          className="select-input"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          {[12, 14, 16, 18, 20].map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>

        <button
          className={`button ${minimap ? "active" : ""}`}
          onClick={handleMinimapToggle}
        >
          {minimap ? "Hide Minimap" : "Show Minimap"}
        </button>

        <button
          className="button save-button"
          onClick={handleSave}
          title="Ctrl/Cmd + S"
        >
          Save
        </button>
      </div>

      <div className="editor-wrapper">
        <MonacoEditor
          width="100%"
          height="100%"
          language={language}
          theme={theme}
          value={code}
          options={options}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </div>
    </div>
  );
};

export default QuestionIDEC2;

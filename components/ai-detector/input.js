"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from '@radix-ui/react-icons';
import mammoth from "mammoth"

const AIDetectorInput = ({ onScanClick, text, setText, isScanning }) => {
  const fileInputRef = useRef(null)

  const onChange = (e) => {
    setText(e.target.value)
  };

  const characterCount = text.length;
  const characterLimit = 100000;

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      try {
        let content = await readFile(file)
        setText(content.slice(0, characterLimit))
      } catch (error) {
        alert(`Error reading file: ${error.message}`)
      }
    }
  }

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      if (file.type === "text/plain") {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target.result)
        reader.onerror = (e) => reject(new Error('Failed to read file'))
        reader.readAsText(file)
      } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
                 file.type === "application/msword") {
        const reader = new FileReader()
        reader.onload = async (e) => {
          try {
            const arrayBuffer = e.target.result
            const result = await mammoth.extractRawText({ arrayBuffer })
            resolve(result.value)
          } catch (error) {
            reject(new Error('Failed to parse Word document'))
          }
        }
        reader.onerror = (e) => reject(new Error('Failed to read file'))
        reader.readAsArrayBuffer(file)
      } else {
        reject(new Error('Unsupported file type'))
      }
    })
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm w-full flex-grow flex flex-col md:w-1/2 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Scan Your Text</h1>
        <Button
          variant="classic"
          className="hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
          onClick={handleUploadClick}
        >
          Upload File (.txt, .doc, .docx)
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".txt,.doc,.docx"
          className="hidden"
        />
      </div>
      <textarea
        className="flex-grow w-full p-4 resize-none overflow-y-auto outline-none text-lg bg-transparent font-monaspace_neon"
        placeholder="Enter your text here or upload a .txt, .doc, or .docx file"
        value={text}
        onChange={onChange}
        maxLength={characterLimit}
      ></textarea>
      <div className="mt-4 flex justify-between items-center">
        <span>{characterCount} / {characterLimit} characters</span>
        <Button
          className="w-48 text-lg"
          onClick={onScanClick} disabled={isScanning}
        >
          {isScanning ? "Scanning..." : (
            <>
              Scan for AI
              <ArrowRightIcon className="w-4 h-4 ml-2 text-white" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AIDetectorInput;

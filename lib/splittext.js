const splitText = (text) => {
    const result = [];
    const sentenceEndMarkers = ['.', ';', '?', '!'];
    let currentSubstring = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      currentSubstring += char;
  
      // Check if we've reached 300 characters, a sentence-ending punctuation, or a line break
      if (currentSubstring.length >= 400 || sentenceEndMarkers.includes(char) || char === '\n') {
        // If we're at a sentence-ending punctuation or line break, include it in the current substring
        if (sentenceEndMarkers.includes(char) || char === '\n') {
          result.push(currentSubstring);
          currentSubstring = '';
        } else {
          // If we're at 400 characters, backtrack to the last space, sentence-ending punctuation, or line break
          let lastSplitIndex = currentSubstring.length - 1;
          while (lastSplitIndex > 0 && 
                 !sentenceEndMarkers.includes(currentSubstring[lastSplitIndex]) && 
                 currentSubstring[lastSplitIndex] !== ' ' &&
                 currentSubstring[lastSplitIndex] !== '\n') {
            lastSplitIndex--;
          }
  
          // If we found a good split point, use it; otherwise, split at 400 characters
          if (lastSplitIndex > 0) {
            result.push(currentSubstring.slice(0, lastSplitIndex + 1));
            currentSubstring = currentSubstring.slice(lastSplitIndex + 1);
          } else {
            result.push(currentSubstring);
            currentSubstring = '';
          }
        }
      }
    }
  
    // Add any remaining text as the last substring
    if (currentSubstring) {
      result.push(currentSubstring);
    }
  
    return result;
  }

export default splitText;
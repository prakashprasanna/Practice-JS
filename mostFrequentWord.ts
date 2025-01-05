function mostFrequentWord(csvString: string): string | null {
    const wordsArray = csvString.split(',');
    const frequencyMap: { [key: string]: number } = {};
  
    for (const word of wordsArray) {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  
    let mostFrequent = null;
    let maxCount = 0;
  
    for (const word in frequencyMap) {
      if (frequencyMap[word] > maxCount) {
        maxCount = frequencyMap[word];
        mostFrequent = word;
      }
    }
  
    return mostFrequent;
  }
  
  // Test cases
  console.log(mostFrequentWord('sam,book,sam,axe,book,beach')); 
  // Expected output: 'sam' (since 'sam' appears twice, which is the most frequent)
  
  console.log(mostFrequentWord('apple,banana,apple,apple,banana,grape')); 
  // Expected output: 'apple' (since 'apple' appears three times)
  
  console.log(mostFrequentWord('')); 
  // Expected output: null (empty input string, no words to count)
  
  console.log(mostFrequentWord('orange')); 
  // Expected output: 'orange' (only one word present)
  
  console.log(mostFrequentWord('cat,dog,mouse,cat,mouse,cat,mouse,mouse')); 
  // Expected output: 'mouse' (since 'mouse' appears four times, more than 'cat')
  
  console.log(mostFrequentWord('lion,lion,lion,lion,lion')); 
  // Expected output: 'lion' (all are the same word)
  
  console.log(mostFrequentWord('a,b,c,d,e,f,g,h')); 
  // Expected output: 'a' (all words appear once, so it can return the first one or any single occurrence)
  
  console.log(mostFrequentWord('red,blue,blue,red,green,blue,green')); 
  // Expected output: 'blue' (blue appears three times)
  
  console.log(mostFrequentWord('123,456,123,789,123,456,789,789')); 
  // Expected output: '123' (numbers in CSV format, '123' appears most frequently)
  
/**Create a function that finds the longest word within a paragraph
 * @param {string} paragraph
 *  */
const largestWordInParagraph = (paragraph) => {
    const arrayOfWords = paragraph.split(' ')
    let longestWord = ''
    
    for (let i = 0 ; i< arrayOfWords.length;i++){
        if(arrayOfWords[i].length > longestWord.length) longestWord= arrayOfWords[i]
        
    }
    return longestWord
}

const paragraph = document.querySelector('#input_paragraph')
const wordContainer = document.querySelector('#longest_word')
const findLongestWordBtn = document.querySelector('#find_longest_word')

findLongestWordBtn.addEventListener('click', ()=>{
    wordContainer.innerHTML = `<p>The longest word within the paragraph is: <strong>${largestWordInParagraph(paragraph.value)}</strong></p>`
})
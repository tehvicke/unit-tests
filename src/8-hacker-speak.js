export const hackerSpeak = (words) => {
  const translation = [
    ['a', '4'],
    ['e', '3'],
    ['i', '1'],
    ['o', '0'],
    ['s', '5']
  ]
    translation.forEach((pair) => {
      words = words.replace(new RegExp(pair[0].toUpperCase(), 'g'), pair[1])
      words = words.replace(new RegExp(pair[0], 'g'), pair[1])
    })
    return words
}

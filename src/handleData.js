import fs from 'fs'

const dataPath = require('path').join(__dirname, '../data')

const createData = () => {
  const resultArr = []
  //all text files must have three backslashes indicating start of text end of score string
  //format of score = 'score: 9///'
  fs.readdirSync(dataPath).forEach((file) => {
    const fileData = fs.readFileSync(dataPath + '/' + file, 'utf-8')
    let scoreTextArr = fileData.split('///').map(element =>
      element.trim()
    )
    resultArr.push({
      score: scoreTextArr[0].split(':')[1].trim(),
      text: scoreTextArr[1]
    })
  })
  console.log(resultArr)
  return resultArr
}

module.exports = {
  createData
}
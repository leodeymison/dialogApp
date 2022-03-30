import fs from 'fs';
import util from 'util'

async function Read(filepath: String){

    const reader = util.promisify(
        fs.readFile
    )
    var resultString = await reader(filepath, 'utf-8')
    var resultJson = JSON.parse(resultString)
    return resultJson
}

export default Read
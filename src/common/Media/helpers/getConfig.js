// const cwd = path.resolve(scriptPath.split('node_modules')[0]);
const fs = require('fs');
const config = require('./.sctrc')
// const config = require('./test.json')

const getConfig = () => {
  return JSON.parse(config)
}

// const getConfig = () => {
//   fs.readFileSync('./.sctrc', 'utf8', (err, data) => {
//     if (err) throw new Error(err);

//     return JSON.parse(data);
//   })
// }


export default getConfig
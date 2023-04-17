const Db = () =>{
    return (
        const mongoose = require('mongoose')

const { DB_CONNECTION_STRING } = process.env

module.exports = mongoose
  .connect(DB_CONNECTION_STRING)
  .then(() => console.log('conneted'))
  .catch(e => console.log(e));
    )
}

export default Db;
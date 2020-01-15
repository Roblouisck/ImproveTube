const fs = require('fs')
fs.writeFileSync('./.env', `PIXABAY_API=${process.env.PIXABAY_API}\n`)
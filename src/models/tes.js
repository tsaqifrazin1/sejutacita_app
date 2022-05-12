const bcryptjs = require('bcryptjs')

async function tes(){
    const t = await bcryptjs.hash('test',12)
    console.log(t)
}

tes()
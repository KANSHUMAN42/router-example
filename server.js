const srv=require('express')()

const tr=require('./routers/teachers')
const sr=require('./routers/students')

srv.use('/teachers',tr);

srv.use('/students',sr);
srv.listen(2233);
const express = require('express');
require('./db/mongoose');
const cors = require('cors')
const port = process.env.PORT || 3000

const profileRoute = require('./routes/profile-route');
const companyRoute = require('./routes/company-routes');
const adminRoutes = require('./routes/admin-routes')

const app = express()
app.use(cors())
app.use(express.json(),profileRoute)
app.use(express.json(),companyRoute)
app.use(express.json(),adminRoutes)
app.listen(port,()=>{
    console.log(`server is up and running on port ${port} !`)
})
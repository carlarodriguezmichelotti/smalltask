require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)

require('./configs/mongoose.config')
require('./configs/passport.config')

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// CORS middleware
const whitelist = ['http://localhost:3000']
const corsOptions = {
	origin: (origin, cb) => {
		const originIsWhitelisted = whitelist.includes(origin)
		cb(null, originIsWhitelisted)
	},
	credentials: true
}

app.use(cors(corsOptions))

// Configuración de sesión
app.use(
	session({
		secret: 'Whatebver',
		resave: true,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
)
app.use(passport.initialize())
app.use(passport.session())

// Express View engine setup

app.use(
	require('node-sass-middleware')({
		src: path.join(__dirname, 'public'),
		dest: path.join(__dirname, 'public'),
		sourceMap: true
	})
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator'

//Base URL's
app.use('/', require('./routes/index.routes'))
app.use('/api', require('./routes/auth.routes'))
app.use('/api', require('./routes/tasker.routes'))
module.exports = app

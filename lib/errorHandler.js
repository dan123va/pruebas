'use strict'

function errorHandler(error) {
    console.error(error)
    throw new error('Fallo en la operación del servidor')
}

module.exports = errorHandler
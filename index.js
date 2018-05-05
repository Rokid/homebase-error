function HomebaseError(message, name){
  Errro.call(this, message)
  this.errorName = name || 'E_DRIVER_ERROR';
}

require('util').inherits(HomebaseError, Error);

module.exports = HomebaseError;
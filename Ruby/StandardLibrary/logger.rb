require 'logger'

logger = Logger.new(STDOUT)
logger.info "This is an ifo message"
logger.debug "This is debugging message"
logger.warn "Warning message"
logger.fatal "Fatal message"

###
logger = Logger.new("log.txt")
logger.info "This is a test"
name = "Phuong"
logger.info "The name is #{name}"

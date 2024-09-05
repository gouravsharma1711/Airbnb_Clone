class ExpressError extends Error {
    constructor(mystatus, message) {
        
        super(message);
        this.status = mystatus;
        
    }
}
module.exports = ExpressError;

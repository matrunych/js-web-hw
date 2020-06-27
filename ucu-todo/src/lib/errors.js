export default class StepanError extends Error {
    constructor(errorText) {
        super(errorText);
        this.error = "StepanError"
    }
}

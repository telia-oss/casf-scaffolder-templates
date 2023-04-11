/**
 * This is a classic vRO action that can be invoked with following:
 * 
 * System.getModule("net.teliacompany.prc.aa.sample-ts-project/helpers").echoAction("message");
 * 
 * @param {string} message The message
 * 
 * @returns {string} The message echoed back to the caller
 */
(function (message: string): string {
    return message;
})

/*
This script validates a specified field by checking if the entered date is a date in the future.
*/

var Sdk = window.Sdk || {};
(function () {
    
    // Define global variables    
    var formField = ""; // example: xyz_customfieldname 
    var message = "Your message to the user.";
    var today = new Date();
    
    // Code to run in the attribute OnChange event
    this.attributeOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var suppliedDateField = formContext.getAttribute("formField");
        
        if (suppliedDateField != null) {
            var suppliedDate = formContext.getAttribute("formField").getValue();
            var suppliedDateFieldControl = formContext.getControl("formField");
            if (suppliedDate <= today) {
                suppliedDateFieldControl.setNotification(message, "notificationFutureDate");
            } else {
                suppliedDateFieldControl.clearNotification("notificationFutureDate");
            }
        }
    }
}).call(Sdk);
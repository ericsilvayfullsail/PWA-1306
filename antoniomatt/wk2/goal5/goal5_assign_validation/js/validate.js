/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

            //Social Security
            //^(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -]?)(?!00)\d\d\3(?!0000)\d{4}$
            
            //Email
            //^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$
            
            //Username
            //^(?n:(?<firstname>(St\.\ )?(?-i:[A-Z]\'?\w+?\-?)+)(?<suffix>\ (?i:([JS]R)|((X(X{1,2})?)?((I((I{1,2})|V|X)?)|(V(I{0,3})))?)))?,((?<prefix>Dr|Prof|M(r?|(is)?)s)\ )?(?<lastname>(?-i:[A-Z]\'?(\w+?|\.)\ ??){1,2})?(\ (?<mname>(?-i:[A-Z])(\'?\w+?|\.))){0,2})$
            
            //Phone #
            //^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$
            
            //Password
            //^[a-zA-Z]\w{3,14}$

(function() {

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(document.getElementById('f_username'));  //id = is the form input field ID


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = '^(?n:(?<firstname>(St\.\ )?(?-i:[A-Z]\'?\w+?\-?)+)(?<suffix>\ (?i:([JS]R)|((X(X{1,2})?)?((I((I{1,2})|V|X)?)|(V(I{0,3})))?)))?,((?<prefix>Dr|Prof|M(r?|(is)?)s)\ )?(?<lastname>(?-i:[A-Z]\'?(\w+?|\.)\ ??){1,2})?(\ (?<mname>(?-i:[A-Z])(\'?\w+?|\.))){0,2})$';
        }else if(inputName.name === 'f_email') {
            pattern = '^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$';
        }else if(inputName.name === 'f_phone') {
            pattern = '^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$';
        }else if(inputName.name === 'f_password') {
            pattern = '^[a-zA-Z]\w{3,14}$';
        }else if(inputName.name === 'f_ssn') {
            pattern = '^(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -]?)(?!00)\d\d\3(?!0000)\d{4}$';
        }
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
            
        
        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };

})();  // end wrapper




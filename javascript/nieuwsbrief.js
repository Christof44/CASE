src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'

(function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[1] = 'FNAME';
            ftypes[1] = 'text';
            fnames[2] = 'LNAME';
            ftypes[2] = 'text';
            fnames[0] = 'EMAIL';
            ftypes[0] = 'email';
            fnames[3] = 'MMERGE3';
            ftypes[3] = 'phone';
            /*
             * Translated default messages for the $ validation plugin.
             * Locale: NL
             */
            $.extend($.validator.messages, {
                required: "Dit is een verplicht veld.",
                remote: "Controleer dit veld.",
                email: "Vul hier een geldig e-mailadres in.",
                url: "Vul hier een geldige URL in.",
                date: "Vul hier een geldige datum in.",
                dateISO: "Vul hier een geldige datum in (ISO-formaat).",
                number: "Vul hier een geldig getal in.",
                digits: "Vul hier alleen getallen in.",
                creditcard: "Vul hier een geldig creditcardnummer in.",
                equalTo: "Vul hier dezelfde waarde in.",
                accept: "Vul hier een waarde in met een geldige extensie.",
                maxlength: $.validator.format("Vul hier maximaal {0} tekens in."),
                minlength: $.validator.format("Vul hier minimaal {0} tekens in."),
                rangelength: $.validator.format("Vul hier een waarde in van minimaal {0} en maximaal {1} tekens."),
                range: $.validator.format("Vul hier een waarde in van minimaal {0} en maximaal {1}."),
                max: $.validator.format("Vul hier een waarde in kleiner dan of gelijk aan {0}."),
                min: $.validator.format("Vul hier een waarde in groter dan of gelijk aan {0}.")
            });
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
    
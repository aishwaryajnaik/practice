        // Load the Google Transliterate API
        google.load("elements", "1", {
            packages: "transliteration"
        });

        var language = $('#language option:selected').val().toUpperCase();
        var control;

        function onLoad() {
            var options = {
                sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
                destinationLanguage: [google.elements.transliteration.LanguageCode[language]],
                shortcutKey: 'ctrl+g',
                transliterationEnabled: true
            };
            control = new google.elements.transliteration.TransliterationControl(options);
            control.makeTransliteratable(['TextArea']);
        }

        google.setOnLoadCallback(onLoad);

        //change the language on dropdown change
        $('#language').on('change', function (event) {
            language = $(this, ':selected').val().toUpperCase();

            //function to change the language dynamically(Google API)
            control.setLanguagePair(
                google.elements.transliteration.LanguageCode.ENGLISH,
                google.elements.transliteration.LanguageCode[language]);
        });
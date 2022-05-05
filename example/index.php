<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FormGen Base example</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../node_modules/semantic-ui-flag/flag.min.css">
    <link rel="stylesheet" href="../node_modules/select2/dist/css/select2.min.css">
    <style>
        body {
            overflow-y: scroll;
        }

        input[type=radio] {
            margin-right: 10px;
        }

        .display-inline>div {
            display: inline-block;
        }

        div>label.myLabel {
            border-bottom: 2px solid #f1f1f1;
            display: block;
            padding-left: 10px;
            margin-bottom: 5px;
            font-weight: bolder;
            text-transform: uppercase;
        }

        label>svg {
            margin-left: 5px;
        }

        label.error {
            width: 100%;
            margin-top: 4px;
            padding-right: 10px;
            color: white;
            background: linear-gradient(90deg, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 0) 80%, rgba(255, 0, 0, 0.7) 80%, rgba(255, 0, 0, 0.8) 100%);
            border-radius: 0 4px 0 0;
            font-size: 12px;
            text-align: right;
        }

        .ck-focus,
        span.select2-container--focus {
            color: #212529 !important;
            background-color: #fff !important;
            border-color: #86b7fe !important;
            outline: 0 !important;
            box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%) !important;
            border-radius: .25rem !important;
        }

        .ck-editor:focus-within {
            color: #212529 !important;
            background-color: #fff !important;
            border-color: #86b7fe !important;
            outline: 0 !important;
            box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%) !important;
            border-radius: .25rem !important;
        }

        .select2-container--default.select2-container--focus .select2-selection--multiple {
            border: 1px solid #86b7fe !important;
            border-radius: .25rem;
        }
    </style>
</head>

<body>
    <div class='container'>
        <div id="main">

        </div>
    </div>

    <script id="config" type="application/json">
        {
            "id": "form01",
            "languages": ["nl", "uk"],
            "buttons": [{
                "_type": "Submit",
                "label": "Save"
            }],
            "panels": {
                "a" : "Panel A",
                "b" : "Panel B"
            },
            "builder": ["TabsBuilder"],
            "data": {
                "_type": "array",
                "data": {
                    "name": {
                        "nl": "Olaf",
                        "uk": "Olaf"
                    },
                    "email": "olaf@xs4all.nl",
                    "file": []
                }
            },
            "fields": [{
                "_type": "Text",
                "id": "name",
                "input": true,
                "label": "Name",
                "help": "Your name is being used for correspondence with the client",
                "unique": false,
                "validations": [{
                    "_type": "NotEmpty"
                }],
                "builders": [
                    "BootstrapBuilder"
                ],
                "autofocus": true,
                "hidden": false,
                "multilingual": true,
                "panel": "a",
                "mask": "",
                "format": "",
                "require": true,
                "placeholder": "Enter your name here",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "spellcheck": true
            }, {
                "_type": "Email",
                "id": "email",
                "input": true,
                "label": "Email",
                "mask": "",
                "format": "",
                "require": false,
                "panel": "a",
                "placeholder": "Enter your email here",
                "help": "Your email is being used for correspondence with the client",
                "unique": false,
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "validations": [{
                    "_type": "NotEmpty"
                }, {
                    "_type": "Length",
                    "min": 4,
                    "max": 10
                }],
                "autofocus": false,
                "hidden": false,
                "spellcheck": true,
                "multilingual": false,
                "builders": [
                    "BootstrapBuilder"
                ]
            }, {
                "_type": "Text",
                "id": "file",
                "input": true,
                "label": "Attachments",
                "mask": "",
                "panel": "b",
                "format": "",
                "require": false,
                "placeholder": "Upload your files here",
                "help": "These file\"s wil be added to your dossier",
                "unique": false,
                "prefix": "",
                "suffix": "",
                "multiple": true,
                "validations": [{
                    "_type": "NotEmpty"
                }],
                "autofocus": false,
                "hidden": false,
                "spellcheck": true,
                "multilingual": false,
                "builders": [
                    "BootstrapBuilder"
                ]
            }]
        }
    </script>

    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../node_modules/jquery-validation/dist/jquery.validate.min.js"></script>"
    <script src="../node_modules/select2/dist/js/select2.min.js"></script>
    <!-- <script src="./script/ckeditor.js"></script> -->
    <script src="../dist/formgen.js"></script>

    <script>
        var config = JSON.parse(document.getElementById('config').innerText);
        var formgen = new MuddeFormgen.Form(config)
        var initForm = (config) => {
            formgen = new MuddeFormgen.Form(config)
            formgen.render().then((form) => {
                $('#main').empty().append(form.root)
            })
        }

        jQuery(() => {
            initForm(config)
        })
    </script>
</body>

</html>
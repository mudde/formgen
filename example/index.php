<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FormGen Base example</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/semantic-ui-flag/flag.min.css">
    <link rel="stylesheet" href="node_modules/select2/dist/css/select2.min.css">
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
            "title": "FormGen Base example",
            "description": "This is a simple example of FormGen.js",
            "data": {
                "_type": "Array",
                "data": {
                    "name": "Olaf",
                    "email": "olaf.mudde@xs4all.nl"
                }
            }
            "fields": [{
                    "_type": "text",
                    "name": "name",
                    "label": "Name",
                    "placeholder": "Enter your name",
                    "required": true,
                    "validation": {
                        "minLength": 3,
                        "maxLength": 20
                    }
                },
                {
                    "_type": "email",
                    "name": "email",
                    "label": "Email",
                    "placeholder": "Enter your email",
                    "required": true,
                    "validation": {
                        "minLength": 3,
                        "maxLength": 20,
                        "email": true
                    }
                },
                {
                    "_type": "text",
                    "name": "phone",
                    "label": "Phone",
                    "placeholder": "Enter your phone",
                    "required": true,
                    "validation": {
                        "minLength": 3,
                        "maxLength": 20,
                        "phone": true
                    }
                },
                {
                    "_type": "text",
                    "name": "address",
                    "label": "Address",
                    "placeholder": "Enter your address",
                    "required": true,
                    "validation": {
                        "minLength": 3,
                        "maxLength": 20
                    }
                },
                {
                    "_type": "text",
                    "name": "city",
                    "label": "City",
                    "placeholder": "Enter your city",
                    "required": true,
                    "validation": {
                        "minLength": 3,
                        "maxLength": 20
                    }
                }
            ]
        }
    </script>

    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/jquery-validation/dist/jquery.validate.min.js"></script>"
    <script src="node_modules/select2/dist/js/select2.min.js"></script>
    <!-- <script src="./script/ckeditor.js"></script> -->
    <script src="dist/formgen.js"></script>

    <script>
        var config = document.getElementById('config');
        var formgen = new MuddeFormgen.Form(config)
        formgen.render().then(form => {
            document.getElementById('main').innerHTML = form.root.outerHTML
        })
    </script>
</body>

</html>
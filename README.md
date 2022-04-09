# TypeScript Formgen

A form generator written in Typescript. It converts a JSON into a HTML-form.

Some of the features are
  - Multilingual
  - Tabular
  - Usage of external data sources
  - Easily extendable
  - No more programming forms (each programmed form is a potential threat)
  - Validation of data

Gr.O.M.

**JSON**
```JSON
{
  "id": "form01",
  "languages": ["nl", "uk"],
  "buttons": [{"_type": "Submit","label": "Save"}],
  "builders": ["TabsBuilder"],
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
      "_type": "File",
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
```
*OUTPUTS*

![Output image](readme.md/example-output.png?raw=true)
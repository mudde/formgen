# formgen
Form generator → from json to HTML form

# example
*JSON*
```JSON
{
  id: 'form01',
  languages: ['nl', 'uk'],
  buttons: [{
      _type: 'Submit',
      label: 'Save'
  }],
  builders: [
      'TabsBuilder'
  ],
  data: {
      _type: 'array',
      data: {
          name: {
              nl: 'Olaf',
              uk: 'Olaf'
          },
          email: 'olaf@xs4all.nl',
          file: []
      }
  },
  fields: [{
      _type: 'Text',
      id: 'name',
      input: true,
      label: 'Name',
      help: 'Your name is being used for correspondence with the client',
      unique: false,
      validations: [{
          _type: 'NotEmpty'
      }],
      builders: [
          'BootstrapBuilder'
      ],
      autofocus: true,
      hidden: false,
      multilingual: true,
      panel: 'a',
      mask: '',
      format: '',
      require: true,
      placeholder: 'Enter your name here',
      prefix: '',
      suffix: '',
      multiple: false,
      spellcheck: true
  }, {
      _type: 'Email',
      id: 'email',
      input: true,
      label: 'Email',
      mask: '',
      format: '',
      require: false,
      panel: 'a',
      placeholder: 'Enter your email here',
      help: 'Your email is being used for correspondence with the client',
      unique: false,
      prefix: '',
      suffix: '',
      multiple: false,
      validations: [{
          _type: 'NotEmpty'
      }, {
          _type: 'Length',
          min: 4,
          max: 10
      }],
      autofocus: false,
      hidden: false,
      spellcheck: true,
      multilingual: false,
      builders: [
          'BootstrapBuilder'
      ]
  }, {
      _type: 'File',
      id: 'file',
      input: true,
      label: 'Attachments',
      mask: '',
      panel: 'b',
      format: '',
      require: false,
      placeholder: 'Upload your files here',
      help: 'These file\'s wil be added to your dossier',
      unique: false,
      prefix: '',
      suffix: '',
      multiple: true,
      validations: [{
          _type: 'NotEmpty'
      }],
      autofocus: false,
      hidden: false,
      spellcheck: true,
      multilingual: false,
      builders: [
          'BootstrapBuilder'
      ]
  }]
}
```
*OUTPUT*
![Output image](data:image/png;base64,VBORw0KGgoAAAANSUhEUgAAAm4AAAFICAMAAADea4KXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVENjVGNkQ3QUMyODExRUI4RTQ1OTkzMUM4ODQ5QzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVENjVGNkQ4QUMyODExRUI4RTQ1OTkzMUM4ODQ5QzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUQ2NUY2RDVBQzI4MTFFQjhFNDU5OTMxQzg4NDlDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ2NUY2RDZBQzI4MTFFQjhFNDU5OTMxQzg4NDlDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4fPWdoAAAC+lBMVEXO1Nrp7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)
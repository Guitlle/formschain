export default {
  "json_schema": {
    "title": "Create a Form",
    "type": "object",
    "description": "Create a form and hit submit when ready to share. This will store the form specification in your Arweave store and generate a share link so others can fill the form and send you their response.",
    "required": ["title"],
    "properties": {
      "title": {"type": "string", "title": "Form title", "default": ""},
      "description": {"type": "string", "title": "Form description", "default": ""},
      "sections": {
        "type": "array",
        "title": "Sections",
        "items": {
          "type": "object",
          "required": [
            "title"
          ],
          "properties": {
            "title": {
              "type": "string",
              "title": "Section Title"
            },
            "fields": {
              "type": "array",
              "title": "Fields for this section",
              "items": {
                "type": "object",
                "anyOf": [
                  {
                    "title": "Text field",
                    "properties": {
                      "title": {
                        "type": "string",
                        "title": "Field name",
                      },
                      "placeholder": {
                        "type": "string",
                      },
                      "type" : {
                        "type": "string", "default": "string"
                      }
                    }
                  },
                  {
                    "title": "Number field",
                    "properties": {
                      "title": {
                        "type": "string",
                        "title": "Field name",
                      },
                      "placeholder": {
                        "type": "string",
                      },
                      "type" : {
                        "type": "string", "default": "number"
                      }
                    }
                  },
                  {
                    "title": "Date field",
                    "properties": {
                      "title": {
                        "type": "string",
                        "title": "Field name",
                      },
                      "placeholder": {
                        "type": "string",
                      },
                      "type" : {
                        "type": "string", "default": "string"
                      },
                      "format" : {
                        "type": "string", "default": "date"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  },
  "ui_schema": {
    "title": {

    },
    "description": {
        "ui:widget": "textarea",
        "ui:options": {
          "rows": 5
        }
    },
    "sections": {
      "items": {
        "fields": {
          "items": {
            "type": {
              "ui:widget": "hidden"
            },
            "format": {
              "ui:widget": "hidden"
            }
          }
        }
      }
    }
  }
};

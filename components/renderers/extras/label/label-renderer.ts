///<reference path="../../../references.ts"/>

class LabelRenderer implements JSONForms.IRenderer {

    priority = 1;

    render(element:IUISchemaElement, schema: SchemaElement, schemaPath: string, services: JSONForms.Services): JSONForms.IRenderDescription {
        var text = element['text'];
        var size = 100;

        return {
            "type": "Widget",
            "size": size,
            "template": ` <jsonforms-widget class="jsf-label">${text}<hr></jsonforms-widget>`
        };
    }

    isApplicable(element:IUISchemaElement):boolean {
        return element.type == "Label";
    }
}

angular.module('jsonforms.renderers.extras.label').run(['RenderService', function(RenderService) {
    RenderService.register(new LabelRenderer());
}]);

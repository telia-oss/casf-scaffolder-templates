from copier_templates_extensions import ContextHook


class ContextUpdater(ContextHook):
    def hook(self, context):
        new_context = {}
        new_context["say"] = "hello " + context.get("name", "world")
        return new_context
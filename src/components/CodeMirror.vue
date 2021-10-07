<template>
  <div class="my-editor">
    <textarea ref="input"></textarea>
  </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from "vue";
import CodeMirror from "https://cdn.jsdelivr.net/npm/codemirror/src/codemirror.js";

const props = defineProps({
  content: { type: String },
  readonly: { type: Boolean, default: () => false },
  loading: Boolean,
});

const { content, readonly, loading } = toRefs(props);

const emit = defineEmits(["update:content"]);

let editor;

const input = ref(null);

onMounted(() => {
  editor = CodeMirror.fromTextArea(input.value, {
    lineNumbers: true,
    readonly: !!readonly,
  });

  if (typeof content.value === "string") {
    update(content.value);
  }
  editor.on("change", (instance, change) => {
    emit("update:content", editor.doc.getValue());
  });
});

function update(value) {
  editor.doc.setValue(value);
}

defineExpose({
  update: update,
});
</script>

<style lang="scss" scoped>
.my-editor {
  width: 100%;
  height: 100%;

  :deep(.CodeMirror) {
    height: 100%;
  }
}
</style>

<style lang="scss">
@import "./CodeMirror.css";
</style>

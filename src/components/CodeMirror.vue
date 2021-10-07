<template>
  <a-spin :spinning="loading">
    <div class="my-editor" v-bind="$attrs">
      <textarea ref="input"></textarea>
    </div>
  </a-spin>
</template>

<script setup>
import { onMounted, ref, toRefs, watch } from "vue";
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

watch(content, () => {
  update(content.value);
});

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
</script>

<style lang="scss" scoped>
:deep(.my-editor) {
  width: 100%;
  .CodeMirror {
    height: calc(100vh - 60px - 46px);
  }
}

:deep(.my-editor2) {
  width: 100%;
  .CodeMirror {
    height: calc(100vh - 60px);
  }
}
</style>

<style lang="scss">
@import "./CodeMirror.css";
</style>

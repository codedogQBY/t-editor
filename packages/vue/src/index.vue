<template>
  <div>
    <slot name="toolbar"></slot>
    <!--  编辑器插槽  -->
    <div ref="editor" class="editor"></div>
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref , defineProps } from 'vue'
import { Editor } from '@t-editor/core'
// name TEditor
const props = defineProps({
  options: Object,
})

const editor = ref<Editor>(
  new Editor({
    ...props.options,
  })
)

// 从props中获取options

</script>

<style scoped>
</style>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type InputProps = {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string,

  /**
   * The label to display for the input.
   */
  label?: string

  /**
   * An error message or messages value indicating whether the input is in an error state.
   */
  error?: string | string[] | null,

  /**
   * If the input is required.
   */
  required?: boolean,
}

const model = defineModel({ required: false })
const props = withDefaults(
  defineProps<{
    id?: InputProps['id'],
    placeholder?: InputProps['placeholder'],
    label?: InputProps['label'],
    error?: InputProps['error'],
    required?: InputProps['required']
  }>(),
  {
    error: '',
    required: false
  }
)

const errorMessage = ref<string[] | string | null>('')

watch(
  () => props.error,
  (value) => {
    errorMessage.value = value
  }
)

function handleInput(event: Event) {
  errorMessage.value = ''
}
</script>

<template>  
  <div class="flex flex-col space-y-2.5">
    <label :for="props.id" class="text-sm text-black font-medium">
      {{ props.label }} <span v-if="props.required" class="text-red-500">*</span>
    </label>

    <div class="flex items-center relative">
      <input 
        :id="props.id"
        v-model="model"
        v-bind="$attrs"
        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-50"
        :class="[errorMessage ? 'ring-1 ring-red-500 placeholder-red-500' : 'placeholder-custom-brown-300']"
        :placeholder="props.placeholder ?? 'Enter value'"
        @input="handleInput"
      />
    </div>

    <p v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</p>
  </div>
</template>
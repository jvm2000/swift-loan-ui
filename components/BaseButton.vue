<script setup lang="ts">
type ButtonProps = {
  /**
   * If the input is required.
   */
  isLoading?: boolean,

  /**
   * If the input is required.
   */
  isSecondary?: boolean,

  /**
   * If the input is required.
   */
  disabled?: boolean,
}

const props = withDefaults(
  defineProps<{
    isLoading?: ButtonProps['isLoading'],
    isSecondary?: ButtonProps['isSecondary'],
    disabled?: ButtonProps['disabled'],
  }>(),
  {
    isLoading: false,
    isSecondary: false,
    disabled: false,
  }
)
</script>

<template>  
  <button 
    class="px-4 py-2 rounded-lg text-center text-sm disabled:opacity-30"
    :class="[
      props.isSecondary
      ? 'bg-gray-50 border border-gray-50 text-gray-400'
      : 'bg-blue-500 text-center text-white'
    ]"
    :disabled="props.isLoading || props.disabled"
  >
    <div class="flex items-center w-full">
      <ClientOnly>
        <svg
          class="animate-spin h-5 w-5 sm:h-4 sm:w-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          v-if="isLoading"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </ClientOnly>

      <span v-if="isLoading">Loading...</span>
      
      <slot v-if="!isLoading" />
    </div>
  </button>
</template>
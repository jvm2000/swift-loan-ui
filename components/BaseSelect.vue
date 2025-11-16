<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

defineOptions({ inheritAttrs: false })

type SelectProps = {
  /**
   * The form select identifier.
   */
  id?: string

  /**
   * The options to display for the select.
   */
  options?: any[],

  /**
   * The placeholder to display for the select.
   */
  placeholder?: string,

  /**
   * The label to display for the select.
   */
  label?: string

  /**
   * An error message or messages value indicating whether the select is in an error state.
   */
  error?: string | string[] | null,

  /**
   * If the select is required.
   */
  required?: boolean,
}

const model = defineModel<any>({ required: false })
const errorMessage = ref<string[] | string | null>('')
const props = withDefaults(
  defineProps<{
    id?: SelectProps['id'],
    options: SelectProps['options'],
    placeholder?: SelectProps['placeholder'],
    label?: SelectProps['label'],
    error?: SelectProps['error'],
    required?: SelectProps['required']
  }>(),
  {
    options: () => [],
    error: '',
    required: false
  }
)


watch(
  () => props.error,
  (value) => {
    errorMessage.value = value
  }
)

function handleSelect() {
  errorMessage.value = ''
}
</script>

<template>
  <div class="flex flex-col space-y-2.5">
    <label :for="props.id" class="text-sm text-black font-medium">
      {{ props.label }} <span v-if="props.required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <Listbox v-model="model" @update:model-value="handleSelect">
        <div class="relative mt-1">
          <ListboxButton
            class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-50"
            :class="[errorMessage ? 'ring-1 ring-red-500 placeholder-red-500' : 'placeholder-custom-brown-300']"
          >
            <span 
              class="block truncate capitalize text-base"
              :class="[
                errorMessage
                  ? 'text-red-500'
                  : !model
                    ? 'text-gray-400'
                    : 'text-black'
              ]"
            >{{ !model ? props.placeholder : model }}</span>

            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronDownIcon
                class="h-5 w-5"
                :class="[errorMessage ? 'stroke-red-500' : 'stroke-gray-400']"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg focus:outline-none sm:text-sm z-[100]"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="option in props.options"
                :key="option.name"
                :value="option.value"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-blue-50 text-blue-500' : '',
                    'relative cursor-default select-none w-full rounded-md p-2 flex items-center',
                  ]"
                >
                  <span
                    class="flex items-center stroke-blue-400 pr-2"
                    :class="[selected ? 'visible:' : 'invisible']"
                  >
                    <CheckIcon class="h-4 w-4" aria-hidden="true" />
                  </span>

                  <span
                    :class="[
                      'block truncate',
                    ]"
                    >{{ option.name }}</span
                  >
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <p v-if="errorMessage" class="text-sm text-red-500">{{ errorMessage }}</p>
  </div>
</template>

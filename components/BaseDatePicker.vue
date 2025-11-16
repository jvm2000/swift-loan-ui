<script setup lang="ts">
import { CalendarIcon } from '@heroicons/vue/24/outline'

defineOptions({ inheritAttrs: false })

type DatePickerProps = {
  id?: string
  placeholder?: string
  label?: string
  error?: string | string[] | null
  required?: boolean
}

const model = defineModel<any>({ required: false })
const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: 'Pick a date',
  error: '',
  required: false,
})

const errorMessage = ref<string[] | string | null>('')
const showCalendar = ref(false)
const calendarRef = ref<HTMLElement | null>(null)
const currentDate = ref(new Date())
const month = ref(currentDate.value.getMonth())
const year = ref(currentDate.value.getFullYear())
const daysInMonth = computed(() => new Date(year.value, month.value + 1, 0).getDate())
const firstDay = computed(() => new Date(year.value, month.value, 1).getDay())

function toggleCalendar() {
  setTimeout(() => {
    showCalendar.value = !showCalendar.value
  }, 0)
}

function handleDateSelect(day: number, month: number, year: number) {
  model.value = new Date(year, month, day)
  showCalendar.value = false

  errorMessage.value = ''
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node
  if (calendarRef.value && !calendarRef.value.contains(target)) {
    showCalendar.value = false
  }
}

function prevMonth() {
  if (month.value === 0) {
    month.value = 11
    year.value--
  } else month.value--
}

function nextMonth() {
  if (month.value === 11) {
    month.value = 0
    year.value++
  } else month.value++
}

function formatDate(date: Date | null) {
  if (!date) return ''
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

watch(() => props.error, (val) => (errorMessage.value = val))
onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside))
</script>

<template>
  <div class="flex flex-col space-y-2.5" ref="calendarRef">
    <label :for="props.id" class="text-sm text-black font-medium">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <div class="flex items-center relative">
        <input
          :id="props.id"
          type="text"
          class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50"
          :class="[errorMessage ? 'ring-1 ring-red-500 placeholder-red-500' : 'placeholder-custom-brown-300']"
          :placeholder="props.placeholder"
          :value="formatDate(model)"
          readonly
          @click="toggleCalendar"
        />

        <CalendarIcon 
          class="w-5 h-5 absolute right-4"
          :class="[errorMessage ? 'stroke-red-500' : 'stroke-gray-400']"
        />
      </div>

      <div
        v-if="showCalendar"
        class="absolute bottom-4 z-10 bg-white border rounded-lg shadow-lg p-3 w-72"
      >
        <div class="flex items-center justify-between mb-3">
          <button @click="prevMonth" class="px-2 py-1 hover:bg-gray-100 rounded">‹</button>
          <span class="font-semibold">
            {{ new Date(year, month).toLocaleString('default', { month: 'long' }) }} {{ year }}
          </span>
          <button @click="nextMonth" class="px-2 py-1 hover:bg-gray-100 rounded">›</button>
        </div>

        <div class="grid grid-cols-7 text-center text-gray-500 text-sm">
          <span v-for="d in ['Su','Mo','Tu','We','Th','Fr','Sa']" :key="d">{{ d }}</span>
        </div>

        <div class="grid grid-cols-7 text-center mt-1">
          <span v-for="n in firstDay" :key="'empty'+n"></span>
          <button
            v-for="day in daysInMonth"
            :key="day"
            @click="handleDateSelect(day, month, year)"
            class="p-2 rounded hover:bg-blue-100 text-sm"
            :class="{
              'bg-blue-500 text-white':
                model &&
                model.getDate() === day &&
                model.getMonth() === month &&
                model.getFullYear() === year,
            }"
          >
            {{ day }}
          </button>
        </div>
      </div>
    </div>

    <p v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</p>
  </div>
</template>
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

const model = defineModel<string>({ required: false })

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: 'Pick a date',
  error: '',
  required: false,
})

const errorMessage = ref<string[] | string | null>('')

const showCalendar = ref(false)
const showMonthPicker = ref(false)
const showYearPicker = ref(false)

const calendarRef = ref<HTMLElement | null>(null)
const currentDate = ref(new Date())

const month = ref(currentDate.value.getMonth())
const year = ref(currentDate.value.getFullYear())

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
]

const years = computed(() => {
  const y = new Date().getFullYear()
  return Array.from({ length: 120 }, (_, i) => y - 80 + i) // from 80 years ago to 40 in future
})

const daysInMonth = computed(() => new Date(year.value, month.value + 1, 0).getDate())
const firstDay = computed(() => new Date(year.value, month.value, 1).getDay())

function toggleCalendar() {
  setTimeout(() => {
    showCalendar.value = !showCalendar.value
    showMonthPicker.value = false
    showYearPicker.value = false
  }, 0)
}

function openMonthPicker() {
  showMonthPicker.value = true
  showYearPicker.value = false
}

function openYearPicker() {
  showYearPicker.value = true
  showMonthPicker.value = false
}

function selectMonth(i: number) {
  month.value = i
  showMonthPicker.value = false
}

function selectYear(y: number) {
  year.value = y
  showYearPicker.value = false
}

function handleDateSelect(day: number) {
  const monthName = months[month.value]
  model.value = `${monthName} ${day}, ${year.value}` // store as string
  showCalendar.value = false
  showMonthPicker.value = false
  showYearPicker.value = false
  errorMessage.value = ''
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

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node
  if (calendarRef.value && !calendarRef.value.contains(target)) {
    showCalendar.value = false
    showMonthPicker.value = false
    showYearPicker.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside))
watch(() => props.error, (val) => (errorMessage.value = val))
</script>

<template>
  <div class="flex flex-col space-y-2.5" ref="calendarRef">
    <label :for="props.id" class="text-sm font-medium text-black">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <input
        :id="props.id"
        type="text"
        class="w-full rounded-md bg-gray-50 border px-3 py-2 text-base focus-visible:outline-none"
        :class="[errorMessage ? 'ring-1 ring-red-500' : '']"
        :placeholder="props.placeholder"
        :value="model"
        readonly
        @click="toggleCalendar"
      />

      <CalendarIcon 
        class="w-5 h-5 absolute right-4 top-2.5 stroke-gray-400"
      />

      <!-- Calendar Container -->
      <div
        v-if="showCalendar"
        class="absolute bottom-4 z-20 bg-white border rounded-lg shadow-lg p-3 w-72"
      >

        <!-- Top (Month & Year Buttons) -->
        <div class="flex justify-between items-center mb-3">
          <button @click="prevMonth" class="px-2 py-1 hover:bg-gray-100 rounded">‹</button>

          <div class="flex items-center space-x-2">
            <button @click="openMonthPicker" class="font-semibold hover:underline">
              {{ months[month] }}
            </button>
            <button @click="openYearPicker" class="font-semibold hover:underline">
              {{ year }}
            </button>
          </div>

          <button @click="nextMonth" class="px-2 py-1 hover:bg-gray-100 rounded">›</button>
        </div>

        <!-- MONTH PICKER -->
        <div v-if="showMonthPicker" class="grid grid-cols-3 gap-2">
          <button
            v-for="(m, idx) in months"
            :key="m"
            @click="selectMonth(idx)"
            class="py-2 rounded hover:bg-blue-100 text-sm"
            :class="{ 'bg-blue-500 text-white': idx === month }"
          >
            {{ m }}
          </button>
        </div>

        <!-- YEAR PICKER -->
        <div
          v-else-if="showYearPicker"
          class="h-40 overflow-y-auto border rounded p-1"
        >
          <button
            v-for="y in years"
            :key="y"
            @click="selectYear(y)"
            class="block w-full text-left px-2 py-1 rounded hover:bg-blue-100"
            :class="{ 'bg-blue-500 text-white': y === year }"
          >
            {{ y }}
          </button>
        </div>

        <!-- DAYS -->
        <div v-else>
          <div class="grid grid-cols-7 text-center text-gray-500 text-sm">
            <span v-for="d in ['Su','Mo','Tu','We','Th','Fr','Sa']" :key="d">{{ d }}</span>
          </div>

          <div class="grid grid-cols-7 text-center mt-1">
            <span v-for="n in firstDay" :key="'empty'+n"></span>

            <button
              v-for="day in daysInMonth"
              :key="day"
              @click="handleDateSelect(day)"
              class="p-2 rounded hover:bg-blue-100 text-sm"
              :class="{
                'bg-blue-500 text-white': (() => {
                  if (!model.value) return false
                  const [m, d, y] = model.value.replace(',', '').split(' ')
                  return m === months[month] && Number(d) === day && Number(y) === year
                })()
              }"
            >
              {{ day }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <p v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</p>
  </div>
</template>

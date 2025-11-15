// composables/useGoogleSheet.ts
import { ref } from 'vue';
import type { PrimaryAppPersonalInfo } from '~/types/form'

const loading = ref(false)
const error = ref<string | null>(null)
const success = ref(false)
  
export const useGoogleSheet = () => {
  async function submitForm (formData: PrimaryAppPersonalInfo) {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const res = await $fetch('https://script.google.com/macros/s/AKfycbymtQn0JtO_LTlTadYfoa7D9Nb0FuYc4lrQ7Oq4MOo2mdd2oFgB8aeoef7Pz789BJM9/exec ',
      {
        method: 'POST',
        body: formData,
      })

      if ((res as any).status === 'success') {
        success.value = true
      } else {
        error.value = (res as any).message || 'Unknown error'
      }
    } catch (err: any) {
      error.value = err.message || 'Failed to submit'
    } finally {
      loading.value = false
    }
  };

  return { submitForm, loading, error, success }
};

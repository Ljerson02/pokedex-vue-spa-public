import { ref } from 'vue';

export function useLoading() {
  const isLoading = ref(false);

  const setLoading = (value: boolean) => {
    isLoading.value = value;
  };

  return {
    isLoading,
    setLoading,
  };
}
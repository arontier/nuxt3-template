import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';

const useCounter = defineStore('counter', () => {
  const count: Ref<number> = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});

export default useCounter;

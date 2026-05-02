<template>
  <component
    :is="tag"
    :to="!disabled ? to : undefined"
    :class="buttonClasses"
    class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    to: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    disabled: false,
  });

  const tag = computed(() => (props.disabled ? 'span' : 'router-link'));

  const buttonClasses = computed(() => {
    const base = 'text-white';
    if (props.disabled) return `${base} bg-gray-400 cursor-not-allowed`;

    switch (props.variant) {
      case 'primary':
        return `${base} bg-blue-600 hover:bg-blue-700 active:bg-blue-900 focus:ring-blue-500`;
      case 'secondary':
        return `${base} bg-gray-600 hover:bg-gray-700 active:bg-gray-900 focus:ring-gray-500`;
      case 'tertiary':
        return `${base} bg-green-600 hover:bg-green-700 active:bg-green-900 focus:ring-green-500`;
      default:
        return `${base} bg-blue-600 hover:bg-blue-700 active:bg-blue-900 focus:ring-blue-500`;
    }
  });
</script>

<template>
  <div class="content">
    <h1 class="text-3xl font-bold underline py-2">
      Hello world!
    </h1>
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <div class="py-2"><Button class="dark">Shadcn Button</Button></div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>

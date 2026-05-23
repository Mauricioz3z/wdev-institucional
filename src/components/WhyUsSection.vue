<script setup>
import { COPY } from '../data/copy.js';

const w = COPY.why;
</script>

<template>
  <section id="por-que">
    <div class="wrap">
      <div class="why-head">
        <span class="eyebrow">{{ w.eyebrow }}</span>
        <h2 style="margin-top: 16px">{{ w.title }}</h2>
        <p>{{ w.sub }}</p>
      </div>
      <div class="why-grid">
        <div v-for="(c, i) in w.cards" :key="i" :class="['why-card', { dark: c.dark }]">
          <div class="big">{{ c.big }}</div>
          <h3>{{ c.t }}</h3>
          <p>{{ c.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

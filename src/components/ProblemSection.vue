<script setup>
import { COPY } from '../data/copy.js';

const p = COPY.problem;
</script>

<template>
  <section id="problema">
    <div class="wrap">
      <div class="problem-head">
        <div>
          <span class="eyebrow">{{ p.eyebrow }}</span>
          <h2 style="margin-top: 16px">{{ p.title }}</h2>
        </div>
        <p>{{ p.sub }}</p>
      </div>
      <div class="pains">
        <div v-for="it in p.items" :key="it.n" class="pain">
          <div class="num">{{ it.n }} / 06</div>
          <h3>{{ it.t }}</h3>
          <p>{{ it.d }}</p>
          <div class="quote">{{ it.q }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

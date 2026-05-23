<script setup>
import { ref } from 'vue';
import { COPY } from '../data/copy.js';

const p = COPY.process;
const open = ref(0);

function toggle(i) {
  open.value = open.value === i ? -1 : i;
}
</script>

<template>
  <section id="processo">
    <div class="wrap">
      <div class="process">
        <div class="process-head">
          <div>
            <span class="eyebrow">{{ p.eyebrow }}</span>
            <h2 style="margin-top: 16px">{{ p.title }}</h2>
          </div>
          <p>{{ p.sub }}</p>
        </div>

        <div class="process-list">
          <div
            v-for="(st, i) in p.steps"
            :key="i"
            :class="['step', { open: open === i }]"
            @click="toggle(i)"
          >
            <div class="ix">{{ st.n }}</div>
            <div>
              <h3>{{ st.t }}</h3>
              <div class="desc">{{ st.d }}</div>
            </div>
            <div class="meta">
              {{ st.meta }}
              <button class="toggle" aria-label="expandir" type="button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

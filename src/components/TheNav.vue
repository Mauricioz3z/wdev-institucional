<script setup>
import { ref } from 'vue';
import { COPY } from '../data/copy.js';

const active = ref('/#inicio');

function handleClick(href) {
  active.value = href;
}
</script>

<template>
  <div class="nav-shell">
    <nav class="nav">
      <a href="/#inicio" class="brand" aria-label="HTR Sistemas — página inicial">
        <img src="/logo-htr.png" alt="HTR Sistemas" class="brand-logo" width="180" height="34" />
      </a>
      <div class="nav-links">
        <a
          v-for="item in COPY.nav"
          :key="item.href"
          :href="item.href"
          :class="['nav-link', { active: active === item.href }]"
          @click="handleClick(item.href)"
        >
          {{ item.label }}
        </a>
      </div>
      <a href="/#contato" class="btn btn-dark" style="height: 44px">
        Agendar reunião
        <span class="arrow">→</span>
      </a>
    </nav>
  </div>
</template>

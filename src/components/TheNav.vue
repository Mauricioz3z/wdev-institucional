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
      <a href="/#inicio" class="brand">
        <span class="brand-mark">W</span>
        <span>Wdev <span style="color: var(--ink-mute); font-weight: 500">Digital</span></span>
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

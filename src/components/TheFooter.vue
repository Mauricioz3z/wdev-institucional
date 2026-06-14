<script setup>
import { COPY } from '../data/copy.js';

const f = COPY.footer;
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="foot-grid">
      <div>
        <div class="foot-brand">
          HTR <span style="color: #8aa092; font-weight: 400">Sistemas</span>
        </div>
        <div class="foot-tag">
          {{ COPY.brand.slogan }} — engenharia de software sob medida para o agronegócio de grande porte.
        </div>
      </div>
      <div v-for="(col, i) in f.cols" :key="i" class="foot-col">
        <h5>{{ col.h }}</h5>
        <a v-for="(l, j) in col.links" :key="j" :href="l.href">{{ l.label }}</a>
      </div>
    </div>
    <div class="foot-bottom">
      <div>© {{ year }} HTR Sistemas. CNPJ 66.196.844/0001-68</div>
      <div
        style="font-family: 'JetBrains Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase"
      >
        {{ f.seoLine }}
      </div>
    </div>
  </footer>
</template>

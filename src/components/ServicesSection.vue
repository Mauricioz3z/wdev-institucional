<script setup>
import { ref } from 'vue';
import { COPY } from '../data/copy.js';

const s = COPY.services;
const tab = ref(0);
</script>

<template>
  <section id="servicos">
    <div class="wrap">
      <div class="services-head">
        <div>
          <span class="eyebrow">{{ s.eyebrow }}</span>
          <h2 style="margin-top: 16px; max-width: 720px">{{ s.title }}</h2>
        </div>
        <p style="color: var(--ink-mute); max-width: 380px; font-size: 16px">{{ s.sub }}</p>
      </div>

      <div class="services-tabs">
        <button
          v-for="(t, i) in s.tabs"
          :key="i"
          :class="['services-tab', { active: tab === i }]"
          @click="tab = i"
        >
          {{ t }}
        </button>
      </div>

      <div class="services-grid">
        <div class="service-feature">
          <div class="service-photo">
            <img
              src="/assets/services-dashboard.webp"
              alt="Dashboard de gestão de negociações em sistema sob medida para o agronegócio"
              width="1660"
              height="947"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3>{{ s.feature.title }}</h3>
            <p style="margin-top: 14px">{{ s.feature.desc }}</p>
          </div>
          <div class="service-bullets">
            <span v-for="(b, i) in s.feature.bullets" :key="i" class="chip dark">
              <span class="dot"></span>{{ b }}
            </span>
          </div>
        </div>

        <div class="service-list">
          <div v-for="(it, i) in s.items" :key="i" class="service-item">
            <div class="ix">0{{ i + 1 }}</div>
            <div>
              <h4>{{ it.t }}</h4>
              <p>{{ it.d }}</p>
            </div>
            <div class="go">→</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

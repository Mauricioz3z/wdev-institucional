<script setup>
import { COPY } from '../data/copy.js';

const a = COPY.agro;
</script>

<template>
  <section id="agro">
    <div class="wrap">
      <div class="agro">
        <div>
          <span class="eyebrow">{{ a.eyebrow }}</span>
          <h2 style="margin-top: 16px">
            Especialistas em software para o <em>agronegócio</em>.
          </h2>
          <p style="margin-top: 18px">{{ a.sub }}</p>
          <div class="agro-segments">
            <div v-for="(seg, i) in a.segments" :key="i" class="agro-seg">{{ seg }}</div>
          </div>
        </div>

        <div class="agro-vis">
          <img
            src="/assets/agro-collage.png"
            alt="Mosaico do agronegócio: lavoura, pecuária, confinamento, logística e armazenagem"
          />
          <!-- <div class="agro-badge">{{ a.badge }}</div>
          <div class="agro-mini">
            {{ a.miniLabel }}
            <b>{{ a.miniValue }}</b>
            {{ a.miniSub }}
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

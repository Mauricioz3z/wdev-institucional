<script setup>
import { COPY } from '../data/copy.js';

const h = COPY.hero;
</script>

<template>
  <section id="inicio" class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-card">
        <!--  <div class="hero-tag">{{ h.tag }}</div> -->
          <div>
            <span class="eyebrow" style="color: var(--lime)">
              <span
                style="background: var(--lime); width: 6px; height: 6px; border-radius: 50%; display: inline-block"
              ></span>
              {{ h.eyebrow }}
            </span>
            <h1 style="margin-top: 22px">
              Sistemas corporativos sob medida<br />
              para o agronegócio de <em>precisão</em>.
            </h1>
            <p class="hero-sub">{{ h.sub }}</p>
            <div class="hero-ctas">
              <a href="#contato" class="btn btn-primary">
                {{ h.ctaPrimary }}
                <span class="arrow">→</span>
              </a>
              <a
                href="#processo"
                class="btn btn-ghost"
                style="background: rgba(255, 255, 255, 0.06); border-color: rgba(255, 255, 255, 0.16); color: #eaf0e6"
              >
                {{ h.ctaSecondary }}
              </a>
            </div>
          </div>
        </div>

        <div class="hero-aside">
          <div class="hero-photo">
            <img
              src="/assets/hero-campo.webp"
              alt="Operação do agronegócio usando sistema corporativo sob medida da HTR Sistemas em smartphone"
              width="768"
              height="768"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          <div class="hero-stats">
            <div v-for="(s, i) in h.stats" :key="i" class="hero-stat">
              <div class="v">{{ s.v }}</div>
              <div class="l">{{ s.l }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="slogan">
        <span>{{ COPY.brand.slogan }}</span>
        <span class="line"></span>
        <span
          style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase"
        >
          wdevdigital.com.br
        </span>
      </div>

      <div class="trust">
        <div class="trust-label">
          Atendemos empresas que operam em escala — do campo à indústria.
        </div>
        <div class="trust-row">
          <div v-for="(t, i) in COPY.trust" :key="i" class="trust-item">
            {{ t.name }}
            <small>{{ t.small }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

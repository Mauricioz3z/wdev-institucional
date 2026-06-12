<script setup>
import TheNav from '../components/TheNav.vue';
import TheFooter from '../components/TheFooter.vue';
import { SEGMENT_LIST } from '../data/segments.js';
</script>

<template>
  <TheNav />

  <main>
    <section class="hub-hero">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Início</a>
          <span aria-hidden="true">/</span>
          <span>Soluções</span>
        </nav>
        <span class="eyebrow">Soluções por segmento</span>
        <h1>Automação e software sob medida para cada elo do agronegócio</h1>
        <p class="hub-intro">
          Cada segmento do agro tem vocabulário, regras e gargalos próprios. Escolha o seu e veja os
          problemas que resolvemos e os módulos típicos de um projeto.
        </p>
      </div>
    </section>

    <section class="hub-grid-section">
      <div class="wrap">
        <div class="hub-grid">
          <a v-for="s in SEGMENT_LIST" :key="s.slug" :href="`/solucoes/${s.slug}/`" class="hub-card">
            <span class="eyebrow">{{ s.shortLabel }}</span>
            <h2>{{ s.h1 }}</h2>
            <p>{{ s.metaDescription }}</p>
            <span class="go">Ver solução →</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <TheFooter />
</template>

<style scoped>
.hub-hero {
  padding: 140px 0 64px;
  background: var(--bg-deep);
  color: #eaf0e6;
}
.hub-hero .eyebrow {
  color: var(--lime);
}
.hub-hero .eyebrow::before {
  background: var(--lime);
}
.breadcrumb {
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: #8aa092;
  margin-bottom: 26px;
}
.breadcrumb a {
  text-decoration: none;
}
.breadcrumb a:hover {
  color: var(--lime);
}
.hub-hero h1 {
  margin-top: 20px;
  max-width: 860px;
  font-size: clamp(34px, 4.4vw, 60px);
}
.hub-intro {
  margin-top: 20px;
  max-width: 640px;
  color: #b9c6bc;
  font-size: 17px;
}
.hub-grid-section {
  padding: 64px 0 96px;
}
.hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
.hub-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 30px;
  text-decoration: none;
  box-shadow: var(--shadow-card);
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.hub-card:hover {
  border-color: var(--green);
  transform: translateY(-2px);
}
.hub-card h2 {
  font-size: 22px;
  line-height: 1.25;
}
.hub-card p {
  color: var(--ink-mute);
  font-size: 14px;
}
.hub-card .go {
  margin-top: auto;
  color: var(--green);
  font-weight: 600;
  font-size: 14px;
}
</style>

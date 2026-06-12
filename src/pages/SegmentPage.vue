<script setup>
import TheNav from '../components/TheNav.vue';
import TheFooter from '../components/TheFooter.vue';
import { SEGMENTS } from '../data/segments.js';

const props = defineProps({
  segment: { type: Object, required: true },
});

const related = props.segment.related.map((slug) => SEGMENTS[slug]).filter(Boolean);
</script>

<template>
  <TheNav />

  <main>
    <section class="seg-hero">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Início</a>
          <span aria-hidden="true">/</span>
          <a href="/solucoes/">Soluções</a>
          <span aria-hidden="true">/</span>
          <span>{{ segment.shortLabel }}</span>
        </nav>
        <span class="eyebrow">{{ segment.eyebrow }}</span>
        <h1>{{ segment.h1 }}</h1>
        <p class="seg-intro">{{ segment.intro }}</p>
        <div class="seg-ctas">
          <a href="/#contato" class="btn btn-primary">
            Agendar reunião
            <span class="arrow">→</span>
          </a>
          <a href="/#processo" class="btn btn-ghost">Como trabalhamos</a>
        </div>
      </div>
    </section>

    <section class="seg-pains">
      <div class="wrap">
        <span class="eyebrow">Diagnóstico</span>
        <h2>Problemas que resolvemos nesse segmento</h2>
        <div class="seg-pain-grid">
          <article v-for="(p, i) in segment.pains" :key="i" class="seg-pain">
            <div class="seg-pain-n">0{{ i + 1 }}</div>
            <h3>{{ p.t }}</h3>
            <p>{{ p.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="seg-modules">
      <div class="wrap">
        <span class="eyebrow">O que automatizamos</span>
        <h2>Módulos típicos de um projeto</h2>
        <p class="seg-modules-sub">
          Cada projeto é desenhado do zero — estes são os módulos mais comuns que construímos para
          esse segmento, sempre adaptados à regra da sua operação.
        </p>
        <ul class="seg-module-list">
          <li v-for="(m, i) in segment.modules" :key="i">{{ m }}</li>
        </ul>
      </div>
    </section>

    <section class="seg-faq">
      <div class="wrap">
        <span class="eyebrow">Perguntas frequentes</span>
        <h2>Dúvidas comuns</h2>
        <details v-for="(f, i) in segment.faq" :key="i" class="seg-faq-item">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

    <section class="seg-related">
      <div class="wrap">
        <span class="eyebrow">Outros segmentos</span>
        <h2>Também atendemos</h2>
        <div class="seg-related-grid">
          <a v-for="r in related" :key="r.slug" :href="`/solucoes/${r.slug}/`" class="seg-related-card">
            <strong>{{ r.shortLabel }}</strong>
            <span>{{ r.h1 }}</span>
            <span class="go">→</span>
          </a>
        </div>
      </div>
    </section>

    <section class="seg-cta">
      <div class="wrap">
        <div class="seg-cta-box">
          <h2>Vamos conversar sobre a sua operação?</h2>
          <p>
            Em 30 minutos entendemos o cenário, identificamos onde o software pode ajudar e dizemos
            se faz sentido seguir. Sem compromisso e sem proposta-padrão.
          </p>
          <a href="/#contato" class="btn btn-primary">
            Agendar reunião
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <TheFooter />
</template>

<style scoped>
main {
  display: block;
}
section {
  padding: 64px 0;
}
.seg-hero {
  padding: 140px 0 72px;
  background: var(--bg-deep);
  color: #eaf0e6;
}
.seg-hero .eyebrow {
  color: var(--lime);
}
.seg-hero .eyebrow::before {
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
.seg-hero h1 {
  margin-top: 20px;
  max-width: 820px;
  font-size: clamp(34px, 4.4vw, 64px);
}
.seg-intro {
  margin-top: 22px;
  max-width: 680px;
  font-size: 17px;
  color: #b9c6bc;
}
.seg-ctas {
  display: flex;
  gap: 14px;
  margin-top: 34px;
  flex-wrap: wrap;
}
.seg-ctas .btn-ghost {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.16);
  color: #eaf0e6;
}

.seg-pains h2,
.seg-modules h2,
.seg-faq h2,
.seg-related h2 {
  margin-top: 16px;
}
.seg-pain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 36px;
}
.seg-pain {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 26px;
  box-shadow: var(--shadow-card);
}
.seg-pain-n {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--ink-soft);
}
.seg-pain h3 {
  margin-top: 12px;
}
.seg-pain p {
  margin-top: 10px;
  color: var(--ink-mute);
  font-size: 15px;
}

.seg-modules-sub {
  margin-top: 14px;
  max-width: 560px;
  color: var(--ink-mute);
}
.seg-module-list {
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
}
.seg-module-list li {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 14px 18px;
  font-weight: 600;
  font-size: 15px;
}
.seg-module-list li::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  margin-right: 12px;
}

.seg-faq-item {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 18px 22px;
  margin-top: 12px;
}
.seg-faq-item:first-of-type {
  margin-top: 30px;
}
.seg-faq-item summary {
  font-weight: 600;
  cursor: pointer;
}
.seg-faq-item p {
  margin-top: 12px;
  color: var(--ink-mute);
}

.seg-related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 30px;
}
.seg-related-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 24px;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.seg-related-card:hover {
  border-color: var(--green);
  transform: translateY(-2px);
}
.seg-related-card strong {
  font-size: 16px;
}
.seg-related-card span {
  color: var(--ink-mute);
  font-size: 14px;
}
.seg-related-card .go {
  color: var(--green);
  font-size: 18px;
}

.seg-cta {
  padding-bottom: 96px;
}
.seg-cta-box {
  background: var(--green-deep);
  color: #eaf0e6;
  border-radius: var(--radius-lg);
  padding: 56px 48px;
  text-align: center;
}
.seg-cta-box p {
  margin: 16px auto 30px;
  max-width: 520px;
  color: #b9c6bc;
}
</style>

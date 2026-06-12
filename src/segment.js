import { createApp } from 'vue';
import './styles/global.css';
import SegmentPage from './pages/SegmentPage.vue';
import SolucoesHub from './pages/SolucoesHub.vue';
import { SEGMENTS } from './data/segments.js';

const root = document.getElementById('app');
const slug = root?.dataset.segment;

if (!root) {
  throw new Error('Elemento #app não encontrado.');
}

if (slug === 'index') {
  createApp(SolucoesHub).mount(root);
} else if (slug && SEGMENTS[slug]) {
  createApp(SegmentPage, { segment: SEGMENTS[slug] }).mount(root);
} else {
  window.location.replace('/solucoes/');
}

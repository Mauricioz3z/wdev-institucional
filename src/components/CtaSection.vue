<script setup>
import { reactive, ref, computed } from 'vue';
import { COPY } from '../data/copy.js';
import { enviarContato } from '../services/contactApi.js';
import { maskPhoneBR, digitsOnly } from '../utils/phoneMask.js';

const c = COPY.cta;

const form = reactive({
  nome: '',
  email: '',
  telefone: '',
  setor: '',
  mensagem: '',
});

const status = ref('idle'); // 'idle' | 'sending' | 'success' | 'error'
const feedback = ref('');
const showSuccess = ref(false);

const sending = computed(() => status.value === 'sending');

const SETORES = [
  'Fazenda / Grupo agrícola',
  'Pecuária',
  'Transportadora do agro',
  'Cooperativa',
  'Insumos',
  'Agroindústria',
  'Logística rural',
  'Outro',
];

function onPhoneInput(e) {
  form.telefone = maskPhoneBR(e.target.value);
}

function validar() {
  if (!form.nome.trim()) return 'Informe seu nome e empresa.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Informe um e-mail válido.';
  const tel = digitsOnly(form.telefone);
  if (tel.length < 10 || tel.length > 11) return 'Informe um telefone válido com DDD.';
  if (!form.mensagem.trim()) return 'Conte um pouco sobre a sua necessidade.';
  return null;
}

function buildMensagem() {
  const setor = form.setor ? `Setor: ${form.setor}\n\n` : '';
  return `${setor}${form.mensagem.trim()}`;
}

function fecharSucesso() {
  showSuccess.value = false;
  status.value = 'idle';
  feedback.value = '';
}

async function submit() {
  const erro = validar();
  if (erro) {
    status.value = 'error';
    feedback.value = erro;
    return;
  }

  status.value = 'sending';
  feedback.value = '';

  try {
    await enviarContato({
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      mensagem: buildMensagem(),
    });

    status.value = 'success';
    feedback.value = 'Recebido — retornamos em até 1 dia útil.';
    showSuccess.value = true;
    Object.assign(form, { nome: '', email: '', telefone: '', setor: '', mensagem: '' });
  } catch (err) {
    status.value = 'error';
    feedback.value = err?.message || 'Não foi possível enviar agora. Tente novamente.';
  }
}
</script>

<template>
  <section id="contato">
    <div class="wrap">
      <div class="cta-block">
        <div>
          <span class="eyebrow">{{ c.eyebrow }}</span>
          <h2 style="margin-top: 16px">
            Vamos conversar sobre o<br />seu <em>projeto</em>.
          </h2>
          <p>{{ c.sub }}</p>
          <div class="cta-ctas">
            <a href="#contato" class="btn btn-dark">
              {{ c.primary }}
              <span class="arrow">→</span>
            </a>
            <a href="#contato" class="btn btn-ghost">{{ c.secondary }}</a>
          </div>
          <div class="cta-meta">
            <div v-for="([k, v], i) in c.meta" :key="i"><b>{{ k }}.</b> {{ v }}</div>
          </div>
        </div>

        <form class="cta-form" @submit.prevent="submit" novalidate>
          <h4>Enviar resumo do projeto</h4>

          <div class="field">
            <label for="nome">Nome e empresa</label>
            <input
              id="nome"
              v-model="form.nome"
              type="text"
              autocomplete="name"
              placeholder="Ex.: João Silva — Fazenda São Bento"
              required
            />
          </div>

          <div class="field">
            <label for="email">E-mail corporativo</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              placeholder="voce@empresa.com.br"
              required
            />
          </div>

          <div class="field">
            <label for="telefone">Telefone / WhatsApp</label>
            <input
              id="telefone"
              :value="form.telefone"
              type="tel"
              inputmode="numeric"
              autocomplete="tel"
              placeholder="(18) 99999-9999"
              maxlength="16"
              required
              @input="onPhoneInput"
            />
          </div>

          <div class="field">
            <label for="setor">Setor</label>
            <select id="setor" v-model="form.setor">
              <option value="" disabled>Selecione o setor</option>
              <option v-for="s in SETORES" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>

          <div class="field">
            <label for="mensagem">Resumo da necessidade</label>
            <textarea
              id="mensagem"
              v-model="form.mensagem"
              placeholder="Ex.: Precisamos integrar balança rodoviária com ERP e gerar romaneio digital."
              required
            ></textarea>
          </div>

          <div v-if="status === 'error'" class="cta-feedback error" role="status">
            {{ feedback }}
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            style="justify-content: center"
            :disabled="sending"
          >
            <template v-if="sending">Enviando…</template>
            <template v-else>Enviar resumo</template>
            <span class="arrow">→</span>
          </button>
        </form>
      </div>
    </div>

    <Transition name="success-fade">
      <div
        v-if="showSuccess"
        class="success-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        @click.self="fecharSucesso"
      >
        <div class="success-modal">
          <div class="success-check" aria-hidden="true">
            <svg viewBox="0 0 52 52" width="64" height="64">
              <circle class="check-circle" cx="26" cy="26" r="24" />
              <path class="check-tick" d="M14 27 l8 8 l16 -18" />
            </svg>
          </div>
          <h3 id="success-title" class="success-title">Mensagem enviada!</h3>
          <p class="success-text">
            Recebemos seu resumo e vamos retornar em <b>até 1 dia útil</b>
            no e-mail e WhatsApp informados.
          </p>
          <button type="button" class="btn btn-dark" @click="fecharSucesso">
            Fechar
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.success-overlay {
  position: fixed;
  inset: 0;
  background: rgba(14, 42, 28, 0.55);
  backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  z-index: 100;
  padding: 24px;
}

.success-modal {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  padding: 40px 36px 32px;
  max-width: 440px;
  width: 100%;
  text-align: center;
  box-shadow: 0 30px 80px -20px rgba(14, 32, 26, 0.45);
  animation: success-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.success-check {
  display: grid;
  place-items: center;
  margin-bottom: 18px;
}

.check-circle {
  fill: none;
  stroke: var(--green);
  stroke-width: 3;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: check-circle 0.55s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.check-tick {
  fill: none;
  stroke: var(--green);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: check-tick 0.35s 0.45s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.success-title {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 10px;
}

.success-text {
  color: var(--ink-mute);
  font-size: 15px;
  margin-bottom: 24px;
  line-height: 1.55;
}

.success-text b {
  color: var(--green);
  font-weight: 600;
}

.success-modal .btn {
  margin: 0 auto;
}

.success-fade-enter-active,
.success-fade-leave-active {
  transition: opacity 0.25s ease;
}
.success-fade-enter-from,
.success-fade-leave-to {
  opacity: 0;
}

@keyframes check-circle {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes check-tick {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes success-pop {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>

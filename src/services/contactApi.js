const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function enviarContato(payload) {
  const resp = await fetch(`${API_URL}/enviar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await resp.json();
  } catch {
    data = { sucesso: false, mensagem: 'Resposta inválida do servidor.' };
  }

  if (!resp.ok || !data?.sucesso) {
    throw new Error(data?.mensagem || `Falha ao enviar (HTTP ${resp.status}).`);
  }

  return data;
}

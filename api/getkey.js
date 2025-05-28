/** @format */

// api/getkey.js
export default function handler(req, res) {
  // Impostiamo gli headers CORS per permettere alle pagine web di chiamare questa API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Gestiamo le richieste OPTIONS per il preflight CORS
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Per ora restituiamo una chiave di esempio
  // Qui potrai implementare la tua logica specifica
  // const apiKey = "demo-key-" + Date.now();
  const apiKey = "hf_ULJYcDahMATjZAhfLQnknnUDuNNGoQVogJs";

  // Restituiamo la risposta in formato JSON
  res.status(200).json({
    success: true,
    apiKey: apiKey,
    timestamp: new Date().toISOString(),
  });
}

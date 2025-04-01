import { useState } from "react";

export default function Game() {
  const [money, setMoney] = useState(10000);
  const [btc, setBtc] = useState(0);
  const [risk, setRisk] = useState(10);
  const [reputation, setReputation] = useState(50);

  const investInSocialMedia = () => {
    if (money >= 1000) {
      setMoney(money - 1000);
      setReputation(reputation + 5);
    }
  };

  const bribeOfficials = () => {
    if (money >= 5000) {
      setMoney(money - 5000);
      setRisk(risk - 10);
    }
  };

  const hackRival = () => {
    if (money >= 3000) {
      setMoney(money - 3000);
      setReputation(reputation + 10);
      setRisk(risk + 10);
    }
  };

  const convertToBTC = () => {
    if (money >= 1000) {
      setMoney(money - 1000);
      setBtc(btc + 0.01);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎰 Kaçak Bahis Kralı</h1>
      <p>💰 Para: {money.toLocaleString()} ₺</p>
      <p>₿ BTC: {btc.toFixed(2)}</p>
      <p>📉 Risk Oranı: {risk}%</p>
      <p>🌟 İtibar: {reputation}%</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
        <button onClick={investInSocialMedia}>📢 Sosyal Medya Yatırımı (1000 ₺)</button>
        <button onClick={bribeOfficials}>💼 Rüşvet Ver (5000 ₺)</button>
        <button onClick={hackRival}>💻 Rakip Siteyi Hackle (3000 ₺)</button>
        <button onClick={convertToBTC}>₿ BTC'ye Çevir (1000 ₺)</button>
      </div>
    </div>
  );
}

import { pastelBgColors } from "./const";

export default function getRandomPastelColor() {
  return pastelBgColors[Math.floor(Math.random() * pastelBgColors.length)];
}

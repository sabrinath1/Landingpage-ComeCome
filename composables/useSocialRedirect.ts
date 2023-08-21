function redirect(
  social:
    | "instagram"
    | "whatsapp"
    | "facebook"
    | "tiktok"
    | "twitter"
    | "linkedin"
) {
  let link = "";

  switch (social) {
    case "instagram":
      link =
        "https://www.instagram.com/comecomecozinhaindustrial/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D";
      break;
    case "whatsapp":
      link =
        "https://wa.me/5515996514338?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+fornecidos+pela+Come+Come";
      break;
    case "facebook":
      link = "https://www.facebook.com/";
      break;
    case "tiktok":
      link = "https://www.tiktok.com/pt-BR/";
      break;
    case "twitter":
      link = "https://twitter.com/?lang=pt-br";
      break;
    case "linkedin":
      link =
        "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH2sEr9My9qKQAAAYjpATcYFirOoYltR3qq9HHmvfAXZvAoWGxnVQT_SBw1QrPS313Mr-nSe5WuNvp7xS1CG7mkT6KFas164pNsYc9PgGzYZ57DHwg6ZPstIhgYA0ohTWKCznw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcamila-pe%25C3%25B1a-vizzon-domingues-055380148%2F";
      break;
  }
  if (link.length) window.open(link, "_blank");
}
export const useSocialRedirect = () => {
  return { redirect };
};

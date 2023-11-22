import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Notificador App",
    short_name: "Notificador",
    description: "Notificações e automações via Whatsapp",
    start_url: "/",
    display: "standalone",
    background_color: "#A855F7",
    theme_color: "#A855F7",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

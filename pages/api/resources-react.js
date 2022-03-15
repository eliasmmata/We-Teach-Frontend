const resourcesReact = [
    {
        id: 1,
        title: "React Owl Carousel",
        description: "Librería para hacer slides en React de manera sencilla.",
        url: "https://www.npmjs.com/package/react-owl-carousel",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react",
            "package",
            "slides",
            "carousel",
          ],
    },
    {
        id: 2,
        title: "Prime React",
        description: "Una de las mejores liberías UI para React.",
        url: "https://www.primefaces.org/primereact/",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react",
            "UI",
            "iconos",
            "componentes",
          ],
    },
    {
        id: 3,
        title: "NextJs Tips",
        description: "La mejor colección de consejos útiles de Next.js.",
        url: "https://nextjstips.com/",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react",
            "nextjs",
            "consejos",
            "tips",
          ],
    },
    {
        id: 4,
        title: "React Cookie Consent",
        description: "Barra de consentimiento de cookies simple y personalizable para usar en aplicaciones React.",
        url: "https://www.npmjs.com/package/react-cookie-consent",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react",
            "cookies",
            "package",
          ],
    },
    {
        id: 5,
        title: "React Toastify",
        description: "Agrega notificaciones a tu aplicación con facilidad. Personalízalos de manera fácil y rápida.",
        url: "https://www.npmjs.com/package/react-toastify",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react",
            "toast",
            "package",
          ],
    },
    {
        id: 6,
        title: "Instafeed.js",
        description: "Una forma sencilla de mostrar tus fotos de Instagram en tu sitio web.",
        url: "https://instafeedjs.com/",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react",
            "instagram",
            "package",
          ],
    },
]

export default function Handler(req, res) {
  if (req.method === "GET") {
    getAllResources(req, res);
  }
}

function getAllResources(req, res) {
  res.status(200).json(JSON.stringify(resourcesReact))
}
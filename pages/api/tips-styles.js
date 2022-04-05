const tipsStyles = [
    {
        id: 1,
        title: "Css Tricks",
        description: "La página de Css por excelencia. Si se puede hacer con Css, aquí te lo explicarán.",
        url: "https://css-tricks.com/",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "documentación",
          ],
          level: "beginner",
    },
    {
        id: 2,
        title: "3D Css",
        description: "Presentación increíblemente visual para ver las posibilidades que da CSS.",
        url: "https://rupl.github.io/unfold/",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "tutorial",
          ],
          level: "beginner",
    },
    {
        id: 3,
        title: "Css Dinner Selector",
        description: "Aprende a manejar de manera adecuada los selectores. 32 niveles de práctica",
        url: "https://flukeout.github.io",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "tutorial",
            "selectores",
          ],
          level: "beginner",
    },
    {
        id: 4,
        title: "Grid Garden",
        description: "Aprende grid css de manera sencilla y visual con este juego. No volverás a atascarte",
        url: "https://cssgridgarden.com",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "grid",
          ],
          level: "beginner",
    },
    {
        id: 5,
        title: "Flexbox Frog",
        description: "Aprende flex de manera sencilla y visual con este juego para iniciarte.",
        url: "https://flexboxfroggy.com",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "flex",
          ],
          level: "beginner",
    },
    {
        id: 6,
        title: "Filtro Imagen",
        description: "Convierte tu imagen en el color de tu paleta con este convertidor. Indispensable herramienta.",
        url: "https://isotropic.co/tool/hex-color-to-css-filter",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "imagenes",
            "color",
            "filtro",
          ],
          level: "beginner",
    },
    {
        id: 7,
        title: "Centrar botón",
        description: "Centra botón en un DIV, y no vuelvas a olvidarlo (eso es más difícil : )",
        url: "https://www.w3schools.com/howto/howto_css_center_button.asp",
        image: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
        labels: [
            "css",
            "centrar",
            "botón",
          ],
          level: "beginner",
    },
]

export default function Handler(req, res) {
  if (req.method === "GET") {
    getAllTipsStyles(req, res);
  }
}

function getAllTipsStyles(req, res) {
  res.status(200).json(JSON.stringify(tipsStyles))
}
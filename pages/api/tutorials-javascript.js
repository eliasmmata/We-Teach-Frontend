const tutorialsJavascript = [
    {
        id: 1,
        title: "Javascript desde 0",
        description: "Tutorial de más de 10 horas para aprender Javascript desde 0 de manera divertida.",
        url: "https://www.youtube.com/watch?v=z95mZVUcJ-E&t=3498s",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "tutorial",
          ],
          level: "beginner",
    },
    {
        id: 2,
        title: "Javascript para React",
        description: "El Javascript que necesitas para aprender React con Carlos Azaustre. Imprescindible",
        url: "https://www.youtube.com/watch?v=sKsNO-quEAw",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "react",
            "tutorial",
          ],
          level: "intermediate",
    },
    {
        id: 3,
        title: "Curso JS desde 0",
        description: "Curso Javascript desde 0 por el gran Fazt. 2 horas de duración.",
        url: "https://www.youtube.com/watch?v=RqQ1d1qEWlE",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "tutorial",
          ],
          level: "beginner",
    },
    {
        id: 4,
        title: "JS en 40 minutos",
        description: "Curso de JS con el gran Freddy Vega, CEO de Platzi. Para aprender a programar tus primeras líneas.",
        url: "https://www.youtube.com/watch?v=zBk-Hyv6ykw",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "tutorial",
          ],
          level: "beginner",
    },
    {
        id: 5,
        title: "Qué es Javascript",
        description: "Aprende en 5 minutos qué es y cómo funciona Javascript de manera muy visual",
        url: "https://www.youtube.com/watch?v=riZbwRFMFuw",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "tutorial",
          ],
          level: "beginner",
    },
    {
        id: 6,
        title: "JS por FreeCodeCamp",
        description: "Aprende todo lo que necesitas saber para comenzar, paso a paso y con ejemplos.",
        url: "https://www.youtube.com/watch?v=ivdTnPl1ND0",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "tutorial",
          ],
          level: "beginner",
    },
    {
        id: 7,
        title: "Fetch API",
        description: "Cómo hacer Fetch API en 6 minutos, más de 500k visitas.",
        url: "https://www.youtube.com/watch?v=cuEtnrL9-H0",
        image: "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        labels: [
            "javascript",
            "fetch",
            "API"
          ],
          level: "intermediate",
    },
]

export default function Handler(req, res) {
  if (req.method === "GET") {
    getAllTutorials(req, res);
  }
}

function getAllTutorials(req, res) {
  res.status(200).json(JSON.stringify(tutorialsJavascript))
}
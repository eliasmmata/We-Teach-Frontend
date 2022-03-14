const resources = [
    {
        id: 1,
        title: "recurso 1",
        description: "descripcion del recurso 1",
        url: "https://www.stackoverflow.com",
        cover: "blank.png",
    },

    {
        id: 2,
        title: "recurso 2",
        description: "descripcion del recurso 2",
        url: "https://www.stackoverflow.com",
        cover: "blank.png",
    },
]

export default function Handler(req, res) {
  if (req.method === "GET") {
    getAllResources(req, res);
  }
}

function getAllResources(req, res) {
  res.status(200).json(JSON.stringify(resources))
}
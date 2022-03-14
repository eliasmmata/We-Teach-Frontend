const resources = [
    {
        id: 1,
        title: "Recurso 1",
        description: "descripcion del recurso 1",
        url: "https://www.stackoverflow.com",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react1",
            "label2",
            "label3",
            "label4",
          ],
    },
    {
        id: 2,
        title: "recurso 2",
        description: "descripcion del recurso 2",
        url: "https://www.stackoverflow.com",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react1",
            "label2",
            "label3",
            "label4",
          ],
    },
    {
        id: 3,
        title: "recurso 3",
        description: "descripcion del recurso 3",
        url: "https://www.stackoverflow.com",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react3",
            "label2",
            "label3",
            "label4",
          ],
    },
    {
        id: 4,
        title: "recurso 4",
        description: "descripcion del recurso 4",
        url: "https://www.stackoverflow.com",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react4",
            "label2",
            "label3",
            "label4",
          ],
    },
    {
        id: 5,
        title: "recurso 5",
        description: "descripcion del recurso 5",
        url: "https://www.stackoverflow.com",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react5",
            "label2",
            "label3",
            "label4",
          ],
    },
    {
        id: 6,
        title: "recurso 6",
        description: "descripcion del recurso 6",
        url: "https://www.stackoverflow.com",
        image: "https://icon-library.com/images/react-icon/react-icon-15.jpg",
        labels: [
            "react6",
            "label2",
            "label3",
            "label4",
          ],
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
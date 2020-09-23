import {addNewBoard, getBoard, updateBoard} from "../../../services/board.service";

export default async function getBoardByName(req, res) {
  const {query: {name}} = req;

  if (req.method === 'GET') {
    const board = await getBoard(name);

    return res.status(200).json(board);
  } else if (req.method === 'POST') {
    const board = await addNewBoard(name);

    return res.status(200).json(board);
  } else if (req.method === 'PUT') {
    const board = await updateBoard(name, req.body);

    return res.status(200).json(board);
  }
}
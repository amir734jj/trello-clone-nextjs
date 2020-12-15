import postgres from "postgres";
import boardDefault from "./board.default";

const sql = postgres(process.env.DATABASE_URL, {ssl: {rejectUnauthorized: false}});

export async function addNewBoard(name) {
  const [new_board] = await sql`
  insert into boards (name, data) values (${name}, ${sql.json(boardDefault)}) ON CONFLICT(name) DO NOTHING
  returning *
`;
  return new_board;
}

export async function createBoard() {
  return await sql`create table if not exists boards (name varchar(255), data text, primary key (name))`;
}

export async function updateBoard(name, data) {
  return await sql`update boards set data=${sql.json(data)} where name=${name}`;
}

export async function getBoard(name) {
  const [board] = await sql`select data from boards where name=${name}`;
  return JSON.parse(board.data);
}

createBoard().then()
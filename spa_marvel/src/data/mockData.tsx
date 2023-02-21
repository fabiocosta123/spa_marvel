
import cover1 from "../img/comics1.jpg";
import cover2 from "../img/comics2.jpg";
import cover3 from "../img/comics3.jpg";

export interface Comic {
    title: string;
    cover: string;
    score?: number | string;
}

const mockData: Comic[] = [
  {
    title: "X-Men",
    cover: cover1,
  },
  {
    title: "Iron-Man",
    cover: cover2,
  },
  {
    title: "Spider-Man",
    cover: cover3,
  },
  {
    title: "X-Men",
    cover: cover1,
  },
  {
    title: "Iron-Man",
    cover: cover2,
  },
  {
    title: "Spider-Man",
    cover: cover3,
  },
  {
    title: "X-Men",
    cover: cover1,
  },
  {
    title: "Iron-Man",
    cover: cover2,
  },
  {
    title: "Spider-Man",
    cover: cover3,
  },
  {
    title: "X-Men",
    cover: cover1,
  },
  {
    title: "Iron-Man",
    cover: cover2,
  },
  {
    title: "Spider-Man",
    cover: cover3,
  },
];

export default mockData;
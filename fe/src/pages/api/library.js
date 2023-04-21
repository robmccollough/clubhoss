// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {library} from "../../../data/library.js"

export default function handler(req, res) {
  res.status(200).json(library)
}

export default async function handler(req, res) {
  const { id, title, content } = req.body
  try {
    res.status(200).json({ message: 'create success' })
  } catch (error) {
    res.status(500).json({ error: `create failed ${error}` })
  }
}

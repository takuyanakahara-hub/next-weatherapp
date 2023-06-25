export default async function handler(req, res) {

  const data = req.body

  const code = data.code

  console.log(data)
  await fetch(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${code}.json`)
  .then((res) => res.json())
  .then((data) => {
    res.status(200).json({ data });
  })
}

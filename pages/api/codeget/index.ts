export default async function handler(req, res) {
  await fetch(`https://www.jma.go.jp/bosai/common/const/area.json`)
  .then((res) => res.json())
  .then((data) => {

    //console.log(req.body.name);

    const param = req.body.name;
    const KeySet = Object.keys(data["offices"]);

    for (var i = 0; i < KeySet.length; i++) {
      if (data["offices"][KeySet[i]].name == param) {
        //console.log(param)
        const code = KeySet[i]; 
        
        res.status(200).json({ code: code, area : param });
      }
    }

    
  })
}
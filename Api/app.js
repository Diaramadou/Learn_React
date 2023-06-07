import Http from 'http'

const server = Http.createServer((req, res)=>{
  // console.log(req.method)    
  // res.end("ok")
  if (req.url === '/api/auth/register' && req.method === 'POST') {
    let body = ""
    req.on("data",(chunck)=>{
      console.log(chunck)
      body+= chunck
    })
    req.on("end",()=>{
     
      const buff = Buffer.from(body)
      const json = buff.toJSON()

      console.log(json)
  })
}})



server.listen(4000, ()=>{
  console.log('connecté')
})
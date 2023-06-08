import Http from 'http'
import qs from 'node:querystring'
import fs  from 'fs'
import path from 'path'

const server = Http.createServer((req, res)=>{
  // console.log(req.method)    
  // res.end("ok")
  if (req.url === '/api/auth/register' && req.method === 'POST') {
    let body = ""
    req.on("data",(chunck)=>{
      body+= chunck
    })
    req.on("end",()=>{
      console.log(body) 
      body = JSON.parse(body)
      let oldData = fs.readFileSync(path.join("Api","data","user.json"), {'encoding': "utf-8"})
      oldData = JSON.parse(oldData)
      oldData.push(body)
      
      fs.writeFileSync(path.join("Api","data","user.json"), JSON.stringify(oldData), {'encoding': "utf-8"})

  })
}})



server.listen(4000, ()=>{
  console.log('connecté')
})
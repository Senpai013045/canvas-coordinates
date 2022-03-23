//@ts-check
import { useState,useMemo,useRef,useEffect } from "react";
import { initialXML } from "./MOCK";
import { getClosest, getJSONFromXML, getRandomColor, height, width } from "./utils";
//@ts-ignore
import img from "./img.jpg";


function App() {
  const [xml, setXml] = useState(initialXML);
  const canvas = useRef()
  
  const json = useMemo(()=>{
    return getJSONFromXML(xml);
  },[xml])

  const biggest = useMemo(()=>{
    return json.sort((a,b)=>{
      const heighta = height(a.bounds)
      const heightb = height(b.bounds)
      const widtha = width(a.bounds)
      const widthb = width(b.bounds)
      //return the biggest
      return heighta*widtha < heightb*widthb ? 1 : -1
    })[0]
  },json)

  const clickEventHandler = (e)=>{
    /**@type {HTMLCanvasElement} */
    const cnv = canvas.current
    if(!cnv){
      return
    }
    //get mouse position relative to canvas
    const rect = cnv.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    //get the closest element
    const closest = getClosest({
      x,
      y,
    },json)
    alert(JSON.stringify(closest,null,2))
  }


  useEffect(()=>{
    /**@type {HTMLCanvasElement} */
   const cnv = canvas.current;
   if(cnv){
     const ctx = cnv.getContext('2d');
     ctx.clearRect(0,0,cnv.width,cnv.height)
     //draw the image over it
     const image = new Image()
      image.src = img
      image.onload = ()=>{
        ctx.drawImage(image,0,0,cnv.width,cnv.height)
      }
     
     json.forEach(node=>{
       const text = node["resourceId"];
        const {x1,y1,x2,y2} = node.bounds;
        ctx.strokeStyle = getRandomColor()
        ctx.strokeRect(x1,y1,x2-x1,y2-y1);
        //font size 16px
        ctx.font = "16px Arial";
        ctx.fillStyle = getRandomColor()
        //fill text in middle
        ctx.fillText(text,(x1+x2)/2,(y1+y2)/2);
     })
    cnv.addEventListener("click",clickEventHandler)
   }
   return ()=>{
     cnv.removeEventListener("click",clickEventHandler)
   }
  },[xml,biggest])


  return (
    <div className="App">
      <div>
        <textarea
          value={xml}
          onChange={(e) => setXml(e.target.value)}
        ></textarea>
      </div>
      <div>
        {
          biggest && <canvas ref={canvas} height={biggest.bounds.y2 - biggest.bounds.y1 } width={biggest.bounds.x2 - biggest.bounds.x1} style={{backgroundColor:"rgba(115,115,115,0.2)"}}></canvas>
        }
      
      </div>
    </div>
  );
}

export default App;

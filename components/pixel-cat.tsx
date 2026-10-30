"use client";
import { useState } from "react";
const pixels=["...xx.......xx...","..xwwx.....xwwx..",".xwpwxxxxxxxwpwx.",".xwwwwwwwwwwwx..",".xwwbbwwwbbwwx..",".xwwwwppwwwwwx..","..xwwwwwwwwwx...","...xxxxxxxxx....","...xrrrrrrrx....","..xwwwyywwwx....","..xwwwwwwwwx...."];
const c:Record<string,string>={x:"#17171b",w:"#f5f5f5",p:"#ff96aa",b:"#3b9cff",r:"#e5484d",y:"#ffd24a"};
export function PixelCat(){const [awake,setAwake]=useState(false);return <button className="pixel-cat" onClick={()=>setAwake(!awake)} aria-label="Pixel cat, click to wake or sleep"><svg viewBox="0 0 18 11" shapeRendering="crispEdges" aria-hidden="true">{pixels.flatMap((row,y)=>[...row].map((v,x)=>v!=="."&&<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={c[v]}/>))}</svg>{!awake&&<span className="cat-z">z</span>}</button>}

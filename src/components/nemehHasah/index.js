import React, { Fragment, useEffect, useState } from 'react'
import css from './style.module.css'
import axios from '../../axios-orders'
export default function Home() {
  const [firebase, setFirebase] = useState([])
  const [Харах, setХарах] = useState("Харах")
     const [Ner, setNer] = useState("") 
  function NerHandler(event) {setNer(event.target.value)}
  const [Tailbar, setTailbar] = useState("0")
  function TailbarHandler(event) {setTailbar(event.target.value)}
  const [Angilal, setAngilal] = useState("")
  function AngilalHandler(event) {setAngilal(event.target.value)}
  const [Brend, setBrend] = useState("")
  function BrenHandler(event) {setBrend(event.target.value)}
  const [Zagvar, setZagvar] = useState("")
  function ZagvarHandler(event) {setZagvar(event.target.value)}
  const [Link, setLink] = useState("")
  function linkHandler(event) {setLink(event.target.value)}
  const [HemjihNegj, setHemjihNegj] = useState("")
  function HemjihNegjHandler(event) {setHemjihNegj(event.target.value)}
  const [Too, setToo] = useState("")
  function TooHandler(event) {setToo(event.target.value)}
  const [NegjUne, setNegjUne] = useState("")
  function NegjUneHandler(event) {setNegjUne(event.target.value)}
  const [NiitUne, setNiitUne] = useState("")
  function NiitUneHandler(event) {setNiitUne(event.target.value)}
  const [AvsanOgnoo, setAvsanOgnoo] = useState("")
  function AvsanOgnooHandler(event) {setAvsanOgnoo(event.target.value)}
  const [HaanaHend, setHaanaHend] = useState("")
  function HaanaHendHandler(event) {setHaanaHend(event.target.value)}
  const [Hezee, setHezee] = useState("")
  function HezeeHandler(event) {setHezee(event.target.value)}
  const [Evdrel, setEvdrel] = useState("")
  function EvdrelHandler(event) {setEvdrel(event.target.value)}
  const [DagaldahHeregsel, setDagaldahHeregsel] = useState("")
  function DagaldahHeregselHandler(event) {setDagaldahHeregsel(event.target.value)}
  function Click() {
    setХарах("багаж түүвэр")
    axios.get("/orders.json")
      .then(resp => {
        setFirebase(resp.data)
      })
}

    return (
      
      <div>
        <h1 className={css.header} onClick={Click}>{Харах}</h1> 
        <h2> хайх</h2>
        <table className={css.tableStyle}  border='1px'>
        <tr>
            <th><input className="searchNud" placeholder="хаанаас хэнээс" onChange={NerHandler} /></th>
            <th><input className="searchNud" placeholder="төрөл" onChange={TailbarHandler} /></th> 
            <th><input className="searchNud" placeholder="Ангилал..." onChange={AngilalHandler} /></th> 
            {/* <th><input className="searchNud" placeholder="Brend..." onChange={BrenHandler} /></th> 
            <th><input className="searchNud" placeholder="Загвар" onChange={ZagvarHandler} /></th>
            <th><input className="searchNud" placeholder="Link..." onChange={linkHandler} /></th> 
            <th><input className="searchNud" placeholder="Нэгж..." onChange={HemjihNegjHandler} /></th> 
            <th><input className="searchNud" placeholder="Тоо" onChange={TooHandler} /></th> 
            <th><input className="searchNud" placeholder="Нэгж..." onChange={NegjUneHandler} /></th>  
            <th><input className="searchNud" placeholder="Нийт..." onChange={NiitUneHandler} /></th>
            <th><input className="searchNud" placeholder="Авсан..." onChange={AvsanOgnooHandler} /></th> 
            <th><input className="searchNud" placeholder="Хэнд..." onChange={HaanaHendHandler} /></th> 
            <th><input className="searchNud" placeholder="Хэзээ" onChange={HezeeHandler} /></th> 
            <th><input className="searchNud" placeholder="Эвдрэл..." onChange={EvdrelHandler} /></th> 
            <th><input className="searchNud" placeholder="Дагалдах..." onChange={DagaldahHeregselHandler} /></th> */}
          </tr></table>
          <table className={css.tableStyle}  border='1px'>
          <tr>
            <th>
              </th><th>{Ner}</th> <th>{Tailbar}</th> <th>{Angilal}</th> <th>{Brend}</th> <th>{Zagvar}</th><th>{Link}</th> <th>{HemjihNegj}</th>
            <th>{Too}</th> <th>{NegjUne}</th>  <th>{NiitUne}</th><th>{AvsanOgnoo}</th> <th>{HaanaHend}</th> <th>{Hezee}</th> <th>{Evdrel}</th> 
            <th>{DagaldahHeregsel}</th>
          </tr></table>
          <table className={css.tableStyle}  border='1px'>
          <tr>
            <th>№</th><th>Нэр</th> <th>Тайлбар</th> <th>Ангилал</th> <th>Брэнд</th> <th>Загвар</th><th>Линк</th> <th>Хэмжих Нэгж</th> <th>Тоо</th> 
            <th>Нэгж Үнэ</th>  <th>Нийт үнэ</th><th>Авсан Огноо</th> <th>Хаана Хэнд</th> <th>Хэзээ</th> <th>Эвдрэл</th> <th>Дагалдах Хэрэгсэл</th>
          </tr>
          {
        Object.entries(firebase).map((resp, key) => {
          let x
              
          if ((resp[1].Нэр === Ner && Brend === "")  || (resp[1].Брэнд == Brend && resp[1].Нэр == Ner)  || (resp[1].Брэнд == Brend && Ner === "") || (Ner ==="" && Brend ==="")) 
          {
            
            return (
              <Fragment key={key}>
                <tr><th>{Tailbar}</th><th>{resp[1].Нэр}</th><th>{resp[1].Тайлбар}</th><th>{resp[1].Ангилал}</th><th>{resp[1].Брэнд}</th><th>{resp[1].Загвар}</th>
                  <th>Линк</th> <th>{resp[1].ХэмжихНэгж}</th> <th>{resp[1].Тоо}</th> <th>{resp[1].НэгжҮнэ}</th> 
                  <th>{resp[1].Тоо*resp[1].НэгжҮнэ}</th><th>{resp[1].АвсанОгноо}</th><th>{resp[1].ХаанаХэнд}</th><th>{resp[1].Хэзээ}</th> 
                  <th>{resp[1].Эвдрэл}</th> <th>{resp[1].ДагалдахХэрэгсэл}</th>
                </tr>
              </Fragment>
              
            )
        
          }

        })
      }
    </table>  
    </div>
  )
}

import React, { useEffect, useState } from "react";

//Light
//import "../style/bootswatch_v5.3/bootstrap-cerulean.css";
//import "../style/bootswatch_v5.3/bootstrap-cosmo.css";
//import "../style/bootswatch_v5.3/bootstrap-default.css";
//import "../style/bootswatch_v5.3/bootstrap-flatly.css";
//import "../style/bootswatch_v5.3/bootstrap-litera.css";
//import "../style/bootswatch_v5.3/bootstrap-lumen.css";
//import "../style/bootswatch_v5.3/bootstrap-sandstone.css";
//import "../style/bootswatch_v5.3/bootstrap-spacelab.css";
//import "../style/bootswatch_v5.3/bootstrap-united.css";
//import "../style/bootswatch_v5.3/bootstrap-yeti.css";
//import "../style/bootswatch_v5.3/bootstrap-zephyr.css";

//Dark
import "../style/bootswatch_v5.3/bootstrap-cyborg.css";
//limport "../style/bootswatch_v5.3/bootstrap-darkly.css";
//import "../style/bootswatch_v5.3/bootstrap-slate.css";
//import "../style/bootswatch_v5.3/bootstrap-solar.css";

//Fem
//import "../style/bootswatch_v5.3/bootstrap-journal.css";
//import "../style/bootswatch_v5.3/bootstrap-minty.css";
//import "../style/bootswatch_v5.3/bootstrap-pulse.css";

//Minified
//import "../style/bootswatch_v5.3/bootstrap-materia.css";
//import "../style/bootswatch_v5.3/bootstrap-simplex.css";
//import "../style/bootswatch_v5.3/bootstrap-superhero.css";

//Novelty
//import "../style/bootswatch_v5.3/bootstrap-lux.css";
//import "../style/bootswatch_v5.3/bootstrap-morph.css";
//import "../style/bootswatch_v5.3/bootstrap-quartz.css";
//import "../style/bootswatch_v5.3/bootstrap-sketchy.css";


export default function App() {    

    const [groups, setgroups] = React.useState({

        "poisoned": [811, 817, 810, 816, 13265, 13267, 13269, 13271],
        "godswords": [11802, 11804, 11806, 11808, 26233, 11798, 11810, 11812, 11814, 11816, 26370],
        "ballista": [19481, 19610, 19607],
        "zulrah": [12934, 12927, 12932, 12922, 11908, 11791, 12924, 12900, 12902, 12929],
        "spiderEggs": [23517, 223],
        "hydraClaw": [22978, 22966, 11889, 11824],
        "kodaiWand": [6914, 21043, 21006],
        "boots": [13239, 13237, 13235, 22954, 21733, 22951, 11840, 2577, 6920, 12598, 11836, 23037, 13231, 13229, 13227, 22960, 21730, 22957],
        "dragonShields": [21634, 11284, 22003, 21637, 11286, 22006, , 2890, 1540],
        "jewelry": [19553, 19547, 19550, 19544, 19541, 19535, 19532, 19538, 564, 565, 566, 2357, 19501, 1759],
        "gems": [6571, 6573, 19529, 19496, 19493],
        "herbsLow": [199, 249, 91, 201, 251, 93, 203, 253, 95, 205, 255, 97, 209, 259, 101, 2485, 2481, 2483, 217, 267, 109, 227],
        "herbsHigh": [207, 257, 99, 3049, 2998, 3002, 211, 261, 103, 213, 263, 105, 3051, 3000, 3004, 215, 265, 107, 219, 269, 111, 227], 
        "saplings": [5315, 5373, 5316, 5374, 5314, 5372, 22877, 22866, 5289, 5502, 5288, 5501, 22869, 22856, 22871, 22859, 21488, 21480,5354],
        "crushables": [5075, 6693, 237, 235, 1973, 1975, 9735, 9736, 26231, 26368],
        "crystalKey": [987, 985, 989],
        "dragonstone": [2572, 11980, 1704, 11978, 11126, 11972, 11113, 11968],
        "bandosTorva": [26394, 26382, 26376, 26384, 26378, 26386, 26380, 11832, 11834],
        "armadylMasori": [27269, 27235, 27226, 27238, 27229, 27241, 27232, 11828, 11830, 11826],
        "rings": [6733, 6737, 6731, 6735, 28298, 28295, 28304, 28301],
        "dharok": [4716, 4720, 4722, 4718, 4884, 4896, 4902, 4890],
        "guthan": [4724, 4728, 4730, 4726, 4908, 4920, 4926, 4914],
        "torag": [4745, 4749, 4751, 4747, 4956, 4968, 4974, 4962],
        "verac": [4753, 4757, 4759, 4755, 4980, 4992, 4998, 4986],
        "karil": [4732, 4736, 4738, 4734, 4932, 4944, 4950, 4938],
        "ahrim": [4708, 4712, 4714, 4710, 4860, 4872, 4878, 4866],
        "spiritShields": [12821, 12825, 12817, 12829, 12831, 12823, 12827, 12819, 12833],
        "wards": [11926, 11928, 11929, 11930, 11924, 11931, 11932, 11933],
        "dragonCrossbow": [21902, 21921, 21918, 21952, 9438],
        "staffOfLight": [22296, 11791, 13256],
        "chainmace": [27657, 22542, 27667],
        "muspah": [27614, 27612, 27641, 20724, 27616],
        "webweaver": [27652, 22547, 27670],
        "zaryteCrossbow": [26374, 11785, 26372, 26231],
        "voidwaker": [27690, 27684, 27681, 27687],
        "dragonArmor": [21892, 21895, 3140, 1187, 2366, 2368, 22103, 22097, 22100]

    });

    const [watchlist, setwatchlist] = React.useState([

        ...groups["poisoned"],
        ...groups["godswords"], 
        ...groups["ballista"], 
        ...groups["zulrah"], 
        ...groups["spiderEggs"], 
        ...groups["hydraClaw"], 
        ...groups["kodaiWand"], 
        ...groups["boots"],
        ...groups["dragonShields"],
        ...groups["jewelry"], 
        ...groups["gems"],
        ...groups["herbsLow"],
        ...groups["herbsHigh"],
        ...groups["saplings"], 
        ...groups["crushables"], 
        ...groups["crystalKey"], 
        ...groups["dragonstone"], 
        ...groups["bandosTorva"],
        ...groups["armadylMasori"],
        ...groups["rings"],
        ...groups["dharok"],
        ...groups["guthan"],
        ...groups["torag"],
        ...groups["verac"],
        ...groups["karil"],
        ...groups["ahrim"],
        ...groups["spiritShields"],
        ...groups["wards"],
        ...groups["dragonCrossbow"],
        ...groups["staffOfLight"],
        ...groups["chainmace"],
        ...groups["muspah"],
        ...groups["webweaver"],
        ...groups["zaryteCrossbow"],
        ...groups["voidwaker"],
        ...groups["dragonArmor"]

    ]);

    const [items, setItems] = React.useState([]);

    const [prices, setPrices] = React.useState([]);

    const [volume, setVolume] = React.useState([]);

   
    useEffect(() => { 
        
        //Get Prices
        fetch("https://prices.runescape.wiki/api/v1/osrs/latest")
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            setPrices(data["data"]);

        })
        .catch(error => {
            console.error("Fetch error:", error);
        });

        //Get Items
        fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            let filtered = data.filter(item => watchlist.includes(item.id))

            filtered.forEach(item => {
                item.icon = item.icon.replace(/ /g, "_");
            });
            setItems(filtered);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });

        //Get Volume
        fetch("https://prices.runescape.wiki/api/v1/osrs/24h")
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            setVolume(data["data"]);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });

    }, []);

    const abbrLgNum = (number) => {

        if (Math.abs(number) >= 1000) {
          const sign = number < 0 ? '-' : ''; // Handle negative numbers
          const abbreviated = (Math.abs(number) / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 });
          return sign + abbreviated + 'k';
        } 
        
        else {
          return parseFloat(number).toFixed(0).toLocaleString();
        }

    };

    const abbrNum = (number) => {

        return parseFloat(number).toLocaleString('en-US', {maximumFractionDigits: 0});

    }

    const getName = (id) => {

        return items[items.findIndex((obj) => obj["id"] == id)]["name"];
        
    };

    const getIcon = (id) => {
        const itemIndex = items.findIndex((obj) => obj["id"] == id);
      
        if (itemIndex !== -1) {
          const urlPrefix = "https://oldschool.runescape.wiki/images/";
          const iconName = items[itemIndex]["icon"].replace(/ /g, "_");
          const imgURL = urlPrefix + iconName;
          return imgURL;
        } else {
          console.log("Item not found in mapping: " + id);
          return "https://oldschool.runescape.wiki/images/Inventory.png";
        }
      };
      
    const getAvg = (id) => {

        let highVolume = getHighVolume(id);
        let lowVolume = getLowVolume(id);
        let totalVolume = highVolume + lowVolume;

        let priceHigh = prices[id]["high"];
        let priceLow = prices[id]["low"];
        let highs = highVolume * priceHigh;
        let lows = lowVolume * priceLow;
        let total = (highs + lows) / totalVolume;

        return total;

    };

    const hardAvg = (id) => {

        return ((prices[id]["high"] + prices[id]["low"]) * 0.5);

    }

    const getHighVolume = (id) => {

        if (volume[id] == undefined) {

            return 0;

        }

        return volume[id]["highPriceVolume"]

    };

    const getLowVolume = (id) => {

        if (volume[id] == undefined) {

            return 0;

        }

        return volume[id]["lowPriceVolume"];

    };

    const adjustForTax = (value) => {

        // Calculate the tax (1% of the value)
        const tax = value * 0.01;

        // Limit the tax to 5,000,000 if it exceeds that amount
        const cappedTax = Math.min(tax, 5000000);
        
        // Calculate the final value with tax
        const finalValue = value - cappedTax;
        
        return finalValue;
    };

    const getTax = (value) => {
            
            // Calculate the tax (1% of the value)
            const tax = value * 0.01;
    
            // Limit the tax to 5,000,000 if it exceeds that amount
            const cappedTax = Math.min(tax, 5000000);
            
            return cappedTax;
    };

    const Analyze = (props) => {

        // <Analyze a={id: "1234", qty: "1"} b={id: "1234", qty: "1"} c={id: "1234", qty: "1"} d={id: "1234", qty: "1"} e={id: "1234", qty: "1"} r={id: "1234", qty: "1"} f="500000" />

        let blank = {"id": 0, "qty": 0, "name": "None", "icon": "https://oldschool.runescape.wiki/images/Inventory.png", "avg": 0, "high": 0, "low": 0, "highVolume": 0, "lowVolume": 0};

        const setupIngredient = (p) => {
           return {"id": p.id, "qty": p.qty, "name": getName(p.id), "icon": getIcon(p.id), "avg": getAvg(p.id), "high": prices[p.id]["high"], "low": prices[p.id]["low"], "highVolume": getHighVolume(p.id), "lowVolume": getLowVolume(p.id)}
        }

        let a = props.a ? setupIngredient(props.a) : blank;
        let b = props.b ? setupIngredient(props.b) : blank;
        let c = props.c ? setupIngredient(props.c) : blank;
        let d = props.d ? setupIngredient(props.d) : blank;
        let e = props.e ? setupIngredient(props.e) : blank;
        let r = props.r ? setupIngredient(props.r) : blank;

        let fee = props.f ? parseInt(props.f) : 0;

        let sale = r.avg * r.qty;
        let tax = getTax(sale);
        let gross = (sale) - ((a.avg * a.qty) + (b.avg * b.qty) + (c.avg * c.qty) + (d.avg * d.qty) + fee); 
        let net = gross - tax;

        const spanStyle = {fontWeight: "bold", color: net > 0 ? "var(--bs-success)" : "var(--bs-danger)"};
        const imgStyle = {transform: "scale(0.75)", imageRendering: "pixelated"};

        return (
            <>
            <table>

                <thead>
                    <tr>

                    </tr>
                </thead>

                <tbody style={{width: "100%"}}>
                    <tr style={{width: "100%"}}>
                        <td style={{border: "2px solid var(--bs-secondary)", textAlign: "left", width: "10%"}}><span style={spanStyle} title={`${abbrNum(tax)} Tax Applied`}>{abbrNum(net)}</span>&nbsp;gp:&nbsp;</td>
                        <td style={{border: "2px solid var(--bs-secondary)", textAlign: "left", width: "25%"}}><>{r["qty"] > 1 && (<>{abbrNum(r["qty"])} x </>)}<img src={r["icon"]} style={imgStyle} /><b title={abbrNum(r["avg"])}> {r["name"]}</b></></td>
                        <td style={{border: "2px solid var(--bs-secondary)", textAlign: "left", width: "55%"}}><>{a["qty"] > 1 && (<>{abbrNum(a["qty"])} x </>)}<img src={a["icon"]} style={imgStyle} /><b title={abbrNum(a["avg"])}> {a["name"]}</b></>
                            {props.b && <>&nbsp;<b>+</b>&nbsp;{c["qty"] > 1 && (<>{abbrNum(b["qty"])} x </>)}<img src={b["icon"]} style={imgStyle} /><b title={abbrNum(b["avg"])}> {b["name"]}</b></>}
                            {props.c && <>&nbsp;<b>+</b>&nbsp;{c["qty"] > 1 && (<>{abbrNum(c["qty"])} x </>)}<img src={c["icon"]} style={imgStyle} /><b title={abbrNum(c["avg"])}> {c["name"]}</b></>}
                            {props.d && <>&nbsp;<b>+</b>&nbsp;{d["qty"] > 1 && (<>{abbrNum(d["qty"])} x </>)}<img src={d["icon"]} style={imgStyle} /><b title={abbrNum(d["avg"])}> {d["name"]}</b></>}
                            {props.e && <>&nbsp;<b>+</b>&nbsp;{e["qty"] > 1 && (<>{abbrNum(e["qty"])} x </>)}<img src={e["icon"]} style={imgStyle} /><b title={abbrNum(e["avg"])}> {e["name"]}</b></>}                     
                            {fee > 0 && <>&nbsp;<b>+&nbsp;{abbrNum(fee)}gp</b></>}
                        </td>
                        <td style={{border: "2px solid var(--bs-secondary)", textAlign: "left", width: "10%"}}>
                            {!props.req && <span></span>}
                            {props.req && <span>{props.req}</span>}
                        </td>

                    </tr>
                </tbody>

            </table>
            </>
        );
    };

    const cellstyle = {padding: "4px", border: "2px solid var(--bs-secondary)", width: "20%", margin: "auto", textAlign: "center"};

    // const AnalysisTab = (props) => {

    //     return (

    //         <div className="accordion" id="accordionAnalysisTab">
    //             <div className="accordion-item">
    //                 <h2 className="accordion-header" id="headingOne">
    //                     <button style={{fontWeight: "bold", color: "var(--bs-primary)", backgroundColor: "var(--bs-accordion-bg)", height: "64px", marginTop: "8px", marginBottom: "0px", display: "flex", flexDirection: "row", alignItems: "center", border: "2px solid var(--bs-secondary)"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAnalysisTab">
    //                         <span style={{width: "192px"}}>Analysis</span> 
    //                     </button>

    //                 </h2>

    //                 <div id="collapseAnalysisTab" className="accordion-collapse collapse" data-bs-parent="#accordionAnalysisTab">
    //                     <div className="accordion-body">
                            
    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "817", qty: "1"}} r={{id: "811", qty: "1"}} />
    //                                 <Analyze a={{id: "816", qty: "1"}} r={{id: "810", qty: "1"}} />
    //                                 <Analyze a={{id: "13267", qty: "1"}} r={{id: "13265", qty: "1"}} />
    //                                 <Analyze a={{id: "13269", qty: "1"}} r={{id: "13265", qty: "1"}} />
    //                                 <Analyze a={{id: "13271", qty: "1"}} r={{id: "13265", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11810", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11802", qty: "1"}} />
    //                                 <Analyze a={{id: "11812", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11804", qty: "1"}} />
    //                                 <Analyze a={{id: "11814", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11806", qty: "1"}} />
    //                                 <Analyze a={{id: "11816", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11808", qty: "1"}} />
    //                                 <Analyze a={{id: "26370", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "26233", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "19607", qty: "1"}} b={{id: "19610", qty: "1"}} r={{id: "19481", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11791", qty: "1"}} b={{id: "12932", qty: "1"}} r={{id: "12902", qty: "1"}} />
    //                                 <Analyze a={{id: "11908", qty: "1"}} b={{id: "12932", qty: "1"}} r={{id: "12900", qty: "1"}} />
    //                                 <Analyze a={{id: "12922", qty: "1"}} r={{id: "12924", qty: "1"}} />
    //                                 <Analyze a={{id: "12927", qty: "1"}} r={{id: "12929", qty: "1"}} />
    //                                 <Analyze a={{id: "12922", qty: "1"}} r={{id: "12934", qty: "20000"}} />
    //                                 <Analyze a={{id: "12924", qty: "1"}} r={{id: "12934", qty: "20000"}} />
    //                                 <Analyze a={{id: "12927", qty: "1"}} r={{id: "12934", qty: "20000"}} />
    //                                 <Analyze a={{id: "12929", qty: "1"}} r={{id: "12934", qty: "20000"}} />
    //                                 <Analyze a={{id: "12932", qty: "1"}} r={{id: "12934", qty: "20000"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "23517", qty: "1"}} r={{id: "223", qty: "100"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "22966", qty: "1"}} b={{id: "11889", qty: "1"}} r={{id: "22978", qty: "1"}} />
    //                                 <Analyze a={{id: "11824", qty: "1"}} r={{id: "11889", qty: "1"}} f="150000" />
    //                                 <Analyze a={{id: "11824", qty: "1"}} r={{id: "11889", qty: "1"}} f="300000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "6914", qty: "1"}} b={{id: "21043", qty: "1"}} r={{id: "21006", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "20724", qty: "1"}} b={{id: "27616", qty: "150000"}} r={{id: "27641", qty: "1"}} />
    //                                 <Analyze a={{id: "27614", qty: "1"}} r={{id: "27616", qty: "50000"}} />
    //                                 <Analyze a={{id: "27614", qty: "5"}} r={{id: "27612", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11840", qty: "1"}} b={{id: "13231", qty: "1"}} r={{id: "13239", qty: "1"}} />
    //                                 <Analyze a={{id: "2577", qty: "1"}} b={{id: "13229", qty: "1"}} r={{id: "13237", qty: "1"}} />
    //                                 <Analyze a={{id: "6920", qty: "1"}} b={{id: "13227", qty: "1"}} r={{id: "13235", qty: "1"}} />
    //                                 <Analyze a={{id: "12598", qty: "1"}} b={{id: "22960", qty: "1"}} r={{id: "22954", qty: "1"}} />
    //                                 <Analyze a={{id: "23037", qty: "1"}} b={{id: "22957", qty: "1"}} r={{id: "22951", qty: "1"}} />
    //                                 <Analyze a={{id: "11836", qty: "1"}} b={{id: "21730", qty: "1"}} r={{id: "21733", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "2890", qty: "1"}} b={{id: "21637", qty: "1"}} r={{id: "21634", qty: "1"}} />
    //                                 <Analyze a={{id: "1540", qty: "1"}} b={{id: "11286", qty: "1"}} r={{id: "11284", qty: "1"}} />
    //                                 <Analyze a={{id: "1540", qty: "1"}} b={{id: "22006", qty: "1"}} r={{id: "22003", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "19541", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19553", qty: "1"}} />
    //                                 <Analyze a={{id: "19535", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19547", qty: "1"}} />
    //                                 <Analyze a={{id: "19532", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19544", qty: "1"}} />
    //                                 <Analyze a={{id: "19538", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19550", qty: "1"}} />
    //                                 <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19501", qty: "1"}} />
    //                                 <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19532", qty: "1"}} />
    //                                 <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19538", qty: "1"}} />
    //                                 <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19535", qty: "1"}} />
    //                                 <Analyze a={{id: "19501", qty: "1"}} b={{id: "1759", qty: "1"}} r={{id: "19541", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "6571", qty: "1"}} r={{id: "6573", qty: "1"}} />
    //                                 <Analyze a={{id: "19529", qty: "1"}} b={{id: "6573", qty: "1"}} r={{id: "19496", qty: "1"}} />
    //                                 <Analyze a={{id: "19496", qty: "1"}} r={{id: "19493", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "199", qty: "1"}} r={{id: "249", qty: "1"}} />
    //                                 <Analyze a={{id: "249", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "91", qty: "1"}} />
    //                                 <Analyze a={{id: "201", qty: "1"}} r={{id: "251", qty: "1"}} />
    //                                 <Analyze a={{id: "251", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "93", qty: "1"}} />
    //                                 <Analyze a={{id: "203", qty: "1"}} r={{id: "253", qty: "1"}} />
    //                                 <Analyze a={{id: "253", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "95", qty: "1"}} />
    //                                 <Analyze a={{id: "205", qty: "1"}} r={{id: "255", qty: "1"}} />
    //                                 <Analyze a={{id: "255", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "97", qty: "1"}} />
    //                                 <Analyze a={{id: "209", qty: "1"}} r={{id: "259", qty: "1"}} />
    //                                 <Analyze a={{id: "259", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "101", qty: "1"}} />
    //                                 <Analyze a={{id: "2485", qty: "1"}} r={{id: "2481", qty: "1"}} />
    //                                 <Analyze a={{id: "2481", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "2483", qty: "1"}} />
    //                                 <Analyze a={{id: "217", qty: "1"}} r={{id: "267", qty: "1"}} />
    //                                 <Analyze a={{id: "267", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "109", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "207", qty: "1"}} r={{id: "257", qty: "1"}} />
    //                                 <Analyze a={{id: "257", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "99", qty: "1"}} />
    //                                 <Analyze a={{id: "3049", qty: "1"}} r={{id: "2998", qty: "1"}} />
    //                                 <Analyze a={{id: "2998", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "3002", qty: "1"}} />
    //                                 <Analyze a={{id: "211", qty: "1"}} r={{id: "261", qty: "1"}} />
    //                                 <Analyze a={{id: "261", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "103", qty: "1"}} />
    //                                 <Analyze a={{id: "213", qty: "1"}} r={{id: "263", qty: "1"}} />
    //                                 <Analyze a={{id: "263", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "105", qty: "1"}} />
    //                                 <Analyze a={{id: "3051", qty: "1"}} r={{id: "3000", qty: "1"}} />
    //                                 <Analyze a={{id: "3000", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "3004", qty: "1"}} />
    //                                 <Analyze a={{id: "215", qty: "1"}} r={{id: "265", qty: "1"}} />
    //                                 <Analyze a={{id: "265", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "107", qty: "1"}} />
    //                                 <Analyze a={{id: "219", qty: "1"}} r={{id: "269", qty: "1"}} />
    //                                 <Analyze a={{id: "269", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "111", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "5315", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5373", qty: "1"}} />
    //                                 <Analyze a={{id: "5316", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5374", qty: "1"}} />
    //                                 <Analyze a={{id: "5314", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5372", qty: "1"}} />
    //                                 <Analyze a={{id: "22877", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "22866", qty: "1"}} />
    //                                 <Analyze a={{id: "5289", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5502", qty: "1"}} />
    //                                 <Analyze a={{id: "5288", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5501", qty: "1"}} />
    //                                 <Analyze a={{id: "22869", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "22856", qty: "1"}} />
    //                                 <Analyze a={{id: "22871", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "22859", qty: "1"}} />
    //                                 <Analyze a={{id: "21488", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "21480", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "5075", qty: "1"}} r={{id: "6693", qty: "1"}} />
    //                                 <Analyze a={{id: "237", qty: "1"}} r={{id: "235", qty: "1"}} />
    //                                 <Analyze a={{id: "1973", qty: "1"}} r={{id: "1975", qty: "1"}} />
    //                                 <Analyze a={{id: "9735", qty: "1"}} r={{id: "9736", qty: "1"}} />
    //                                 <Analyze a={{id: "26231", qty: "1"}} r={{id: "26368", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "987", qty: "1"}} b={{id: "985", qty: "1"}} r={{id: "989", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "2572", qty: "1"}} r={{id: "11980", qty: "1"}} />
    //                                 <Analyze a={{id: "1704", qty: "1"}} r={{id: "11978", qty: "1"}} />
    //                                 <Analyze a={{id: "11126", qty: "1"}} r={{id: "11972", qty: "1"}} />
    //                                 <Analyze a={{id: "11113", qty: "1"}} r={{id: "11968", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11832", qty: "1"}}  r={{id: "26394", qty: "3"}} />
    //                                 <Analyze a={{id: "11834", qty: "1"}}  r={{id: "26394", qty: "2"}} />
    //                                 <Analyze a={{id: "26376", qty: "1"}} b={{id: "26394", qty: "1"}} r={{id: "26382", qty: "1"}} />
    //                                 <Analyze a={{id: "26378", qty: "1"}} b={{id: "26394", qty: "2"}} r={{id: "26384", qty: "1"}} />
    //                                 <Analyze a={{id: "26380", qty: "1"}} b={{id: "26394", qty: "2"}} r={{id: "26386", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11826", qty: "1"}}  r={{id: "27269", qty: "1"}} />
    //                                 <Analyze a={{id: "11828", qty: "1"}}  r={{id: "27269", qty: "4"}} />
    //                                 <Analyze a={{id: "11830", qty: "1"}} r={{id: "27269", qty: "3"}} />
    //                                 <Analyze a={{id: "27226", qty: "1"}} b={{id: "27269", qty: "1"}} r={{id: "27235", qty: "1"}} />
    //                                 <Analyze a={{id: "27229", qty: "1"}} b={{id: "27269", qty: "4"}} r={{id: "27238", qty: "1"}} />
    //                                 <Analyze a={{id: "27232", qty: "1"}} b={{id: "27269", qty: "3"}} r={{id: "27241", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "6733", qty: "1"}} r={{id: "28298", qty: "1"}} />
    //                                 <Analyze a={{id: "6737", qty: "1"}} r={{id: "28295", qty: "1"}} />
    //                                 <Analyze a={{id: "6731", qty: "1"}} r={{id: "28304", qty: "1"}} />
    //                                 <Analyze a={{id: "6735", qty: "1"}} r={{id: "28301", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "4884", qty: "1"}} r={{id: "4716", qty: "1"}} f="37200" />
    //                                 <Analyze a={{id: "4896", qty: "1"}} r={{id: "4720", qty: "1"}} f="55800" />
    //                                 <Analyze a={{id: "4902", qty: "1"}} r={{id: "4722", qty: "1"}} f="49600" />
    //                                 <Analyze a={{id: "4890", qty: "1"}} r={{id: "4718", qty: "1"}} f="62000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "4980", qty: "1"}} r={{id: "4753", qty: "1"}} f="37200" />
    //                                 <Analyze a={{id: "4992", qty: "1"}} r={{id: "4757", qty: "1"}} f="55800" />
    //                                 <Analyze a={{id: "4998", qty: "1"}} r={{id: "4759", qty: "1"}} f="49600" />
    //                                 <Analyze a={{id: "4986", qty: "1"}} r={{id: "4755", qty: "1"}} f="62000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "4908", qty: "1"}} r={{id: "4724", qty: "1"}} f="37200" />
    //                                 <Analyze a={{id: "4920", qty: "1"}} r={{id: "4728", qty: "1"}} f="55800" />
    //                                 <Analyze a={{id: "4926", qty: "1"}} r={{id: "4730", qty: "1"}} f="49600" />
    //                                 <Analyze a={{id: "4914", qty: "1"}} r={{id: "4726", qty: "1"}} f="62000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "4932", qty: "1"}} r={{id: "4732", qty: "1"}} f="37200" />
    //                                 <Analyze a={{id: "4944", qty: "1"}} r={{id: "4736", qty: "1"}} f="55800" />
    //                                 <Analyze a={{id: "4950", qty: "1"}} r={{id: "4738", qty: "1"}} f="49600" />
    //                                 <Analyze a={{id: "4938", qty: "1"}} r={{id: "4734", qty: "1"}} f="62000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "4860", qty: "1"}} r={{id: "4708", qty: "1"}} f="37200" />
    //                                 <Analyze a={{id: "4872", qty: "1"}} r={{id: "4712", qty: "1"}} f="55800" />
    //                                 <Analyze a={{id: "4878", qty: "1"}} r={{id: "4714", qty: "1"}} f="49600" />
    //                                 <Analyze a={{id: "4866", qty: "1"}} r={{id: "4710", qty: "1"}} f="62000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "4956", qty: "1"}} r={{id: "4745", qty: "1"}} f="37200" />
    //                                 <Analyze a={{id: "4968", qty: "1"}} r={{id: "4749", qty: "1"}} f="55800" />
    //                                 <Analyze a={{id: "4974", qty: "1"}} r={{id: "4751", qty: "1"}} f="49600" />
    //                                 <Analyze a={{id: "4962", qty: "1"}} r={{id: "4747", qty: "1"}} f="62000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "12833", qty: "1"}} b={{id: "12829", qty: "1"}} r={{id: "12831", qty: "1"}} />
    //                                 <Analyze a={{id: "12823", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12821", qty: "1"}} />
    //                                 <Analyze a={{id: "12823", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12821", qty: "1"}} f="1500000" />
    //                                 <Analyze a={{id: "12827", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12825", qty: "1"}} />
    //                                 <Analyze a={{id: "12827", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12825", qty: "1"}} f="1500000" />
    //                                 <Analyze a={{id: "12819", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12817", qty: "1"}} />
    //                                 <Analyze a={{id: "12819", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12817", qty: "1"}} f="1500000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11928", qty: "1"}} b={{id: "11929", qty: "1"}} c={{id: "11930", qty: "1"}} r={{id: "11926", qty: "1"}} />
    //                                 <Analyze a={{id: "11931", qty: "1"}} b={{id: "11932", qty: "1"}} c={{id: "11933", qty: "1"}} r={{id: "11924", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "21918", qty: "1"}} b={{id: "21952", qty: "1"}} r={{id: "21921", qty: "1"}} />
    //                                 <Analyze a={{id: "21921", qty: "1"}} b={{id: "9438", qty: "1"}} r={{id: "21902", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11791", qty: "1"}} b={{id: "13256", qty: "1"}} r={{id: "22296", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "22542", qty: "1"}} b={{id: "27667", qty: "1"}} r={{id: "27657", qty: "1"}} />
    //                                 <Analyze a={{id: "22542", qty: "1"}} b={{id: "27667", qty: "1"}} r={{id: "27657", qty: "1"}} f="500000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "22547", qty: "1"}} b={{id: "27670", qty: "1"}} r={{id: "27652", qty: "1"}} />
    //                                 <Analyze a={{id: "22547", qty: "1"}} b={{id: "27670", qty: "1"}} r={{id: "27652", qty: "1"}} f="500000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "11785", qty: "1"}} b={{id: "26372", qty: "1"}} c={{id: "26231", qty: "250"}} r={{id: "26374", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "27684", qty: "1"}} b={{id: "27681", qty: "1"}} c={{id: "27687", qty: "1"}} r={{id: "27690", qty: "1"}} f="500000" />
    //                             </div>
    //                         </div>

    //                         <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
    //                             <div className="card-body text-primary">
    //                                 <Analyze a={{id: "3140", qty: "1"}} b={{id: "22103", qty: "1"}} c={{id: "22097", qty: "1"}} r={{id: "21892", qty: "1"}} />
    //                                 <Analyze a={{id: "1187", qty: "1"}} b={{id: "22100", qty: "1"}} c={{id: "22097", qty: "1"}} r={{id: "21895", qty: "1"}} />
    //                                 <Analyze a={{id: "2366", qty: "1"}} b={{id: "2368", qty: "1"}} r={{id: "1187", qty: "1"}} />
    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>

    //             </div>
    //         </div>

    //     );

    // }

    const ItemGroup = (props) => {

        return (
            <>

                <div className="accordion" id={`accordion${props.groupID}`}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button style={{fontWeight: "bold", color: "var(--bs-primary)", backgroundColor: "var(--bs-accordion-bg)", height: "64px", marginBottom: "0px", display: "flex", flexDirection: "row", alignItems: "center", border: "2px solid var(--bs-secondary)"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.groupID}`} aria-expanded="true" aria-controls={`#collapse${props.groupID}`}>
                            <span style={{width: "192px"}}>{props.title}</span> 

                            {props.group.map((item, index) => (
                                
                                <div title={getName(item)} key={index} style={{display: "flex", height: "48px", width: "48px", border: "1px solid var(--bs-secondary)", borderRadius: "16px", margin: "2px"}}>
                                    <img src={getIcon(item)} style={{transform: "scale(1.0)", imageRendering: "pixelated", margin: "auto"}} />
                                    <div style={{}}></div>
                                </div>
                            ))}

                        </button>
                        </h2>
                        <div id={`collapse${props.groupID}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={`#accordion${props.groupID}`}>
                            <div className="accordion-body">
                                <div className="card border-primary mb-3" style={{margin: "8px", width: "97.5%", overflow: "hidden"}}>
                                    <div className="card-body text-primary">

                                        {props.group == groups["poisoned"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "817", qty: "1"}} r={{id: "811", qty: "1"}} />
                                                <Analyze a={{id: "816", qty: "1"}} r={{id: "810", qty: "1"}} />
                                                <Analyze a={{id: "13267", qty: "1"}} r={{id: "13265", qty: "1"}} />
                                                <Analyze a={{id: "13269", qty: "1"}} r={{id: "13265", qty: "1"}} />
                                                <Analyze a={{id: "13271", qty: "1"}} r={{id: "13265", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["godswords"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11810", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11802", qty: "1"}} />
                                                <Analyze a={{id: "11812", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11804", qty: "1"}} />
                                                <Analyze a={{id: "11814", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11806", qty: "1"}} />
                                                <Analyze a={{id: "11816", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "11808", qty: "1"}} />
                                                <Analyze a={{id: "26370", qty: "1"}} b={{id: "11798", qty: "1"}} r={{id: "26233", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["ballista"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "19607", qty: "1"}} b={{id: "19610", qty: "1"}} r={{id: "19481", qty: "1"}} req="72 Fletching" />
                                            </div>
                                        )}

                                        {props.group == groups["zulrah"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11791", qty: "1"}} b={{id: "12932", qty: "1"}} r={{id: "12902", qty: "1"}} req="59 Crafting" />
                                                <Analyze a={{id: "11908", qty: "1"}} b={{id: "12932", qty: "1"}} r={{id: "12900", qty: "1"}} req="59 Crafting" />
                                                <Analyze a={{id: "12922", qty: "1"}} r={{id: "12924", qty: "1"}} req="53 Fletching" />
                                                <Analyze a={{id: "12927", qty: "1"}} r={{id: "12929", qty: "1"}} req="52 Crafting" />
                                                <Analyze a={{id: "12922", qty: "1"}} r={{id: "12934", qty: "20000"}} />
                                                <Analyze a={{id: "12924", qty: "1"}} r={{id: "12934", qty: "20000"}} />
                                                <Analyze a={{id: "12927", qty: "1"}} r={{id: "12934", qty: "20000"}} />
                                                <Analyze a={{id: "12929", qty: "1"}} r={{id: "12934", qty: "20000"}} />
                                                <Analyze a={{id: "12932", qty: "1"}} r={{id: "12934", qty: "20000"}} />
                                            </div>
                                        )}

                                        {props.group == groups["spiderEggs"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "23517", qty: "1"}} r={{id: "223", qty: "100"}} />
                                            </div>
                                        )}

                                        {props.group == groups["hydraClaw"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "22966", qty: "1"}} b={{id: "11889", qty: "1"}} r={{id: "22978", qty: "1"}} />
                                                <Analyze a={{id: "11824", qty: "1"}} r={{id: "11889", qty: "1"}} f="150000" />
                                                <Analyze a={{id: "11824", qty: "1"}} r={{id: "11889", qty: "1"}} f="300000" />
                                            </div>
                                        )}

                                        {props.group == groups["kodaiWand"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "6914", qty: "1"}} b={{id: "21043", qty: "1"}} r={{id: "21006", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["muspah"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "20724", qty: "1"}} b={{id: "27616", qty: "150000"}} r={{id: "27641", qty: "1"}} req="1 Magic" />
                                                <Analyze a={{id: "27614", qty: "1"}} r={{id: "27616", qty: "50000"}} />
                                                <Analyze a={{id: "27614", qty: "5"}} r={{id: "27612", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["boots"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11840", qty: "1"}} b={{id: "13231", qty: "1"}} r={{id: "13239", qty: "1"}} />
                                                <Analyze a={{id: "2577", qty: "1"}} b={{id: "13229", qty: "1"}} r={{id: "13237", qty: "1"}} />
                                                <Analyze a={{id: "6920", qty: "1"}} b={{id: "13227", qty: "1"}} r={{id: "13235", qty: "1"}} />
                                                <Analyze a={{id: "12598", qty: "1"}} b={{id: "22960", qty: "1"}} r={{id: "22954", qty: "1"}} />
                                                <Analyze a={{id: "23037", qty: "1"}} b={{id: "22957", qty: "1"}} r={{id: "22951", qty: "1"}} />
                                                <Analyze a={{id: "11836", qty: "1"}} b={{id: "21730", qty: "1"}} r={{id: "21733", qty: "1"}} />
                                                
                                            </div>
                                        )}

                                        {props.group == groups["dragonShields"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "2890", qty: "1"}} b={{id: "21637", qty: "1"}} r={{id: "21634", qty: "1"}} req="66 Smithing, 66 Magic" />
                                                <Analyze a={{id: "1540", qty: "1"}} b={{id: "11286", qty: "1"}} r={{id: "11284", qty: "1"}} req="90 Smithing" />
                                                <Analyze a={{id: "1540", qty: "1"}} b={{id: "22006", qty: "1"}} r={{id: "22003", qty: "1"}} req="90 Smithing" />
                                            </div>
                                        )}

                                        {props.group == groups["jewelry"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>   
                                                <Analyze a={{id: "19541", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19553", qty: "1"}} req="93 Magic" />
                                                <Analyze a={{id: "19535", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19547", qty: "1"}} req="93 Magic" />
                                                <Analyze a={{id: "19532", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19544", qty: "1"}} req="93 Magic" />
                                                <Analyze a={{id: "19538", qty: "1"}} b={{id: "564", qty: "1"}} c={{id: "566", qty: "20"}} d={{id: "565", qty: "20"}} r={{id: "19550", qty: "1"}} req="93 Magic" />
                                                <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19501", qty: "1"}} req="98 Crafting" />
                                                <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19532", qty: "1"}} req="95 Crafting" />
                                                <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19538", qty: "1"}} req="89 Crafting" />
                                                <Analyze a={{id: "19493", qty: "1"}} b={{id: "2357", qty: "1"}} r={{id: "19535", qty: "1"}} req="92 Crafting" />
                                                <Analyze a={{id: "19501", qty: "1"}} b={{id: "1759", qty: "1"}} r={{id: "19541", qty: "1"}} req="1 Crafting"/>
                                            </div>
                                        )}

                                        {props.group == groups["gems"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "6571", qty: "1"}} r={{id: "6573", qty: "1"}} req="67 Crafting" />
                                                <Analyze a={{id: "19529", qty: "1"}} b={{id: "6573", qty: "1"}} r={{id: "19496", qty: "1"}} req="70 Crafting" />
                                                <Analyze a={{id: "19496", qty: "1"}} r={{id: "19493", qty: "1"}} req="89 Crafting" />
                                            </div>
                                        )}   

                                        {props.group == groups["herbsLow"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "199", qty: "1"}} r={{id: "249", qty: "1"}} req="3 Herblore" />
                                                <Analyze a={{id: "249", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "91", qty: "1"}} req="3 Herblore" />
                                                <Analyze a={{id: "201", qty: "1"}} r={{id: "251", qty: "1"}} req="5 Herblore" />
                                                <Analyze a={{id: "251", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "93", qty: "1"}} req="5 Herblore" />
                                                <Analyze a={{id: "203", qty: "1"}} r={{id: "253", qty: "1"}} req="11 Herblore" />
                                                <Analyze a={{id: "253", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "95", qty: "1"}} req="11 Herblore" />
                                                <Analyze a={{id: "205", qty: "1"}} r={{id: "255", qty: "1"}} req="20 Herblore" />
                                                <Analyze a={{id: "255", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "97", qty: "1"}} req="20 Herblore" />
                                                <Analyze a={{id: "209", qty: "1"}} r={{id: "259", qty: "1"}} req="40 Herblore"/>
                                                <Analyze a={{id: "259", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "101", qty: "1"}} req="40 Herblore" />
                                                <Analyze a={{id: "2485", qty: "1"}} r={{id: "2481", qty: "1"}} req="67 Herblore" />
                                                <Analyze a={{id: "2481", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "2483", qty: "1"}} req="67 Herblore" />
                                                <Analyze a={{id: "217", qty: "1"}} r={{id: "267", qty: "1"}} req="70 Herblore" />
                                                <Analyze a={{id: "267", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "109", qty: "1"}} req="70 Herblore" />
                                            </div>
                                        )}

                                        {props.group == groups["herbsHigh"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>      
                                                <Analyze a={{id: "207", qty: "1"}} r={{id: "257", qty: "1"}} req="25 Herblore" />
                                                <Analyze a={{id: "257", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "99", qty: "1"}} req="25 Herblore" />
                                                <Analyze a={{id: "3049", qty: "1"}} r={{id: "2998", qty: "1"}} req="30 Herblore" />
                                                <Analyze a={{id: "2998", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "3002", qty: "1"}} req="30 Herblore" />
                                                <Analyze a={{id: "211", qty: "1"}} r={{id: "261", qty: "1"}} req="48 Herblore" />
                                                <Analyze a={{id: "261", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "103", qty: "1"}} req="48 Herblore" />
                                                <Analyze a={{id: "213", qty: "1"}} r={{id: "263", qty: "1"}} req="54 Herblore" />
                                                <Analyze a={{id: "263", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "105", qty: "1"}} req="54 Herblore"/>
                                                <Analyze a={{id: "3051", qty: "1"}} r={{id: "3000", qty: "1"}} req="59 Herblore" />
                                                <Analyze a={{id: "3000", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "3004", qty: "1"}} req="59 Herblore" />
                                                <Analyze a={{id: "215", qty: "1"}} r={{id: "265", qty: "1"}} req="65 Herblore" />
                                                <Analyze a={{id: "265", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "107", qty: "1"}} req="65 Herblore"/>
                                                <Analyze a={{id: "219", qty: "1"}} r={{id: "269", qty: "1"}} req="75 Herblore" />
                                                <Analyze a={{id: "269", qty: "1"}} b={{id: "227", qty: "1"}} r={{id: "111", qty: "1"}} req="75 Herblore" />
                                            </div>
                                        )}
                                        
                                        {props.group == groups["saplings"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "5315", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5373", qty: "1"}} />
                                                <Analyze a={{id: "5316", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5374", qty: "1"}} />
                                                <Analyze a={{id: "5314", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5372", qty: "1"}} />
                                                <Analyze a={{id: "22877", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "22866", qty: "1"}} />
                                                <Analyze a={{id: "5289", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5502", qty: "1"}} />
                                                <Analyze a={{id: "5288", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "5501", qty: "1"}} />
                                                <Analyze a={{id: "22869", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "22856", qty: "1"}} />
                                                <Analyze a={{id: "22871", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "22859", qty: "1"}} />
                                                <Analyze a={{id: "21488", qty: "1"}} b={{id: "5354", qty: "1"}} r={{id: "21480", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["crushables"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "5075", qty: "1"}} r={{id: "6693", qty: "1"}} />
                                                <Analyze a={{id: "237", qty: "1"}} r={{id: "235", qty: "1"}} />
                                                <Analyze a={{id: "1973", qty: "1"}} r={{id: "1975", qty: "1"}} />
                                                <Analyze a={{id: "9735", qty: "1"}} r={{id: "9736", qty: "1"}} />
                                                <Analyze a={{id: "26231", qty: "1"}} r={{id: "26368", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["crystalKey"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "987", qty: "1"}} b={{id: "985", qty: "1"}} r={{id: "989", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["dragonstone"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "2572", qty: "1"}} r={{id: "11980", qty: "1"}} />
                                                <Analyze a={{id: "1704", qty: "1"}} r={{id: "11978", qty: "1"}} />
                                                <Analyze a={{id: "11126", qty: "1"}} r={{id: "11972", qty: "1"}} />
                                                <Analyze a={{id: "11113", qty: "1"}} r={{id: "11968", qty: "1"}} />
                                            </div>
                                        )}
                                    
                                        {props.group == groups["bandosTorva"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11832", qty: "1"}}  r={{id: "26394", qty: "3"}} />
                                                <Analyze a={{id: "11834", qty: "1"}}  r={{id: "26394", qty: "2"}} />
                                                <Analyze a={{id: "26376", qty: "1"}} b={{id: "26394", qty: "1"}} r={{id: "26382", qty: "1"}} req="90 Smithing" />
                                                <Analyze a={{id: "26378", qty: "1"}} b={{id: "26394", qty: "2"}} r={{id: "26384", qty: "1"}} req="90 Smithing" />
                                                <Analyze a={{id: "26380", qty: "1"}} b={{id: "26394", qty: "2"}} r={{id: "26386", qty: "1"}} req="90 Smithing" />
                                            </div>
                                        )}                                       

                                        {props.group == groups["armadylMasori"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11826", qty: "1"}}  r={{id: "27269", qty: "1"}} />
                                                <Analyze a={{id: "11828", qty: "1"}}  r={{id: "27269", qty: "4"}} />
                                                <Analyze a={{id: "11830", qty: "1"}} r={{id: "27269", qty: "3"}} />
                                                <Analyze a={{id: "27226", qty: "1"}} b={{id: "27269", qty: "1"}} r={{id: "27235", qty: "1"}} req="90 Crafting" />
                                                <Analyze a={{id: "27229", qty: "1"}} b={{id: "27269", qty: "4"}} r={{id: "27238", qty: "1"}} req="90 Crafting" />
                                                <Analyze a={{id: "27232", qty: "1"}} b={{id: "27269", qty: "3"}} r={{id: "27241", qty: "1"}} req="90 Crafting" />
                                            </div>
                                        )}

                                        {props.group == groups["rings"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "6733", qty: "1"}} r={{id: "28298", qty: "1"}} req="80 Crafting" />
                                                <Analyze a={{id: "6737", qty: "1"}} r={{id: "28295", qty: "1"}} req="80 Crafting" />
                                                <Analyze a={{id: "6731", qty: "1"}} r={{id: "28304", qty: "1"}} req="80 Crafting" />
                                                <Analyze a={{id: "6735", qty: "1"}} r={{id: "28301", qty: "1"}} req="80 Crafting" />
                                            </div>
                                        )}

                                        {props.group == groups["dharok"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "4884", qty: "1"}} r={{id: "4716", qty: "1"}} f="37200" />
                                                <Analyze a={{id: "4896", qty: "1"}} r={{id: "4720", qty: "1"}} f="55800" />
                                                <Analyze a={{id: "4902", qty: "1"}} r={{id: "4722", qty: "1"}} f="49600" />
                                                <Analyze a={{id: "4890", qty: "1"}} r={{id: "4718", qty: "1"}} f="62000" />
                                            </div>
                                        )}

                                        {props.group == groups["verac"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "4980", qty: "1"}} r={{id: "4753", qty: "1"}} f="37200" />
                                                <Analyze a={{id: "4992", qty: "1"}} r={{id: "4757", qty: "1"}} f="55800" />
                                                <Analyze a={{id: "4998", qty: "1"}} r={{id: "4759", qty: "1"}} f="49600" />
                                                <Analyze a={{id: "4986", qty: "1"}} r={{id: "4755", qty: "1"}} f="62000" />
                                            </div>
                                        )}

                                        {props.group == groups["guthan"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "4908", qty: "1"}} r={{id: "4724", qty: "1"}} f="37200" />
                                                <Analyze a={{id: "4920", qty: "1"}} r={{id: "4728", qty: "1"}} f="55800" />
                                                <Analyze a={{id: "4926", qty: "1"}} r={{id: "4730", qty: "1"}} f="49600" />
                                                <Analyze a={{id: "4914", qty: "1"}} r={{id: "4726", qty: "1"}} f="62000" />
                                            </div>
                                        )}

                                        {props.group == groups["karil"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "4932", qty: "1"}} r={{id: "4732", qty: "1"}} f="37200" />
                                                <Analyze a={{id: "4944", qty: "1"}} r={{id: "4736", qty: "1"}} f="55800" />
                                                <Analyze a={{id: "4950", qty: "1"}} r={{id: "4738", qty: "1"}} f="49600" />
                                                <Analyze a={{id: "4938", qty: "1"}} r={{id: "4734", qty: "1"}} f="62000" />
                                            </div>
                                        )}

                                        {props.group == groups["ahrim"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "4860", qty: "1"}} r={{id: "4708", qty: "1"}} f="37200" />
                                                <Analyze a={{id: "4872", qty: "1"}} r={{id: "4712", qty: "1"}} f="55800" />
                                                <Analyze a={{id: "4878", qty: "1"}} r={{id: "4714", qty: "1"}} f="49600" />
                                                <Analyze a={{id: "4866", qty: "1"}} r={{id: "4710", qty: "1"}} f="62000" />
                                            </div>
                                        )}

                                        {props.group == groups["torag"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "4956", qty: "1"}} r={{id: "4745", qty: "1"}} f="37200" />
                                                <Analyze a={{id: "4968", qty: "1"}} r={{id: "4749", qty: "1"}} f="55800" />
                                                <Analyze a={{id: "4974", qty: "1"}} r={{id: "4751", qty: "1"}} f="49600" />
                                                <Analyze a={{id: "4962", qty: "1"}} r={{id: "4747", qty: "1"}} f="62000" />
                                            </div>
                                        )}
                                        
                                        {props.group == groups["spiritShields"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "12833", qty: "1"}} b={{id: "12829", qty: "1"}} r={{id: "12831", qty: "1"}} req="85 Prayer" />
                                                <Analyze a={{id: "12823", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12821", qty: "1"}} req="90 Prayer, 85 Smithing" />
                                                <Analyze a={{id: "12823", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12821", qty: "1"}} f="1500000"/>
                                                <Analyze a={{id: "12827", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12825", qty: "1"}} req="90 Prayer, 85 Smithing" />
                                                <Analyze a={{id: "12827", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12825", qty: "1"}} f="1500000" />
                                                <Analyze a={{id: "12819", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12817", qty: "1"}} req="90 Prayer, 85 Smithing" />
                                                <Analyze a={{id: "12819", qty: "1"}} b={{id: "12831", qty: "1"}} r={{id: "12817", qty: "1"}} f="1500000" />
                                            </div>
                                        )}

                                        {props.group == groups["wards"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11928", qty: "1"}} b={{id: "11929", qty: "1"}} c={{id: "11930", qty: "1"}} r={{id: "11926", qty: "1"}} />
                                                <Analyze a={{id: "11931", qty: "1"}} b={{id: "11932", qty: "1"}} c={{id: "11933", qty: "1"}} r={{id: "11924", qty: "1"}} />
                                            </div>    
                                        )}

                                        {props.group == groups["dragonCrossbow"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "21918", qty: "1"}} b={{id: "21952", qty: "1"}} r={{id: "21921", qty: "1"}} req="78 Fletching" />
                                                <Analyze a={{id: "21921", qty: "1"}} b={{id: "9438", qty: "1"}} r={{id: "21902", qty: "1"}} req="78 Fletching" />
                                                <Analyze a={{id: "21918", qty: "1"}} b={{id: "21952", qty: "1"}} c={{id: "9438", qty: "1"}} r={{id: "21902", qty: "1"}} req="78 Fletching" />
                                            </div>
                                        )}

                                        {props.group == groups["staffOfLight"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11791", qty: "1"}} b={{id: "13256", qty: "1"}} r={{id: "22296", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["chainmace"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "22542", qty: "1"}} b={{id: "27667", qty: "1"}} r={{id: "27657", qty: "1"}} req="85 Smithing" />
                                                <Analyze a={{id: "22542", qty: "1"}} b={{id: "27667", qty: "1"}} r={{id: "27657", qty: "1"}} f="500000" />
                                            </div>
                                        )}

                                        {props.group == groups["webweaver"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "22547", qty: "1"}} b={{id: "27670", qty: "1"}} r={{id: "27652", qty: "1"}} req="85 Fletching" />
                                                <Analyze a={{id: "22547", qty: "1"}} b={{id: "27670", qty: "1"}} r={{id: "27652", qty: "1"}} f="500000" />
                                            </div>
                                        )}

                                        {props.group == groups["zaryteCrossbow"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "11785", qty: "1"}} b={{id: "26372", qty: "1"}} c={{id: "26231", qty: "250"}} r={{id: "26374", qty: "1"}} />
                                            </div>
                                        )}

                                        {props.group == groups["voidwaker"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "27684", qty: "1"}} b={{id: "27681", qty: "1"}} c={{id: "27687", qty: "1"}} r={{id: "27690", qty: "1"}} f="500000" />
                                            </div>
                                        )}

                                        {props.group == groups["dragonArmor"] && (
                                            <div className="card border-primary mb-3" style={{padding: "8px"}}>
                                                <Analyze a={{id: "3140", qty: "1"}} b={{id: "22103", qty: "1"}} c={{id: "22097", qty: "1"}} r={{id: "21892", qty: "1"}} req="90 Smithing" />
                                                <Analyze a={{id: "1187", qty: "1"}} b={{id: "22100", qty: "1"}} c={{id: "22097", qty: "1"}} r={{id: "21895", qty: "1"}} req="75 Smithing" />
                                                <Analyze a={{id: "2366", qty: "1"}} b={{id: "2368", qty: "1"}} r={{id: "1187", qty: "1"}} req="60 Smithing" />
                                            </div>
                                        )}

                                        <table style={{width: "100%"}}>
                                            <thead>
                                                <tr>
                                                    <th style={cellstyle}>Icon</th>
                                                    <th style={cellstyle}>Item</th>
                                                    {/* <th style={cellstyle}>High</th> */}
                                                    <th style={cellstyle}>High/Low<br/>Price</th>
                                                    {/* <th style={cellstyle}>Average</th>
                                                    <th style={cellstyle}>Volume Weighted Average</th> */}
                                                    <th style={cellstyle}>Average/<br/>Volume Weighted Average</th>
                                                    {/* <th style={cellstyle}>Low</th> */}
                                                    {/* <th style={cellstyle}>24h High Price Volume</th>
                                                    <th style={cellstyle}>24h Low Price Volume</th> */}
                                                    <th style={cellstyle}>24h Volume<br/>High/Low</th>
                                                    <th style={cellstyle}>High/Low Price Spread % from Avg</th>
                                                    <th style={cellstyle}>High Alch Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, index) => (
                                                    <tr key={index}>
                                                        {props.group.includes(item.id) && (
                                                            <>
                                                                <td style={cellstyle}>
                                                                    <div title={`ID: ${item["id"]}\nExamine: ${item["examine"]}`} style={{border: "2px solid var(--bs-secondary)", borderRadius: "16px", width: "48px", height: "48px", margin: "auto"}}>
                                                                        <img src={`https://oldschool.runescape.wiki/images/${item.icon}`} style={{marginTop: "8px", transform: "scale(1.25)", imageRendering: "pixelated"}} />                                                                        
                                                                    </div>
                                                                </td>
                                                                <td style={cellstyle}>
                                                                    <a style={{color: "var(--bs-primary)", fontWeight: "bold"}} href={`https://oldschool.runescape.wiki/w/${item.name}`} target="_blank">{item.name}</a>
                                                                </td>
                                                                <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-success)"}}>
                                                                        {abbrNum(prices[item.id]["high"] != undefined && prices[item.id]["high"])}
                                                                    </span>
                                                                    <br />
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-danger)"}}>
                                                                        {abbrNum(prices[item.id]["low"] != undefined && prices[item.id]["low"])}
                                                                    </span>
                                                                </td>
                                                                <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-info)"}}>
                                                                        {abbrNum(hardAvg(item.id))}
                                                                    </span>
                                                                    <br />
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-info)"}}>
                                                                        {abbrNum(getAvg(item.id))}
                                                                    </span>
                                                                </td>
                                                                {/* <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-info)"}}>
                                                                        {abbrNum(getAvg(item.id))}
                                                                    </span>
                                                                </td> */}
                                                                {/* <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-danger)"}}>
                                                                        {abbrNum(prices[item.id]["low"] != undefined && prices[item.id]["low"])}
                                                                    </span>
                                                                </td> */}
                                                                <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-success)"}}>
                                                                        {abbrLgNum(getHighVolume(item.id) != undefined && getHighVolume(item.id))}
                                                                    </span>
                                                                    <br />
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-danger)"}}>
                                                                        {abbrLgNum(getLowVolume(item.id) != undefined && getLowVolume(item.id))}
                                                                    </span>
                                                                </td>
                                                                {/* <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-danger)"}}>
                                                                        {abbrLgNum(getLowVolume(item.id) != undefined && getLowVolume(item.id))}
                                                                    </span>
                                                                </td> */}
                                                                <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-primary)"}}>
                                                                        {/* {abbrNum(prices[item.id]["low"] != undefined && prices[item.id]["high"] - prices[item.id]["low"])},  */}
                                                                        {(((prices[item.id]["high"] - prices[item.id]["low"]) / ((prices[item.id]["high"] + prices[item.id]["low"]) / 2)) * 100).toFixed(2)}%
                                                                    </span>
                                                                </td>
                                                                <td style={cellstyle}>
                                                                    <span style={{fontWeight: "bold", color: "var(--bs-secondary)"}}>
                                                                        {abbrNum(item.highalch != undefined && item.highalch)}
                                                                    </span>
                                                                </td>
                                                                
                                                            </>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>                           
                             </div>
                        </div>
                    </div>
                    
                </div>

            </>
        );
    };


    const Timer = () => {
        const [seconds, setSeconds] = useState(0);
        const [hovered, setHovered] = useState(false);

        useEffect(() => {
            const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);

            // Clean up the timer when the component unmounts
            return () => clearInterval(timer);
        }, []);

        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        };

        const timerStyle = {
            position: 'fixed',
            bottom: '4px',
            right: '4px',
            background: hovered ? 'var(--bs-light)' : 'rgba(0, 0, 0, 0.0)',
            color: 'var(--bs-info)',
            borderRadius: '8px',
            zIndex: '1000',
            cursor: 'pointer',
            opacity: hovered ? '1' : '0.25', // Opacity change on hover
            transition: 'opacity 0.3s', // Opacity transition
        };

        return (
            <>
            <div
                style={timerStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => window.location.reload()}
            >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                <div
                    style={{
                    width: '32px',
                    height: '32px',
                    padding: '8px',
                    backgroundColor: 'rgba(0,0,0,0.0)',
                    }}
                >
                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>⟳</span>
                </div>
                <span>Updated {formatTime(seconds)} ago&nbsp;</span>
                </div>
            </div>
            </>
        );
    };

        
    return (
        <div>

            <Timer />

            {items && prices && volume && items.length != 0 && prices.length != 0 && volume.length != 0 && items != undefined && prices != undefined && volume != undefined && (
                
                <div style={{width: "98%"}}>

                    {/* <AnalysisTab /> */}
                    
                    <ItemGroup group={groups["boots"]} title={"Boots"} groupID="boots" />
                    <ItemGroup group={groups["godswords"]} title={"Godswords"} groupID="godswords" />
                    <ItemGroup group={groups["zulrah"]} title={"Zulrah"} groupID="zulrah" />
                    <ItemGroup group={groups["dharok"]} title={"Dharok's"} groupID="dharok" />
                    <ItemGroup group={groups["verac"]} title={"Verac's"} groupID="verac" />
                    <ItemGroup group={groups["guthan"]} title={"Guthan's"} groupID="guthan" />
                    <ItemGroup group={groups["torag"]} title={"Torag's"} groupID="torag" />
                    <ItemGroup group={groups["karil"]} title={"Karil's"} groupID="karil" />
                    <ItemGroup group={groups["ahrim"]} title={"Ahrim's"} groupID="ahrim" />
                    <ItemGroup group={groups["bandosTorva"]} title={"Bandos/Torva"} groupID="bandosTorva" />
                    <ItemGroup group={groups["armadylMasori"]} title={"Armadyl/Masori"} groupID="armadylMasori" />
                    <ItemGroup group={groups["dragonArmor"]} title={"Dragon Armor"} groupID="dragonArmor" />
                    <ItemGroup group={groups["spiritShields"]} title={"Spirit Shields"} groupID="spiritShields" />
                    <ItemGroup group={groups["wards"]} title={"Wards"} groupID="wards" />
                    <ItemGroup group={groups["dragonShields"]} title={"Dragon Shields"} groupID="dragonShields" />
                    <ItemGroup group={groups["poisoned"]} title={"Poisoned Items"} groupID="poisoned" />
                    <ItemGroup group={groups["rings"]} title={"Rings"} groupID="rings" />
                    <ItemGroup group={groups["muspah"]} title={"Muspah"} groupID="muspah" />
                    <ItemGroup group={groups["voidwaker"]} title={"Voidwaker"} groupID="voidwaker" />
                    <ItemGroup group={groups["hydraClaw"]} title={"Dragon Hunter Lance"} groupID="hydraClaw" />
                    <ItemGroup group={groups["chainmace"]} title={"Chainmace"} groupID="chainmace" />
                    <ItemGroup group={groups["ballista"]} title={"Heavy Ballista"} groupID="ballista" />
                    <ItemGroup group={groups["webweaver"]} title={"Webweaver"} groupID="webweaver" />
                    <ItemGroup group={groups["zaryteCrossbow"]} title={"Zaryte Crossbow"} groupID="zaryteCrossbow" />
                    <ItemGroup group={groups["dragonCrossbow"]} title={"Dragon Crossbow"} groupID="dragonCrossbow" />
                    <ItemGroup group={groups["staffOfLight"]} title={"Staff of Light"} groupID="staffOfLight" />
                    <ItemGroup group={groups["kodaiWand"]} title={"Kodai Wand"} groupID="kodaiWand" />
                    <ItemGroup group={groups["spiderEggs"]} title={"Red Spider Eggs"} groupID="spiderEggs" />
                    <ItemGroup group={groups["crystalKey"]} title={"Crystal Key"} groupID="crystalKey" />            
                    <ItemGroup group={groups["gems"]} title={"Gems"} groupID="gems" />
                    <ItemGroup group={groups["jewelry"]} title={"Jewelry"} groupID="jewelry" />
                    <ItemGroup group={groups["crushables"]} title={"Crushables"} groupID="crushables" />
                    <ItemGroup group={groups["dragonstone"]} title={"Dragonstone Items"} groupID="dragonstone" />
                    <ItemGroup group={groups["saplings"]} title={"Seeds/Saplings"} groupID="saplings" />
                    <ItemGroup group={groups["herbsLow"]} title={"Herbs (Low)"} groupID="herbsLow" />
                    <ItemGroup group={groups["herbsHigh"]} title={"Herbs (High)"} groupID="herbsHigh" /> 

                </div>
            )}
       
        </div>
    );
}
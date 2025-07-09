import bodyParser from "body-parser"
import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs",{fullname: null})
})

app.post("/submit",(req,res)=>{

    const adj = adjective[Math.floor(Math.random()*adjective.length)]
    const nun = noun[Math.floor(Math.random()*noun.length)]
    const fullnames = adj + " " + nun

    res.render("index.ejs",{fullname: fullnames})
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

const adjective = [
    "Agile", "Brave", "Clever", "Dynamic", "Elegant",
    "Fierce", "Gentle", "Happy", "Invisible", "Jolly",
    "Kind", "Lively", "Mighty", "Noble", "Optimistic",
    "Powerful", "Quick", "Radiant", "Silent", "Tough",
    "Unique", "Vibrant", "Wise", "Zesty", "Calm",
    "Daring", "Enchanted", "Fearless", "Gracious", "Humble",
    "Joyful", "Keen", "Legendary", "Magical", "Neat",
    "Open", "Pure", "Quiet", "Robust", "Strong",
    "Timeless", "Unstoppable", "Vast", "Warm", "Youthful",
    "Zealous", "Bold", "Smart", "Creative", "Honest",
    "Playful", "Savage", "Bright", "Curious", "Cheerful",
    "Epic", "Loyal", "Mysterious", "Crisp", "Fancy",
    "Heroic", "Intense", "Radiant", "Tricky", "Smooth",
    "Giant", "Witty", "Sincere", "Deep", "Frosty"
];

const noun = [
    "Falcon", "Phoenix", "River", "Storm", "Flame",
    "Breeze", "Thunder", "Cloud", "Mountain", "Ocean",
    "Star", "Sky", "Echo", "Shadow", "Crystal",
    "Light", "Wolf", "Tiger", "Panther", "Eagle",
    "Fox", "Tree", "Leaf", "Fire", "Ice",
    "Rock", "Code", "Circuit", "Pixel", "Signal",
    "Path", "Vision", "Mind", "Voice", "Spark",
    "Quest", "Dream", "Power", "Spirit", "Soul",
    "Wave", "Pulse", "Gear", "Sword", "Shield",
    "Flame", "Core", "Engine", "Beacon", "Orbit",
    "Journey", "Lantern", "Mirror", "Scroll", "Canyon",
    "Stone", "Compass", "Galaxy", "Dust", "Forge",
    "Cave", "Whirlwind", "Beacon", "Scroll", "Helmet",
    "Crown", "Dragon", "Rune", "Tower", "Portal"
];

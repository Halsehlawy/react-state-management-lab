import { useState } from "react";
import './App.css';
const App = () => {
  const [team,setTeam] = useState([])
  const [money,setMoney] = useState(100)
  const totalStrength = team.reduce((sum, member) => sum + member.strength, 0);
  const totalAgilitiy = team.reduce((sum, member) => sum + member.agility, 0);
  const [zombieFighters,setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])

const handleAddFighter = (selectedFighter)=>{
  if(money>=selectedFighter.price){
    const newTeamArray = [...team,selectedFighter];
    setZombieFighters(zombieFighters.filter(fighter => fighter.id !== selectedFighter.id));
    setTeam(newTeamArray);
    setMoney(money-selectedFighter.price);
  }else{
    console.log("You broke")
  }

}

const handleRemoveFighter = (selectedFighter)=>{
  const newZombieFighters = [...zombieFighters,selectedFighter]
  setZombieFighters(newZombieFighters)
  setTeam(team.filter(fighter=>fighter.id !== selectedFighter.id))
  setMoney(money+selectedFighter.price)
}
  return (
    <>
      <h2>Money: {money}</h2>
      <h2>Zombie Fighters</h2>
      <ul>
          {zombieFighters.map((zombieFighter)=>(
          <div key={zombieFighter.id}>  
            <img src={zombieFighter.img} alt="" />
            <li> {zombieFighter.name}</li>
            <li>price: {zombieFighter.price}</li>
            <li>strength: {zombieFighter.strength}</li>
            <li>agility: {zombieFighter.agility}</li>
            <button onClick={()=>handleAddFighter(zombieFighter)}>Add to team</button>
            <hr />
          </div>
          ))}
      </ul>
      <h2>Team: | Total Strength : {totalStrength} | Total Agility: {totalAgilitiy}</h2>
      {team.length ? null : <h3>Add some fighters to your team</h3> }
      <ul>
          {team.map((teamMember)=>(
          <div key={teamMember.id}>  
            <img src={teamMember.img} alt="" />
            <li> {teamMember.name}</li>
            <li>price: {teamMember.price}</li>
            <li>strength: {teamMember.strength}</li>
            <li>agility: {teamMember.agility}</li>
            <button onClick={()=>handleRemoveFighter(teamMember)}>Remove from team</button>
            <hr />
          </div>
          ))}
      </ul>
    </>
  );
}

export default App

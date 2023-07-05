import { FishCanvas } from './canvas';
import { dolphin, grass, unicorn } from "../assets/index.js";

const FishTank = () => {

  return (
    <section className="relative w-full mx-auto" style={{marginBottom: 150}}>
      <div style={{height: window.innerHeight/2}}>
      <FishCanvas/>
      </div>
      <img src={grass} alt={"grass"} style={{position: 'absolute', marginTop: - (window.innerHeight/2 - 200)}}/>
      <img src={unicorn} alt={"unicorn"} style={{position: 'absolute', marginTop: -320}}/>
      <img src={dolphin} alt={"dolphin"} style={{position: 'absolute', width: 150, marginTop: -520, marginLeft: '80%'}}/>
    </section>
  )
}

export default FishTank

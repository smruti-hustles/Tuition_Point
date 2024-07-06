import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use loadAll, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use loadFull, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use loadSlim, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use loadBasic, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {

const [init, setInit] = useState(false);
useEffect(() => {
initParticlesEngine(async (engine) => {

await loadSlim(engine);

}).then(() => {
setInit(true);
});
}, []);

const particlesLoaded = (container) => {
console.log(container);
};

const options = useMemo(
() => ({
background: {
color: {
value: "#ffffff",
},
},
fpsLimit: 120,
interactivity: {
events: {
onClick: {
enable: false,
mode: "repulse",
},
onHover: {
enable: true,
mode: 'grab',
},
},
modes: {
push: {
distance: 200,
duration: 15,
},
grab: {
distance: 150,
},
},
},
particles: {
color: {
value: "#ea580c",
},
links: {
color: "#ea580c",
distance: 150,
enable: true,
opacity: 0.3,
width: 1,
},
move: {
direction: "none",
enable: true,
outModes: {
default: "bounce",
},
random: true,
speed: 3,
straight: false,
},
number: {
density: {
enable: true,
},
value: 150,
},
opacity: {
value: 1.0,
},
shape: {
type: "square",
},
size: {
value: { min: 1, max: 3 },
},
},
detectRetina: true,
}),
[],
);

return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
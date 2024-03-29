import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const BG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                // color: {
                //     value: "#62B1F3",
                // },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 80,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 20,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 20,
                },
                opacity: {
                    value: 0.1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 10 },
                },
            },
            detectRetina: true,
        }}
    />
);
};

export default BG;

'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";
export default function Page() {
    useEffect(() => {
        var mousex = 0,
            mousey = 0,
            clx = 0,
            cly = 0,
            speed = 0.5;
        document.body.onmousemove = function (e) {
            mousex = e.clientX + window.scrollX;
            mousey = e.clientY + window.scrollY ?? 0;
        }


        document.querySelector("#headsec").onmouseleave = function () {
            // document.documentElement.style.setProperty("--ccurss", "0.8");
            document.documentElement.style.setProperty("--ccursh", "10px");
            document.documentElement.style.setProperty("--ccursw", "10px");
        }


        function setccurs() {
            clx += (mousex - clx) * speed;
            cly += (mousey - cly) * speed;

            // console.log(document.documentElement.style.getPropertyValue("--y"));
            document.documentElement.style.setProperty(
                '--x', (clx + "px")
            );
            document.documentElement.style.setProperty(
                '--y', (cly + "px")
            );
            requestAnimationFrame(setccurs)
        }
        setccurs();

    }, [])
    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <h2>
                    Case Studies
                </h2><br />
                <p>
                    At <b>My Monk Mindset</b>{`, we believe that transformation is more powerful when it’s shared. Our `}<b>Case Studies</b> showcase real journeys of individuals who have embraced the principles of mindfulness, discipline, and self-improvement to lead more fulfilling lives.
                </p>
                <br />
                <h3>{`What You’ll Find`}</h3>
                <ul>
                    <li>

                        - <b>Real Stories:</b> Dive into authentic experiences of people from diverse backgrounds who have implemented monk-like practices in their daily lives.
                    </li>
                    <li>

                        - <b>Actionable Insights:</b> Learn from their challenges, breakthroughs, and the strategies they used to overcome obstacles.
                    </li>
                    <li>

                        - <b>Measurable Impact:</b> See the tangible results they achieved in areas like mental clarity, productivity, relationships, and overall well-being.
                    </li>
                </ul>

                <h3>Why It Matters</h3>
                <p>
                    {`
                    Every journey is unique, but the principles of a monk mindset are universal. Our case studies are here to inspire you, showing that with the right mindset and practices, extraordinary growth is within your reach.
                    `}
                </p>

                <h3>Your Story Could Be Next</h3>
                <p>
                    {`
                If you’ve applied the monk mindset in your life and want to share your journey, we’d love to feature your story. Together, we can inspire more people to take the first step toward transformation.
                `}
                </p>

            </motion.div >
        </>
    )
}
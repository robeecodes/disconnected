import styled from "@emotion/styled";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Heart = styled.div({
  height: "2rem",
  aspectRatio: 1,
  clipPath: "shape(from 50% 91%,line to 90% 50%,arc to 50% 9% of 1%,arc to 10% 50% of 1%)",
  background: "red",
});

export const LikeWidget = ({ id, bpm }: { id: string; bpm: number }) => {
  const [likes, setLikes] = useState(0);

  const { contextSafe } = useGSAP(() => {});

  const beatHeart = contextSafe(() => {
    const heartTl = gsap.timeline();
    heartTl.to("#heart", { scale: 2, duration: 0.2 }).to("#heart", { scale: 1, duration: 0.2 });

    const likesTl = gsap.timeline();
    likesTl.to("#likes", { translateY: "0", duration: 0.3 }).to("#likes", { translateY: "2rem", duration: 0.1 });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      beatHeart();
      setLikes((prev) => prev + 1);
    }, bpm);

    return () => clearInterval(interval);
  }, [bpm]);

  return (
    <div
      id={id}
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5rem", textAlign: "center" }}
    >
      <p id="likes" style={{ transform: "translateY(2rem)", color: "white" }}>
        {likes}
      </p>
      <Heart id="heart" />
    </div>
  );
};

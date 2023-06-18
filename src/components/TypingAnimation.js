import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Web", "En Android", "En iOS", "En Windows", "En Linux", "De componentes"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;

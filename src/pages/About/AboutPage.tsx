import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>AboutPage</div>;
};

export default AboutPage;

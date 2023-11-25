import Content from "../components/content";
import { HomeStyle } from "../components/styles/Home.style";
import { Container } from "../components/styles/Container.style";
import Card from "../components/Card";

function LandingPage() {
  const content = Content.map((item) => <Card key={item.id} item={item} />);

  return (
    <HomeStyle>
      <svg>
        <text
          x="50%"
          y="50%"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Help us refind our services!
        </text>
      </svg>
      <Container>{content}</Container>
    </HomeStyle>
  );
}
export default LandingPage;

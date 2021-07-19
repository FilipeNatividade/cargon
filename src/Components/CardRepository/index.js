import StarIcon from "@material-ui/icons/Star";

import { Container } from "./style";

const CardRepository = ({ nameRepository, starRepository }) => {
  return (
    <Container>
      <h2>{nameRepository}</h2>
      <p>
        <StarIcon style={{ color: "#F5E234" }} />
        <span>{starRepository}</span>
      </p>
    </Container>
  );
};

export default CardRepository;

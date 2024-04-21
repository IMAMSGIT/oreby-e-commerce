import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";

const PoftheYear = () => {
  return (
    <section className="mt-[130px]">
      <Container>
        <Link>
          <Image
            source="images/photooftheYear.png"
            alt="Photo of the Year"
          ></Image>
        </Link>
      </Container>
    </section>
  );
};

export default PoftheYear;

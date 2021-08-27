import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://beian.miit.gov.cn"
          aria-label="京ICP备2021026964号"
        >
          京ICP备2021026964号
        </a>{" "}
        <p>
          <small className="text-muted">
            了解更多作品详情，请留言垂询。
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

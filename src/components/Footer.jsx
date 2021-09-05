import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://beian.miit.gov.cn"
          aria-label="京ICP备2021026964号"
        >
          京ICP备2021026964号
        </a>
        {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802035844"
          aria-label="京公网安备 11010802035844号"
        >
          <img src={process.env.PUBLIC_URL + "/beian.png"} alt="备案图标"/>
          京公网安备 11010802035844号
        </a>
        {" "}
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

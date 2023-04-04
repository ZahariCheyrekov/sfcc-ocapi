import useContentAsset from "../hooks/useContentAsset";

const Footer = () => {
  const { contentAsset } = useContentAsset("ocapi-footer-links");

  return (
    <footer className="bg-dark text-white w-100 position-fixed bottom-0 ">
      <div className="d-flex align-items-center justify-content-between w-75 m-auto">
        <section
          className="m-auto"
          dangerouslySetInnerHTML={{ __html: contentAsset }}
        ></section>
      </div>
    </footer>
  );
};

export default Footer;

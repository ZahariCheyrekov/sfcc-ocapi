import useContentAsset from "../hooks/useContentAsset";
import { FOOTER_LINKS_ASSET } from "../constants/content-assets";

const Footer = () => {
  const { contentAsset } = useContentAsset(FOOTER_LINKS_ASSET);

  return (
    <footer className="bg-dark text-white w-100 position-fixed bottom-0">
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

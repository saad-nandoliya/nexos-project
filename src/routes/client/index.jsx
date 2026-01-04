import AboutRoute from "./AboutRoute";
import ContactRoute from "./ContactRoute";
import DomesticRoute from "./DomesticRoute";
import ExportRoute from "./ExportRoutes";
import HomeRoute from "./HomeRoute";
import LeaderRoute from "./LeaderRoutes";
import ProdPortfolioRoute from "./ProdPortfolio";
import ProductsRoute from "./ProductsRoute";
import ServicesRoute from "./ServicesRoutes";

const index = () => {
  return (
    <div>
      <HomeRoute />
      <AboutRoute />
      <ContactRoute />
      <ProductsRoute />
      <ExportRoute />
      <DomesticRoute />
      <LeaderRoute />
      <ProdPortfolioRoute />
      <ServicesRoute />
    </div>
  );
};

export default index;

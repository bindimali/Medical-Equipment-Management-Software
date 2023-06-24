import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../components/Common/ChartsDynamicColor";

const SalesAnalytics = ({ dataColors }) => {
  const apexsalesAnalyticsChartColors = getChartColorsArray(dataColors);
  const series = [56, 26];
  const options = {
    labels: ["Reselling Products", "Ancillary Products"],
    colors: apexsalesAnalyticsChartColors,
    legend: { show: !1 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Col xl="12">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Product Analytics</h4>

            <div>
              <div id="donut-chart">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="donut"
                  height={260}
                  className="apex-charts"
                />
              </div>
            </div>

            <div className="text-center text-muted">
              <Row>
                <Col xs="6">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-primary me-1" /> Reselling Products
                    </p>
                    {/* <h5>$ 2,132</h5> */}
                  </div>
                </Col>
                <Col xs="6">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-success me-1" />Ancillary Products
                    </p>
                    {/* <h5>$ 1,763</h5> */}
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default SalesAnalytics;

import { Component } from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Karbonhidrat", "Protein", "Yağ"],
      },
      series: props.data,
    };
  }

  render() {
    return (
      <div className="pie">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="380"
        />
      </div>
    );
  }
}

export default PieChart;

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
};

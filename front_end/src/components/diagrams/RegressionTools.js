import React from "react";
import BarChart from "recharts/es6/chart/BarChart";
import Bar from "recharts/es6/cartesian/Bar"
import Line from "recharts/es6/cartesian/Line";
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import AreaChart from "recharts/es6/chart/AreaChart";
import XAxis from "recharts/es6/cartesian/XAxis";
import YAxis from "recharts/es6/cartesian/YAxis";
import CartesianGrid from "recharts/es6/cartesian/CartesianGrid";
import Tooltip from "recharts/es6/component/Tooltip";
import ReferenceLine from "recharts/es6/cartesian/ReferenceLine";
import Area from "recharts/es6/cartesian/Area";
import Legend from "recharts/es6/component/Legend";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles/index";
import withTheme from "@material-ui/core/es/styles/withTheme";
import regression from "../../../node_modules/regression";


let convertDataToRegressionFormat = function (data, graph) {
    let converted = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][graph] == null) break;
        converted[i] = [i + 1, data[i][graph]];
    }
    return converted;
};

let getBestRegression = function (data, graph) {
    const converted = convertDataToRegressionFormat(data, graph);

    const resultLinear = regression.linear(converted);
    resultLinear.type = "linear";
    const resultSquared = regression.polynomial(converted, {order: 2});
    resultSquared.type = "square";
    const resultCubed = regression.polynomial(converted, {order: 3});
    resultCubed.type = "cube";
    const resultLogarithmic = regression.logarithmic(converted);
    resultLogarithmic.type = "logarithm";
    const resultExponential = regression.exponential(converted);
    resultExponential.type = "exponential";
    const resultPower = regression.power(converted);
    resultPower.type = "power";

    let result;
    let maximumR2 = 0;
    if (resultLinear.r2 > maximumR2) result = resultLinear;
    if (resultSquared.r2 > maximumR2) result = resultSquared;
    if (resultCubed.r2 > maximumR2) result = resultCubed;
    if (resultLogarithmic.r2 > maximumR2) result = resultLogarithmic;
    // if (resultExponential.r2 > maximumR2) result = resultExponential;
    // if (resultPower.r2 > maximumR2) result = resultPower;

    return result;
};

let addRegression = function (data, graph, predict) {
    let lengthToCover = predict;
    for (let i = 0; i < data.length; i++) {
        if (data[i][graph] == null) break;
        lengthToCover++;
    }
    let result = getBestRegression(data, graph);
    for (let i = 1; i < lengthToCover; i++) {
        if (data[i] == null) data[i] = {};
        data[i][graph + "_regression"] = result.predict(i + 1)[1];
        if (data[i][graph] != null) {
            data[i][graph + "_regression"] = null;
            if (data[i + 1] == null || data[i + 1][graph] == null )
                data[i][graph + "_regression"] = data[i][graph];
        }
    }
    return result;
};

export default addRegression;



import React, { Component } from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Graph extends Component {

    constructor(props) {
        super(props)
        this.state = props.state

        var facturas = []
        for (let i = 0; i < this.state.facturas[0].length; i++) {
            facturas.push({label: this.state.facturas[0][i].fecha_expedicion, 
                                y: this.state.facturas[0][i].consumo_energia})
            if(i === 5) break
        }

        this.facturas = facturas.reverse()
        console.log(this.state)
    }

    render() {

        const options = {
            widht: 100,
            height: 375,
            animationEnabled: true,
            theme: "light2",

			title: {
				text: "Tus últimos consumos",
                fontSize: 22
			},
            axisY: {
                title: "Consumo",
                includeZero: true,
                labelFormatter: this.addSymbols
            },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                // dataPoints: this.facturas
				dataPoints: [
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  },
                    { label: "Grape",  y: 28  }
				]
			}
			]
		}

        return (
        <div>
            <CanvasJSChart options = {options}
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        );
    }

    addSymbols(e){
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
}

export default Graph;                              

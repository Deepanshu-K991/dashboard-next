(function () {
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function () {
        setTimeout(function () {
            toastr.options = {
                positionClass: "toast-top-left",
                closeButton: true,
                progressBar: true,
                showMethod: "slideDown",
                timeOut: 5000
            };
            toastr.info("Multipurpose Admin Template", "Hi, welcome to Metrical");
        }, 300);

        var annualReport = document.getElementById("annualReport");
        if (annualReport) {
            new Chart(annualReport, {
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            label: "Sales Report",
                            data: [5, 15, 5, 20, 15, 25],
                            backgroundColor: "rgba(0, 204, 204, .2)",
                            borderWidth: 1,
                            fill: true
                        },
                        {
                            label: "Annual Revenue",
                            data: [10, 10, 15, 5, 20, 15],
                            backgroundColor: "rgba(248, 127, 186, .2)",
                            borderWidth: 1,
                            fill: true
                        },
                        {
                            label: "Total Profit",
                            data: [15, 5, 15, 10, 25, 20],
                            backgroundColor: "rgba(152, 194, 252, .2)",
                            borderWidth: 1,
                            fill: true
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: "#8392a5"
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: "#8392a5" },
                            max: 25
                        },
                        x: {
                            ticks: { color: "#8392a5" }
                        }
                    }
                }
            });
        }

        window.Apex = {
            stroke: { width: 1 },
            markers: { size: 0 },
            tooltip: { fixed: { enabled: true } }
        };

        function shuffle(arr) {
            var array = arr.slice();
            var m = array.length, t, i;
            while (m) {
                i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }

        var sparkData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

        var salesSparkConfigs = [
            { selector: "#salesSpark1", color: "#04CAD0" },
            { selector: "#salesSpark2", color: "#4285F4" },
            { selector: "#salesSpark3", color: "#EE8CE5", crosshairs: true }
        ];

        salesSparkConfigs.forEach(function (cfg, idx) {
            var options = {
                chart: {
                    type: "area",
                    height: 60,
                    fontFamily: "IBM Plex Sans, sans-serif",
                    foreColor: "#8392a5",
                    sparkline: { enabled: true }
                },
                stroke: { curve: "straight" },
                fill: { opacity: 0.3 },
                series: [{ data: shuffle(sparkData) }],
                yaxis: { min: 0 },
                colors: [cfg.color]
            };
            if (cfg.crosshairs) {
                options.xaxis = { crosshairs: { width: 1 } };
            }
            var el = document.querySelector(cfg.selector);
            if (el) new ApexCharts(el, options).render();
        });

        var orderSparkConfigs = [
            { selector: "#orderSpark1", color: "#EE8CE5" },
            { selector: "#orderSpark2", color: "#4285F4" },
            { selector: "#orderSpark3", color: "#04CAD0", crosshairs: true }
        ];

        orderSparkConfigs.forEach(function (cfg) {
            var options = {
                chart: {
                    type: "area",
                    height: 60,
                    fontFamily: "IBM Plex Sans, sans-serif",
                    foreColor: "#8392a5",
                    sparkline: { enabled: true }
                },
                stroke: { curve: "straight" },
                fill: { opacity: 0.3 },
                series: [{ data: shuffle(sparkData) }],
                yaxis: { min: 0 },
                colors: [cfg.color]
            };
            if (cfg.crosshairs) {
                options.xaxis = { crosshairs: { width: 1 } };
            }
            var el = document.querySelector(cfg.selector);
            if (el) new ApexCharts(el, options).render();
        });

        var revenueSparkConfigs = [
            { selector: "#revenueSpark1", color: "#4285F4" },
            { selector: "#revenueSpark2", color: "#EE8CE5" },
            { selector: "#revenueSpark3", color: "#04CAD0", crosshairs: true }
        ];

        revenueSparkConfigs.forEach(function (cfg) {
            var options = {
                chart: {
                    type: "area",
                    height: 60,
                    fontFamily: "IBM Plex Sans, sans-serif",
                    foreColor: "#8392a5",
                    sparkline: { enabled: true }
                },
                stroke: { curve: "straight" },
                fill: { opacity: 0.3 },
                series: [{ data: shuffle(sparkData) }],
                yaxis: { min: 0 },
                colors: [cfg.color]
            };
            if (cfg.crosshairs) {
                options.xaxis = { crosshairs: { width: 1 } };
            }
            var el = document.querySelector(cfg.selector);
            if (el) new ApexCharts(el, options).render();
        });

        var barChartOptions = {
            chart: {
                height: 330,
                type: "bar",
                fontFamily: "IBM Plex Sans, sans-serif",
                foreColor: "#8392a5"
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "50%"
                }
            },
            dataLabels: { enabled: false },
            stroke: { show: true, width: 2, colors: ["transparent"] },
            series: [
                { name: "Net Profit", data: [44, 55, 57, 56, 61, 58] },
                { name: "Revenue", data: [76, 85, 101, 98, 87, 105] },
                { name: "Free Cash Flow", data: [35, 41, 36, 26, 45, 48] }
            ],
            colors: ["#66a4fb", "#e4eaff", "#65e0e0"],
            xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
            yaxis: { title: { text: "$ (thousands)" } },
            fill: { opacity: 1 },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    }
                }
            }
        };

        var barChartEl = document.querySelector("#salesRevenueBarChart");
        if (barChartEl) new ApexCharts(barChartEl, barChartOptions).render();
    });
})();
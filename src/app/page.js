"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
// Chart libraries are dynamically imported in effects to avoid SSR issues

const Sidebar = dynamic(() => import("./components/Sidebar"), { ssr: true });
const Header = dynamic(() => import("./components/Header"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });

export default function Home() {
    const annualReportCanvasRef = useRef(null);
    const salesSparkRefs = [useRef(null), useRef(null), useRef(null)];
    const orderSparkRef = useRef(null);
    const revenueSparkRef = useRef(null);
    const barChartRef = useRef(null);

    useEffect(() => {
        let cleanupFn = () => { };
        const run = async () => {
            const chartJs = await import("chart.js");
            const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Legend, Tooltip } = chartJs;
            Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Legend, Tooltip);

            // Annual Report - Chart.js
            const canvasEl = annualReportCanvasRef.current;
            let annualReportChart;
            if (canvasEl) {
                const ctx = canvasEl.getContext("2d");
                annualReportChart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            { label: "Sales Report", data: [5, 15, 5, 20, 15, 25], backgroundColor: "rgba(0, 204, 204, .2)", borderWidth: 1, fill: true },
                            { label: "Annual Revenue", data: [10, 10, 15, 5, 20, 15], backgroundColor: "rgba(248, 127, 186, .2)", borderWidth: 1, fill: true },
                            { label: "Total Profit", data: [15, 5, 15, 10, 25, 20], backgroundColor: "rgba(152, 194, 252, .2)", borderWidth: 1, fill: true }
                        ]
                    },
                    options: {
                        plugins: { legend: { display: true, labels: { color: "#8392a5" } } },
                        scales: {
                            y: { beginAtZero: true, ticks: { color: "#8392a5" }, max: 25 },
                            x: { ticks: { color: "#8392a5" } }
                        }
                    }
                });
            }

            // Helper to build small sparkline areas with ApexCharts
            const sparkData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
            const shuffle = (arr) => {
                const a = arr.slice();
                for (let m = a.length; m;) {
                    const i = Math.floor(Math.random() * m--);
                    const t = a[m];
                    a[m] = a[i];
                    a[i] = t;
                }
                return a;
            };

            const apexModule = await import("apexcharts");
            const ApexCharts = apexModule.default || apexModule;
            const sparkCreate = (el, color, withCrosshairs) => {
                if (!el) return null;
                const opts = {
                    chart: { type: "area", height: 60, fontFamily: "IBM Plex Sans, sans-serif", foreColor: "#8392a5", sparkline: { enabled: true } },
                    stroke: { curve: "straight" },
                    fill: { opacity: 0.3 },
                    series: [{ data: shuffle(sparkData) }],
                    yaxis: { min: 0 },
                    colors: [color]
                };
                if (withCrosshairs) opts.xaxis = { crosshairs: { width: 1 } };
                const chart = new ApexCharts(el, opts);
                chart.render();
                return chart;
            };

            const salesSparks = [
                sparkCreate(salesSparkRefs[0].current, "#04CAD0", false),
                sparkCreate(salesSparkRefs[1].current, "#4285F4", false),
                sparkCreate(salesSparkRefs[2].current, "#EE8CE5", true)
            ];

            const orderSpark = sparkCreate(orderSparkRef.current, "#EE8CE5", false);
            const revenueSpark = sparkCreate(revenueSparkRef.current, "#4285F4", false);

            // Main bar chart
            let barChart;
            if (barChartRef.current) {
                const options = {
                    chart: { height: 330, type: "bar", fontFamily: "IBM Plex Sans, sans-serif", foreColor: "#8392a5" },
                    plotOptions: { bar: { horizontal: false, columnWidth: "50%" } },
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
                    tooltip: { y: { formatter: (val) => `$ ${val} thousands` } }
                };
                barChart = new ApexCharts(barChartRef.current, options);
                barChart.render();
            }

            cleanupFn = () => {
                if (annualReportChart) annualReportChart.destroy();
                salesSparks.forEach((c) => c && c.destroy());
                if (orderSpark) orderSpark.destroy();
                if (revenueSpark) revenueSpark.destroy();
                if (barChart) barChart.destroy();
            };
        };

        run();
        return () => cleanupFn();
    }, []);

    return (
        <div className="page-container">
            <div className="page-sidebar">
                <Sidebar />
            </div>
            <div className="page-content">
                <div className="page-header">
                    <Header />
                </div>
                <div className="page-inner">
                    <div id="main-wrapper">
                        {/* Setting Sidebar (matches light/index.html structure) */}
                        <div className="setting-sidebar" id="settingSidebar">
                            <div className="wrapper" id="settingSidebarScroll">
                                <ul className="nav nav-tabs nav-pills nav-fill">
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-notifications">Notifications</a></li>
                                    <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#nav-activity">Activity</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-setting">Setting</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade" id="nav-notifications">
                                        <div className="card-activities mg-t-40-force">
                                            <div className="media-list">
                                                <div className="media pd-b-30"><div className="activity-icon bg-primary op-6"><i className="icon ion-stats-bars"></i></div><div className="ml-3 align-items-center"><h6 className="tx-13 tx-dark">Report has been updated</h6><p className="tx-12 mb-0">Aenean vulputate eleifend tellus ligula, porttitor.</p><span className="small">05:00 PM Sun, 02 Feb 2019</span></div></div>
                                                <div className="media pd-b-30"><div className="activity-icon bg-success op-6"><i className="icon ion-trophy"></i></div><div className="ml-3 align-items-center"><h6 className="tx-13 tx-dark">Achievement Unlocked</h6><p className="tx-12 mb-0">Aenean vulputate eleifend tellus ligula, porttitor.</p><span className="small">05:00 PM Sun, 02 Feb 2019</span></div></div>
                                                <div className="media pd-b-30"><div className="activity-icon bg-purple op-6"><i className="icon ion-image"></i></div><div className="ml-3 align-items-center"><h6 className="tx-13 tx-dark">Added new images</h6><p className="tx-12 mb-0">Aenean vulputate eleifend tellus ligula, porttitor.</p><span className="small">05:00 PM Sun, 02 Feb 2019</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade active show" id="nav-activity">
                                        <div className="activity mg-t-40-force">
                                            <i className="icon-check bg-soft-primary"></i>
                                            <div className="time-item"><div className="item-info "><div className="d-flex justify-content-between align-items-center"><h6 className="tx-dark tx-13 mb-0">Task finished</h6><span className="small">02 Feb 2019</span></div><p className="mt-2 tx-12 mg-b-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><div><span className="badge bg-soft-primary tx-uppercase">Design</span> <span className="badge bg-soft-danger  tx-uppercase">HTML</span> <span className="badge bg-soft-success  tx-uppercase">Css</span> <span className="badge bg-soft-teal  tx-uppercase">Dashboard</span></div></div></div>
                                            <i className="icon-check bg-soft-teal"></i>
                                            <div className="time-item"><div className="item-info "><div className="d-flex justify-content-between align-items-center"><h6 className="tx-dark tx-13 mb-0">Video conference</h6><span className="small">04 Feb 2019</span></div><p className="mt-2 tx-12 mg-b-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><div><span className="badge bg-soft-primary tx-uppercase">Design</span> <span className="badge bg-soft-danger  tx-uppercase">HTML</span> <span className="badge bg-soft-success  tx-uppercase">Css</span> <span className="badge bg-soft-teal  tx-uppercase">Dashboard</span></div></div></div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-setting">
                                        <h5 className="tx-dark tx-13 tx-semibold mg-t-30">Notification Setting</h5>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between mg-y-20"><span>Notify when receive email</span><input type="checkbox" defaultChecked data-toggle="toggle" data-size="xs" data-onstyle="primary" /></li>
                                            <li className="d-flex justify-content-between mg-y-20"><span>Receive calls in meeting</span><input type="checkbox" data-toggle="toggle" data-size="xs" data-onstyle="primary" /></li>
                                            <li className="d-flex justify-content-between mg-y-20"><span>Update on task completion</span><input type="checkbox" defaultChecked data-toggle="toggle" data-size="xs" data-onstyle="primary" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Sidebar (matches light/index.html structure) */}
                        <div className="setting-sidebar" id="demoSettingSidebar">
                            <div className="wrapper" id="demoSettingSidebarScroll">
                                <a className="demo-settings-icon" id="demoSettingSidebarTrigger" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="icon-settings tx-16"></i>
                                </a>
                                <ul className="nav nav-tabs nav-pills nav-fill">
                                    <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#nav-dashboard">Dashboard</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-frontend">Frontend</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="nav-dashboard">
                                        <div className="mg-y-30 tx-center bd">
                                            <h5 className="tx-dark tx-13 pd-y-10 bd-b mb-0">Default Version</h5>
                                            <img src="/assets/images/demo/dashboard/index1.png" alt="" className="img-fluid d-block m-auto" />
                                            <span className="d-block pd-10 bd-t"><a href="http://colorlib.net/metrical/light/index.html" target="_blank" className="btn btn-sm btn-primary">Live Preview</a></span>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-frontend">
                                        <div className="mg-y-30 tx-center bd">
                                            <h5 className="tx-dark tx-13 pd-y-10 bd-b mb-0">Ecommerce</h5>
                                            <img src="/assets/images/demo/frontend/coming-soon.png" alt="" className="img-fluid d-block m-auto" />
                                            <span className="d-block pd-10 bd-t"><a href="http://colorlib.net/metrical/templates/ecommerce/index.html" target="_blank" className="btn btn-sm btn-primary">Live Preview</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageheader pd-t-25 pd-b-35">
                            <div className="pd-t-5 pd-b-5">
                                <h1 className="pd-0 mg-0 tx-20">Sales Monitoring</h1>
                            </div>
                            <div className="breadcrumb pd-0 mg-0">
                                <a className="breadcrumb-item" href="/"><i className="icon ion-ios-home-outline"></i> Home</a>
                                <a className="breadcrumb-item" href="">Dashboard</a>
                                <span className="breadcrumb-item active">Sales Monitoring</span>
                            </div>
                        </div>

                        <div className="row row-xs clearfix">
                            {[
                                { label: 'Today Orders', icon: 'icon-screen-desktop', value: '$5,300', delta: '+451', deltaClass: 'text-success' },
                                { label: 'Today Earnings', icon: 'icon-diamond', value: '$1,500', delta: '-310', deltaClass: 'text-danger' },
                                { label: 'Product Sold', icon: 'icon-handbag', value: '$4,900', delta: '+350', deltaClass: 'text-success' },
                                { label: 'Total Earnings', icon: 'icon-speedometer', value: '$9,900', delta: '+130', deltaClass: 'text-danger' },
                            ].map((c, i) => (
                                <div className="col-sm-6 col-xl-3" key={i}>
                                    <div className="card mg-b-20">
                                        <div className="card-body pd-y-0">
                                            <div className="custom-fieldset mb-4">
                                                <div className="clearfix"><label>{c.label}</label></div>
                                                <div className="d-flex align-items-center text-dark">
                                                    <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-warning">
                                                        <i className={`${c.icon} tx-20`}></i>
                                                    </div>
                                                    <div>
                                                        <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">{c.value}<small className="tx-15">.50</small></h2>
                                                        <div className="d-flex align-items-center tx-gray-500"><span className={`${c.deltaClass} mr-2 d-flex align-items-center`}><i className="ion-android-arrow-up mr-1"></i>{c.delta}</span>avg. sales</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row row-xs clearfix">
                            <div className="col-lg-12 col-xl-8 col-12">
                                <div className="card mg-b-20">
                                    <div className="card-header">
                                        <h4 className="card-header-title">Annual Reports</h4>
                                        <div className="card-header-btn">
                                            <a href="#" data-toggle="collapse" className="btn card-collapse" data-target="#annualReports" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                            <a href="#" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                            <a href="#" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                            <a href="#" data-toggle="remove" className="btn card-remove"><i className="ion-ios-trash-outline"></i></a>
                                        </div>
                                    </div>
                                    <div className="collapse show" id="annualReports">
                                        <div className="card-body pd-t-0 pd-b-20">
                                            <div className="row clearfix">
                                                {["Sales Report", "Annual Revenue", "Total Profit"].map((t, i) => (
                                                    <div className="col-lg-4 col-md-4 col-sm-12 mg-y-20" key={i}>
                                                        <span className="tx-uppercase tx-10 mg-b-10">{t}</span>
                                                        <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">$<span className="counter">580,350</span><small className="tx-15">.50</small></h3>
                                                        <div className="tx-11 d-flex tx-gray-500"><span className="text-success mr-2 d-flex align-items-center"><i className="ion-android-arrow-up mr-1"></i>+535%</span>avg. sales per year</div>
                                                        <p className="mg-t-10 mg-b-0 tx-12 tx-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="">Learn More</a></p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="d-block clearfix"><canvas ref={annualReportCanvasRef} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-xl-4">
                                <div className="row">
                                    <div className="col-lg-6 col-xl-12">
                                        <div className="card mg-b-20">
                                            <div className="card-body">
                                                <div id="sales_slider" className="carousel slide" data-ride="carousel" data-interval="4000">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="tx-10 tx-uppercase tx-gray-500">Sales</span>
                                                        <div className="btn-group border-0">
                                                            <div className="sw-carousel-slider-control">
                                                                <a className="tx-dark carousel-control-prev" href="#sales_slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                                                <a className="tx-dark carousel-control-next" href="#sales_slider" data-slide="next"><i className="fa fa-angle-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+110</span>) higher than previous day</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$2,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div ref={salesSparkRefs[0]}></div></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Annual Revenue</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+150</span>) higher than previous week</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$4,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div ref={salesSparkRefs[1]}></div></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Total Profit</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+170</span>) higher than previous month</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$5,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div ref={salesSparkRefs[2]}></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-12">
                                        <div className="card mg-b-20">
                                            <div className="card-body">
                                                <div id="order_slider" className="carousel slide" data-ride="carousel" data-interval="5000">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="tx-10 tx-uppercase tx-gray-500">Order</span>
                                                        <div className="btn-group border-0">
                                                            <div className="sw-carousel-slider-control">
                                                                <a className="tx-dark carousel-control-prev" href="#order_slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                                                <a className="tx-dark carousel-control-next" href="#order_slider" data-slide="next"><i className="fa fa-angle-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+180</span>) higher than previous day</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$6,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div ref={orderSparkRef}></div></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Annual Revenue</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+140</span>) higher than previous week</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$7,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div></div></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Total Profit</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+120</span>) higher than previous month</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$8,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-12 hidden-md">
                                        <div className="card mg-b-20">
                                            <div className="card-body">
                                                <div id="revenue_slider" className="carousel slide" data-ride="carousel" data-interval="6000">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="tx-10 tx-uppercase tx-gray-500">Revenue</span>
                                                        <div className="btn-group border-0">
                                                            <div className="sw-carousel-slider-control">
                                                                <a className="tx-dark carousel-control-prev" href="#revenue_slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                                                <a className="tx-dark carousel-control-next" href="#revenue_slider" data-slide="next"><i className="fa fa-angle-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+110</span>) higher than previous day</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$9,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div ref={revenueSparkRef}></div></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Annual Revenue</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+120</span>) higher than previous week</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$7,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div></div></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="d-flex pd-b-20">
                                                                <div className="mg-t-15">
                                                                    <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Total Profit</h3>
                                                                    <p className="tx-10 tx-normal mb-0 tx-gray-500">(<span className="text-success tx-10"><i className="ion-android-arrow-up mr-1"></i>+150</span>) higher than previous month</p>
                                                                </div>
                                                                <div className="mg-l-auto tx-right">
                                                                    <span className="tx-10 tx-uppercase tx-spacing-1 tx-medium">Earning</span>
                                                                    <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$5,562</h5>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"><div></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-xs clearfix">
                            <div className="col-xl-4"><div className="card mg-b-20"><div className="card-header"><h4 className="card-header-title">Transaction History</h4></div><div className="card-body"><ul className="list-group list-group-flush tx-13"><li className="list-group-item d-flex pd-sm-x-20">Sample transaction list...</li></ul></div></div></div>
                            <div className="col-xl-8"><div className="card mg-b-20"><div className="card-header"><h4 className="card-header-title">Recent Earnings</h4></div><div className="card-body pd-0"><div className="table-responsive"><table className="table table-hover mg-b-0"><thead><tr><th>Date</th><th className="text-right">Sales Count</th><th className="text-right">Gross Earnings</th><th className="text-right">Tax Withheld</th><th className="text-right">Net Earnings</th></tr></thead><tbody><tr><td>03/05/2019</td><td className="text-right">1,050</td><td className="text-right">+ $2,580<small className="tx-10">.50</small></td><td className="text-right">- $3,023<small className="tx-10">.50</small></td><td className="text-right">$2,670<small className="tx-10">.50</small></td></tr></tbody></table></div></div></div></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}


